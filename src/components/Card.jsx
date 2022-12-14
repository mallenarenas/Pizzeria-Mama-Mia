import Button from "react-bootstrap/Button"

const Card = (props) => {
    
  return (
    <div className= "cardpizza">
      <img src={props.img} alt = {props.name} style={{width: "200px"}}/>
      <h3> {props.name} </h3>
      <h6>Ingredientes:</h6>
      <ul>
        <li>๐ {props.ingredients[0]}</li>
        <li>๐ {props.ingredients[1]}</li>
        <li>๐ {props.ingredients[2]}</li>
        <li>๐ {props.ingredients[3]}</li>
      </ul>
      <h3> $ {props.price}</h3>
      <div>
        <Button variant="success" onClick={props.onClickb1}>Ver mรกs ๐</Button>
        <Button variant="danger" onClick={props.onClickb2}>Agregar ๐</Button>
      </div>
    </div>
  )
}

export default Card