import React, { useState, useReducer } from 'react';
import './App.css';

import { Button } from 'antd'

import 'antd/dist/antd.css';

import SideDrawer from './components/SideDrawer'
import Feature from './components/Feature'

import FoodReducer from './components/reducer/FoodReducer'
import { FoodProvider } from './components/context/FoodContext'

function App() {
  
  const [state, dispatch] = useReducer(FoodReducer, [])

  const [visible, setVisible] = useState(false)

  return (
    <FoodProvider value={{ state, dispatch }}>
      <div className="App">
        <h1>Display Your Food Set</h1>
        <Button onClick={() => setVisible(true)}>Open Drawer</Button>
        <SideDrawer visible={visible} setVisible={setVisible}/>
        <Feature />
      </div>
    </FoodProvider>
  );
}

export default App;
