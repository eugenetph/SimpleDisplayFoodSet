import React from 'react'
import './SideDrawer.css'

import { Card, Button, Drawer } from 'antd'

const SideDrawer = ({ visible, setVisible, cardOrder, setCardOrder }) => {

  const temp = [
    {
      key: 'chicken rice',
      title: 'Chicken Rice',
      desc: 'Chicken rice is a dish of poached chicken and seasoned rice, served with chilli sauce and usually comes with cucumber garnishes.'
    },
    {
      key: 'fish soup',
      title: 'Fish Soup',
      desc: 'Fish soup is a food made by combining fish or seafood with vegetables and stock, juice, water, or another liquid. Hot soups are additionally characterized by boiling solid ingredients in liquids in a pot until the flavors are extracted, forming a broth.'
    },
    {
      key: 'beef bowl',
      title: 'Beef Bowl',
      desc: 'Tender and succulent beef strips with a black pepper flavoured sauce, Chinese black pepper beef stir-fry can be made at home to a restaurant standard. '
    }
  ]

  const cardOrderHandler = (order) => {
    if (cardOrder.includes(order)) {
      const newOrder = cardOrder.filter(item => item !== order)
      setCardOrder(newOrder)
    } else {
      setCardOrder([...cardOrder, order])
    }
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <div>
      <Drawer
        title="Cards Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >{
          temp.map((item, index) =>
            <Card key={index} className='drawer-card' title={item.title}>
              <p>{item.desc}</p>
              <Button
                className='drawer-button'
                type={cardOrder.includes(item.key) ? 'danger' : 'primary'}
                onClick={() => { cardOrderHandler(item.key) }}
                ghost
              >
                {cardOrder.includes(item.key) ? 'Remove' : 'Add'}
              </Button>
            </Card>
          )
        }
      </Drawer>

    </div>
  )
}

export default SideDrawer