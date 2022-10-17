import Button from "react-bootstrap/Button"

const Card = (props) => {
    
  return (
    <div className= "cardpizza">
      <img src={props.img} alt = {props.name} style={{width: "200px"}}/>
      <h3> {props.name} </h3>
      <h6>Ingredientes:</h6>
      <ul>
        <li>🍕 {props.ingredients[0]}</li>
        <li>🍕 {props.ingredients[1]}</li>
        <li>🍕 {props.ingredients[2]}</li>
        <li>🍕 {props.ingredients[3]}</li>
      </ul>
      <h3> $ {props.price}</h3>
      <div>
        <Button variant="success" onClick={props.onClickb1}>Ver más 👀</Button>
        <Button variant="danger" onClick={props.onClickb2}>Agregar 🛒</Button>
      </div>
    </div>
  )
}

export default Card