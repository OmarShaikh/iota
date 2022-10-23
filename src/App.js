import React from 'react';
import API from './API';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import 'antd/dist/antd.min.css';
import '../src/Assets/Styles/App.css';

function App() {
  return (
    <div className='App'>
      <API>
        <Dashboard />
      </API>
    </div>
  );
}

export default App;
