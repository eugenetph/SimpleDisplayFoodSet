import React, { useState } from 'react';
import './App.css';

import { Button } from 'antd'

import 'antd/dist/antd.css';

import SideDrawer from './components/SideDrawer'
import Feature from './components/Feature'

function App() {

  const [visible, setVisible] = useState(false)
  const [cardOrder, setCardOrder] = useState([])

  return (
    <div className="App">
      <h1>Display Your Food Set</h1>
      <Button onClick={() => setVisible(true)}>Open Drawer</Button>
      <SideDrawer visible={visible} setVisible={setVisible} cardOrder={cardOrder} setCardOrder={setCardOrder} />
      <Feature cardOrder={cardOrder} setVisible={setVisible} />
    </div>
  );
}

export default App;
