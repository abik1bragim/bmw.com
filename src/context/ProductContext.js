import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
export const ProductContext = createContext()



export const ProductContextProvider = ({ children }) => {

    const boshlanish = [
        {
            id: 1,
            title: "Olma",
            price: 200,
            imgUrl: ""
        }
    ]

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD_PRODUCT":
                return [...state, {
                    id: uuidv4(),
                    title: action.payload.title,
                    price: action.payload.price,
                    imgUrl: action.payload.image
                }]

            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, boshlanish)
    return <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>
}