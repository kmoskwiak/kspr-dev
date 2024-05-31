import { HeadBar } from "@kspr-dev/common/components/HeadBar";
import { Menu } from "@kspr-dev/common/components/Menu";
import { Container } from "@kspr-dev/common/components/Container";

export const Header = () => {
  return (
    <Container marginTop="3rem">
      <HeadBar>
        <Menu links={[
          {
            title: 'Home',
            url: '/',
          },
          {
            title: 'Articles',
            url: '/articles',
          },
          {
            title: 'Projects',
            url: '/projects',
          },
        ]} />
      </HeadBar>
    </Container>
  );
};
