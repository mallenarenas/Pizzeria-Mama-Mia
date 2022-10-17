import { NavLink } from 'react-router-dom';
import '../assets/Navbar.css';
import { useContext } from 'react'
import { PizzasContext } from '../context/PizzasContext'
import { Button } from 'react-bootstrap';

const Navbar = () => {
  const { carro } = useContext(PizzasContext)
 
  return (
    <div className="Navbar">
      <div className="container1">
      <img className='imgicons' src="icons8-pizza-65.png" alt="Plato de pizza"/>
      <p className = "pnavbar">Pizzería Mamma Mía!</p>
      </div>
      <div className='container2'>  
      <p className="pnavbar"> Total: $ {carro
              .map((pizza) => pizza.price * pizza.selected)
              .reduce((previousValue, currentValue) => previousValue + currentValue, 0) } </p>
      <NavLink to="/carrito">  
      <Button variant="primary">Ir al <img className='imgicons'src="carrito-de-compras.png" alt="Carro de compras"/></Button> 
      </NavLink>
      
      </div>  
    </div>
  )
}

export default Navbar