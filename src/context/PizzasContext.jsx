import { createContext, useEffect, useState } from 'react'

export const PizzasContext = createContext({});
    

export const PizzasContextProvider = ({children}) => {
    const [pizzas, setPizzas] = useState([])
    const [details, setDetails] =useState([])
    const [carro, setCarro] = useState([])
    
    
    useEffect(() => {
        const getpizzas = async () =>{
            const response = await fetch("/pizzas.json")
            const data = await response.json()
            const dataModify = data.map((pizza) =>({
                id: pizza.id,
                image: pizza.img,
                ingredients: pizza.ingredients,
                description: pizza.desc,
                name: pizza.name,
                price: pizza.price,
                details: false,
                selected: 0,
                total: 0,
                }))
            setPizzas(dataModify); 
        };
        getpizzas();
    },[]);

    return(
        <PizzasContext.Provider value={{pizzas, setPizzas,carro, setCarro, details,setDetails}} >
            { children }
        </PizzasContext.Provider>    
    )

}

