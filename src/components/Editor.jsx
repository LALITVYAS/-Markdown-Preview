import React from 'react';

const Editor = ({ markdown, onChange, fontSize }) => {
  return (
    <div className="editor-pane">
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => onChange(e.target.value)}
        style={{ fontSize: `${fontSize}px` }}
        placeholder="Write your markdown here..."
      />
    </div>
  );
};

export default Editor;