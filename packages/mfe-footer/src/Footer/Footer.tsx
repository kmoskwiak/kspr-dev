import { Footer as FooterContainer } from "@kspr-dev/common/components/Footer";
import { Container } from "@kspr-dev/common/components/Container";

export const Footer = () => {
  return (
    <Container marginTop="3rem">
      <FooterContainer avatar="/me.jpg" />
    </Container>
  );
};
