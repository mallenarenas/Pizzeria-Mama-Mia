import { useContext } from 'react'
import { PizzasContext } from '../context/PizzasContext'
import Header from "../components/Header";
import Card from "../components/Card";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { pizzas, setDetails, carro,setCarro } = useContext(PizzasContext)
  const navigate = useNavigate();
  const irApizza = (pizza) =>{
    navigate(`/pizza/${pizza.id}`)
  }

//   const navigate = useNavigate();
  const changeDetails = (pizza) => {
        setDetails(pizza)
  };
  const changeSelected = (pizza) => {
    if(pizza.selected === 0){
      setCarro([...carro, pizza])
      pizza.selected += 1
      alert("Su 🍕 se añadió al carro" )
    }
    else{
      alert("En el carro puede modificar la cantidad" )
    }
  };
 
  return (
    <>
    <Header/>
    <div className='gallery'>
    {pizzas.map((pizza)=>(
      <Card key={pizza.id}
      name={pizza.name} 
      img={pizza.image}
      ingredients={pizza.ingredients}
      price={pizza.price} 
      onClickb1={()=>{
        changeDetails(pizza)
        irApizza(pizza)
      }}
      onClickb2={()=>{
        changeSelected(pizza)
      }}/>
    ))}
    </div>
    
    </>
  )
}

export default Home