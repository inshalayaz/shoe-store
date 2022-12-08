import React from 'react'
import Products from '../../components/Products/Products'

const Store = () => {
  return (
    <div>
        <Products isStore="true" />
        <Products isStore="true"/>
    </div>
  )
}

export default Store