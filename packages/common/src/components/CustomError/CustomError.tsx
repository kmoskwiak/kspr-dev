import { useTheme } from '@emotion/react';
import { Container } from '../Container';
import { styles } from './CustomError.css';

interface ErrorProps {
  code?: number;
}

export const CustomError = ({
  code
}: ErrorProps) => {
  const theme = useTheme();
  const color = '#ed2f6f';


  if (code === 404) {
    return (
      <Container>
        <div css={styles(theme)}>
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div css={styles(theme)}>
        <h1>Something went wrong</h1>
        <p>Sorry, some unexpected error happened.</p>
      </div>
    </Container>
  )

};
