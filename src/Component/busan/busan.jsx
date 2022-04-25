import "./busan.css";
import Busan1 from '../../images/busan1.jpg';
import Busan2 from '../../images/busan2.jpg';
import Busan3 from '../../images/busan3.jpg';

const Busan = () => {
  return (
    <>
      <div className="container busan">
        <div className="content">
          <h6>About <span>Busan</span></h6>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={Busan1} alt="" className="img-fluid" />
              <div className="box_content">
                <h4>Land Mark</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <img src={Busan2} alt="" className="img-fluid" />
              <div className="box_content">
                <h4>Restaurant</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <img src={Busan3} alt="" className="img-fluid" />
              <div className="box_content">
                <h4>Cafe</h4>
              </div>
            </div>
          </div>
      </div>
      </div>
    </>
  );
};
export default Busan;