import * as React from "react";
import {
  createContext,
  FC,
  useContext,
  useEffect,
  useId,
  useState,
} from "react";

export const InternalContext = createContext({
  effects: {},
  isServer: false,
  settled: false,
  promises: [],
});

export const DataContext = createContext({
  effects: {},
});

export const getServerSideData = (id: string) => {
  if (typeof window !== "undefined") {
    //@ts-expect-error window.__useSSE_data is not defined in the global scope
    return window.__useSSE_data?.[id];
  }
};

export type UseSSE = <TReturnData = unknown, TError = unknown>(
  effect: () => Promise<TReturnData>,
  dependencies: React.DependencyList
) => [TReturnData, TError];

export const useSSE: UseSSE = (effect, dependencies) => {
  const effectId = useId();
  const dataCtx = useContext(DataContext);
  const internalCtx = useContext(InternalContext);
  const internalReference = internalCtx.effects[effectId];
  const [data, setData] = useState(
    internalReference?.data || getServerSideData(effectId)?.data || null
  );
  const [error, setError] = useState(
    internalReference?.error || getServerSideData(effectId)?.error || null
  );

  if (internalCtx.isServer) {
    const promise = promiseWrapper(
      effect,
      effectId,
      dataCtx,
      internalCtx
    );

    if (!internalCtx.effects[effectId]) {
      internalCtx.effects[effectId] = { data: null, error: null };
      promise.run();
    }

    return [dataCtx.effects[effectId].data, dataCtx.effects[effectId].error];
  }

  useEffect(() => {
    if (data || error) {
      return;
    }
    effect()
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, dependencies);

  return [data, error];
};

function promiseWrapper(
  effect,
  effectId,
  dataCtx,
  internalCtx
) {
  let result = null;
  let error = null;
  let promise = null;
  return {
    run() {
      if (result) {
        return [result, null];
      }
      if (error) {
        return [null, error];
      }
      if (promise) {
        throw promise;
      }
      promise = effect()
        .then((effectResult) => {
          result = effectResult;
          dataCtx.effects[effectId] = { data: result, error: null };
          promise = null;
        })
        .catch((err) => {
          error = err;
          dataCtx.effects[effectId] = { data: null, error };
          promise = null;
        });
      internalCtx.promises.push(promise);
      throw promise;
    },
  };
}

const waitWrapper = (internalCtx) => {
  let promise = null;
  return {
    run() {
      if (internalCtx.settled) {
        return internalCtx.settled;
      }
      if (promise) {
        throw promise;
      }

      promise = Promise.allSettled(internalCtx.promises).then(() => {
        internalCtx.settled = true;
        promise = null;
      });

      throw promise;
    },
  };
};

const useWaitForResolve = () => {
  const internalCtx = useContext(InternalContext);
  if (internalCtx && internalCtx.isServer) {
    waitWrapper(internalCtx).run();
  }
};

const getIds = (dataContextValue) => {
  return Object.keys(dataContextValue.effects);
};

const ScriptInjector = () => {
  const dataContextValue = useContext(DataContext);
  const effects = dataContextValue.effects;
  useWaitForResolve();
  const createScript = () => ({
    __html: `
        window.__useSSE_data = {
            ...window.__useSSE_data,
            ...(${JSON.stringify(effects)})
        };
    `,
  });
  const ids = getIds(dataContextValue);
  return (
    <script
      data-use-sse
      data-use-sse-ids={ids}
      suppressHydrationWarning
      dangerouslySetInnerHTML={createScript()}
    />
  );
};

export const ServerDataProvider: FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const internalContextValue = {
    effects: {},
    isServer: true,
    settled: false,
    promises: [],
  };
  const dataContextValue = {
    effects: {},
  };

  return (
    <InternalContext.Provider value={internalContextValue}>
      <DataContext.Provider value={dataContextValue}>
        <>{children}</>
        <ScriptInjector />
      </DataContext.Provider>
    </InternalContext.Provider>
  );
};

export const BrowserDataProvider: FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const internalContextValue = {
    effects: {},
    isServer: false,
    settled: false,
    promises: [],
  };
  const dataContextValue = {
    effects: {},
  };

  return (
    <InternalContext.Provider value={internalContextValue}>
      <DataContext.Provider value={dataContextValue}>
        <>{children}</>
        <ScriptInjector />
      </DataContext.Provider>
    </InternalContext.Provider>
  );
};
