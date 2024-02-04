import { GoDotFill } from "react-icons/go";
import "../button/button.css"

const Button = ({text}) => {
  return (
  <div className="btnContainer">
    <span className="icon" ><GoDotFill /></span>
    <p className="btnText">{text}</p>
    </div>
  )
}

export default Button