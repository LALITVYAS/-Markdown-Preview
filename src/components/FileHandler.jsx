import React from 'react';

const FileHandler = ({ markdown }) => {
  const downloadMarkdownFile = () => {
    const element = document.createElement('a');
    const file = new Blob([markdown], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = 'README.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdown)
      .then(() => alert('Markdown copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err));
  };

  return (
    <div className="file-handler">
      <button onClick={downloadMarkdownFile}>Download README.md</button>
      <button onClick={copyToClipboard}>Copy to Clipboard</button>
    </div>
  );
};

export default FileHandler;