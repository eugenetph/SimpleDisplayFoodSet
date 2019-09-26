import React, { useMemo, useContext } from 'react'
import './Feature.css'

import ChickenRice from '../assets/Chicken-Rice.jpg'
import FishSoup from '../assets/Han-Kee-Fish-Soup-2.jpg'
import BeefBowl from '../assets/Pepper-Bowl-2-1.jpg'

import { Card } from 'antd'

import FoodContext from './context/FoodContext'

const Feature = ({ setVisible }) => {

  const context = useContext(FoodContext)

  const featureCards = {
    'chicken rice': {
      title: 'Chicken Rice',
      img: ChickenRice
    },
    'fish soup': {
      title: 'Fish Soup',
      img: FishSoup
    },
    'beef bowl': {
      title: 'Black Pepper Beef Rice',
      img: BeefBowl
    }
  }

  const cardMemo = useMemo(() => {
    return context.state.map(order => featureCards[order])
  }, [context.state, featureCards])

  return (
    <div className='feature-container'>
      {cardMemo.map((item, index) =>
        <div key={index}>
          <Card 
          className='feature-card' onClick={() => setVisible(true)} title={item.title}>
            <img className='image' src={item.img} alt={item.title} />
          </Card>
        </div>
      )}
      <div>
        {cardMemo.length !== 3 &&<Card className='feature-card' onClick={() => setVisible(true)}>
          <h1>No Food Set </h1>
          <p className='empty-card-desc'>Add your food set here by clicking on this card</p>
        </Card>}
      </div>
    </div>
  )
}

export default Feature