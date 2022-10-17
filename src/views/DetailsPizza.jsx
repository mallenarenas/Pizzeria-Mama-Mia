import { useContext,} from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { PizzasContext } from '../context/PizzasContext'


const DetailsPizza = () => {
    const { details, carro, setCarro } = useContext(PizzasContext);
    const changeCheckout = (pizza) => {
        if(pizza.selected === 0){
          setCarro([...carro, pizza])
          pizza.selected += 1
          alert("Su 🍕 se añadió al carro de compras" )
        }
        else{
          alert("Esta pizza ya ha sido agregada. Diríjase al carro para aumentar el número de pizzas de este tipo." )
        }
      };
    return (
    <>
       
       <div className="containerDetails">
        <img src={details.image} alt = "Pizza" className="imageDetails"/>
        <div>
            <h1>{details.name}</h1>
            <p>{details.description}</p>
            <p>Ingredientes:</p>
            <ul>
                <li>🍕 {details.ingredients[0]}</li>
                <li>🍕 {details.ingredients[1]}</li>
                <li>🍕 {details.ingredients[2]}</li>
                <li>🍕 {details.ingredients[3]}</li>
            </ul>
            <div className="priceDetails">
                <h3>Precio: $ {details.price}</h3>
                <Button variant = "danger" onClick={()=>{
                    changeCheckout(details)
                }}>Agregar 🛒</Button>
            </div>
        </div>    
           
       </div>
       <Button as={Link} to="/Home" variant="success">Volver 🏠</Button>
    </>   
   )
}

export default DetailsPizza