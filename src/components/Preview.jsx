import React from 'react';
import { marked } from 'marked';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Configure marked to use react-syntax-highlighter
marked.setOptions({
  highlight: (code, language) => {
    return (
      <SyntaxHighlighter language={language} style={tomorrow}>
        {code}
      </SyntaxHighlighter>
    );
  },
  breaks: true,
  gfm: true
});

const Preview = ({ markdown }) => {
  const getMarkdownText = () => {
    const rawMarkup = marked(markdown);
    return { __html: rawMarkup };
  };

  return (
    <div className="preview-pane">
      <div 
        id="preview" 
        dangerouslySetInnerHTML={getMarkdownText()} 
      />
    </div>
  );
};

export default Preview;