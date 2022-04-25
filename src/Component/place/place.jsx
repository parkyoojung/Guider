import "./place.css";
import Place1 from "../../images/place1.jpg";
import Place2 from "../../images/place2.jpg";
import Place3 from "../../images/place3.jpg";

const Place = () => {
  return (
    <>
      <div className="place container">
        <div className="content">
          <h6>Popular Place in <span>Korea</span></h6>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={Place1} alt="" className="img-fluid" />
              <div className="Overlay"></div>
              <div className="box_content">
                <h6>Seoul</h6>
                <p>199+ Places</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <img src={Place2} alt="" className="img-fluid" />
              <div className="Overlay"></div>
              <div className="box_content">
                <h6>Jeju Island</h6>
                <p>199+ Places</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <img src={Place3} alt="" className="img-fluid" />
              <div className="Overlay"></div>
              <div className="box_content">
                <h6>Busan</h6>
                <p>199+ Places</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Place;