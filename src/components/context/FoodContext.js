import React from 'react'

const FoodContext = React.createContext()

export const FoodProvider = FoodContext.Provider
export const FoodConsumer = FoodContext.Consumer

export default FoodContext