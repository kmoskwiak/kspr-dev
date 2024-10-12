import { Container } from "@kspr-dev/common/components/Container";
import { HeadBar } from "@kspr-dev/common/components/HeadBar";
import { Menu } from "@kspr-dev/common/components/Menu";
import { useSSE } from "@kspr-dev/use-sse";
import axios from "axios";

const API = "https://cms.kspr.dev/items/MainMenu";

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
    return axios.get<MenuResponse>(API, { withCredentials: false }).then((res) => res?.data?.data?.items || null);
  }, []);


  return (
    <Container marginTop="3rem" zIndex="999">
      <HeadBar>
        {data && <Menu links={data} />}
      </HeadBar>
    </Container>
  );
};
