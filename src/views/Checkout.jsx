import { useContext } from 'react'
import { PizzasContext } from '../context/PizzasContext'
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom'

const Checkout = () => {
  const {carro, setCarro } = useContext(PizzasContext)
  
  const changeSelected = (id, n, condition) => {
    setCarro((current) =>
      current.map((pizza) => {
        if (pizza.id === id) {
          if (condition === "add") {
            return { ...pizza, selected: n + 1 };
          } else if (condition === "rest" && n > 1) {
            return { ...pizza, selected: n - 1 };
          }
        }
        return pizza;
      })
    );
  };

  return (
    <div className="checkout"> 
      <h1> Carrito de Compras:</h1>
      <table>
      
        <thead>
          
          <tr>
            <th></th>
            <th>Tipo</th>
            <th>Cantidad</th>
            <th>Valor p/u</th> 
            <th>Total</th>  
          </tr>
        </thead>
        <tbody>
          {carro.map((pizza) => 
            <tr key={pizza.id}>
              <td><img src={pizza.image} alt= "imagen de la pizza" className="tinyImg"/></td>
              <td>{pizza.name}</td>
              <td>{pizza.price}</td>
              <td className='checkoutbuttons'>
              <button className="btnchart" onClick={() => changeSelected( pizza.id, pizza.selected, "rest")}> - </button>
              <p>{pizza.selected}</p>
              <button className="btnchart" onClick={() => changeSelected( pizza.id, pizza.selected, "add")}> + </button>
              </td>
              <td> {pizza.price * pizza.selected}</td>
              
            </tr>)}
        </tbody>
      </table>
      <h1> El Total a Pagar es: {carro
              .map((pizza) => pizza.price * pizza.selected)
              .reduce((previousValue, currentValue) => previousValue + currentValue, 0) }
      </h1>
      <div className="checkoutbuttons">      
        <Button variant="primary">Ir a pagar</Button>
        <Button as={Link} to="/Home" variant="success">Volver 🏠</Button>
      </div>
    </div>
  )
}

export default Checkout