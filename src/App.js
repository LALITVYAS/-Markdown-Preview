import { useState } from 'react';
import { marked } from 'marked';
import Editor from './components/Editor.jsx';
import Preview from './components/Preview.jsx';
import Toolbar from './components/Toolbar.jsx';
import ThemeSelector from './components/ThemeSelector';
import FileHandler from './components/FileHandler.jsx';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState('# Hello, Markdown!');
  const [theme, setTheme] = useState('light');
  const [editorFontSize, setEditorFontSize] = useState(16);

  const handleMarkdownChange = (newMarkdown) => {
    setMarkdown(newMarkdown);
  };

  return (
    <div className={`app ${theme}`}>
      <div className="controls">
        <ThemeSelector theme={theme} setTheme={setTheme} />
        <FileHandler markdown={markdown} />
      </div>
      
      <div className="editor-container">
        <Toolbar 
          markdown={markdown} 
          setMarkdown={setMarkdown}
          fontSize={editorFontSize}
          setFontSize={setEditorFontSize}
        />
        <div className="panes">
          <Editor 
            markdown={markdown} 
            onChange={handleMarkdownChange} 
            fontSize={editorFontSize}
          />
          <Preview markdown={markdown} />
        </div>
      </div>
    </div>
  );
}

export default App;