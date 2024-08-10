import React, { useState } from 'react';
import sqlCommands from './sqlcommand';
import './App.css';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const command = searchTerm.trim().toUpperCase();
    const foundCommand = sqlCommands.find(cmd => cmd.command === command);
    setResult(foundCommand || null);
  };

  return (


    <div className="App">
     
      <h1>SQL Command Search</h1>
      <input 
        type="text" 
        placeholder="Enter SQL command..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {result ? (
        <div id="result">
          <h3>{result.command}</h3>
          <p><strong>Meaning:</strong> {result.meaning}</p>
          <p><strong>Example:</strong> <code id="code">{result.example}</code></p>
        </div>
      ) : (
        searchTerm && <p>Command not found. Please try again.</p>
      )}



    </div>
   
  );


}

export default App;
