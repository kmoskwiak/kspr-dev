import React from "react";
import { Route, Routes } from "react-router-dom";
const Articles = React.lazy(() => import("kspr_dev_articles/Articles"));

export const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                Hello!
                <Articles />
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
};
