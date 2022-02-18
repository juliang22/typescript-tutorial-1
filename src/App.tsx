import React, { useState } from 'react';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';


export interface IPeeps {
  peeps: {
    name: string;
    age: number;
    url: string;
    note?: string
  }[]
}

function App() {

  const [peeps, setPeeps] = useState<IPeeps["peeps"]>([])
  return (
    <div className="App">
      <h1>People invited to my party</h1>
      {<List peeps={peeps} />}
      {<AddToList peeps={peeps} setPeeps={setPeeps} />}
    </div>
  );
}

export default App;
