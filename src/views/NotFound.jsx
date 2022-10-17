import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <h1>NotFound (Error 404)</h1>
      <Button as={Link} to="/Home" variant="success">Volver 🏠</Button>
    </>
  )
}

export default NotFound