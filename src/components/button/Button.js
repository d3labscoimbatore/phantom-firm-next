import { GoDotFill } from "react-icons/go";
import "../button/button.css"

const Button = ({text}) => {
  return (
  <div className="btnContainer">
    <span className="icon" ><GoDotFill /></span>
    <h5 className="btnText">{text}</h5>
    </div>
  )
}

export default Button