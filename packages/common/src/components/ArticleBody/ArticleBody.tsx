import { useTheme } from '@emotion/react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { styles } from './ArticleBody.css';
import { handleCustomComponent } from './components';

interface ArticleBodyProps {
  body?: string;
  bodyMd?: string;
}

export const ArticleBody = ({
  ...props
}: ArticleBodyProps) => {
  const theme = useTheme();

  if (props.bodyMd) {
    return (
      <div css={styles((theme))}>
        <Markdown
          components={{
            code(props) {
              const { children, className, node, ...rest } = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  style={atomDark}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            },
            img(props) {
              return handleCustomComponent(props);
            }
          }}
        >{props.bodyMd}</Markdown>
      </div>
    )
  }

  if (props.body) {
    return (
      <div css={styles(theme)} dangerouslySetInnerHTML={{ __html: props.body }} />
    )
  }

  return 'asd';
};
