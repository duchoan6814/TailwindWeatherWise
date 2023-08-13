import './App.css';
import React from 'react';
import { LeftSide } from 'components';

function App() {
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="bg-white basis-4/12">
        <LeftSide />
      </div>
      <div className="bg-gray-100 basis-8/12"></div>
    </div>
  );
}

export default App;
