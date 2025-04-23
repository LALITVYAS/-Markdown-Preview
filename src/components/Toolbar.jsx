import React from 'react';
import { FaBold, FaItalic, FaHeading, FaListUl, FaListOl, FaLink, FaImage, FaCode } from 'react-icons/fa';

const Toolbar = ({ markdown, setMarkdown, fontSize, setFontSize }) => {
  const insertAtCursor = (before, after = '') => {
    const textarea = document.getElementById('editor');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = markdown.substring(start, end);
    const newText = markdown.substring(0, start) + before + selectedText + after + markdown.substring(end);
    setMarkdown(newText);
    textarea.focus();
    textarea.selectionStart = start + before.length;
    textarea.selectionEnd = end + before.length;
  };

  const handleFontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value));
  };

  return (
    <div className="toolbar">
      <button onClick={() => insertAtCursor('**', '**')} title="Bold"><FaBold /></button>
      <button onClick={() => insertAtCursor('_', '_')} title="Italic"><FaItalic /></button>
      <button onClick={() => insertAtCursor('# ', '')} title="Heading"><FaHeading /></button>
      <button onClick={() => insertAtCursor('- ', '')} title="Unordered List"><FaListUl /></button>
      <button onClick={() => insertAtCursor('1. ', '')} title="Ordered List"><FaListOl /></button>
      <button onClick={() => insertAtCursor('[', '](url)')} title="Link"><FaLink /></button>
      <button onClick={() => insertAtCursor('![alt text](', ')')} title="Image"><FaImage /></button>
      <button onClick={() => insertAtCursor('```\n', '\n```')} title="Code Block"><FaCode /></button>
      
      <div className="font-controls">
        <label>Font Size:</label>
        <input 
          type="range" 
          min="12" 
          max="24" 
          value={fontSize} 
          onChange={handleFontSizeChange}
        />
        <span>{fontSize}px</span>
      </div>
    </div>
  );
};

export default Toolbar;