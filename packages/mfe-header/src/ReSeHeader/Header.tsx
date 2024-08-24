import { Container } from "@kspr-dev/common/components/Container";
import { Menu } from "@kspr-dev/common/components/Menu";
import { ReSeHeadBar } from "@kspr-dev/common/components/ReSeHeadBar";
import { useSSE } from "@kspr-dev/use-sse";
import axios from "axios";

const API = "https://cms.kspr.dev/items/ReSeMenu";

type MenuItem = {
  "name": string,
  "url": string
}

type MenuResponse = {
  "data": {
    "id": number,
    "items": MenuItem[]
  }
}

export const Header = () => {

  const [data] = useSSE<MenuItem[] | null>(() => {
    return axios.get<MenuResponse>(API, {withCredentials: false}).then((res) => res?.data?.data?.items || null);
  }, []);

  return (
    <Container marginTop="3rem" zIndex="999">
      <ReSeHeadBar>
        {data && <Menu links={data} />}
      </ReSeHeadBar>
    </Container>
  );
};
