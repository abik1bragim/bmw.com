import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import "./Cards.scss"
function Cards() {
    const { state } = useContext(ProductContext)
    console.log(state)
    return (
        <div>Cards</div>
    )
}

export default Cards