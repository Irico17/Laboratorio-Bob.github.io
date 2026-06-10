import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import mermaid from 'mermaid';

// Carbon Components
import { 
  UnorderedList, 
  ListItem, 
  OrderedList, 
  Link, 
  CodeSnippet,
  InlineNotification
} from '@carbon/react';

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
});

const Mermaid = ({ chart }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current && chart) {
      mermaid.render(`mermaid-${Math.random().toString(36).substring(7)}`, chart)
        .then(({ svg }) => {
          ref.current.innerHTML = svg;
        });
    }
  }, [chart]);

  return <div ref={ref} className="mermaid-diagram" />;
};

const MarkdownPage = ({ content }) => {
  return (
    <div className="markdown-container" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({node, ...props}) => <h1 className="cds--heading-expressive-05" style={{ marginBottom: '1.5rem', marginTop: '2rem' }} {...props} />,
          h2: ({node, ...props}) => <h2 className="cds--heading-expressive-04" style={{ marginBottom: '1rem', marginTop: '2.5rem' }} {...props} />,
          h3: ({node, ...props}) => <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem', marginTop: '1.5rem' }} {...props} />,
          p: ({node, ...props}) => <p className="cds--body-long-01" style={{ marginBottom: '1.5rem', lineHeight: '1.6' }} {...props} />,
          ul: ({node, ...props}) => <UnorderedList style={{ marginBottom: '1.5rem' }} {...props} />,
          ol: ({node, ...props}) => <OrderedList style={{ marginBottom: '1.5rem' }} {...props} />,
          li: ({node, ...props}) => <ListItem {...props} />,
          a: ({node, ...props}) => <Link href={props.href} target="_blank" rel="noopener noreferrer" {...props} />,
          blockquote: ({node, ...props}) => (
            <div style={{ marginBottom: '1.5rem' }}>
              <InlineNotification
                kind="info"
                lowContrast
                hideCloseButton
                title=""
                subtitle={<span {...props} />}
              />
            </div>
          ),
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '');
            const codeString = String(children).replace(/\n$/, '');
            
            if (match && match[1] === 'mermaid') {
              return <Mermaid chart={codeString} />;
            }
            
            return !inline && match ? (
              <div style={{ marginBottom: '1.5rem', marginTop: '1rem' }}>
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {codeString}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className="cds--snippet--inline" style={{ backgroundColor: '#e0e0e0', padding: '0.2rem 0.4rem', borderRadius: '2px' }} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownPage;
