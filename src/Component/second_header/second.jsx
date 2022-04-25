import "./second.css";
import SecondHeaderImage from "../../images/second_header.jpg";

const Second = () => {
  return (
    <>
      <div className="second">
        <div>
          <div className="img">
            <img src={SecondHeaderImage} alt="" />
          </div>
          <div className="Overlay"></div>
            <div className="Content">
              <h5>“ TO TRAVEL IS TO LIVE ”</h5>
              <p>Hans Christian Andersen</p>
            </div>
        </div>
      </div>
    </>
  )
}
export default Second;