import { GoDotFill } from "react-icons/go";
import "../button/button.css"

const Button = ({text}) => {
  return (
  <div className="btnContainer">
    <span className="icon" ><GoDotFill /></span>
    <span className="btn">{text}</span>
    </div>
  )
}

export default Button