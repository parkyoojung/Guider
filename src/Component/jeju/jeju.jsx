import "./jeju.css";
import Jeju1 from '../../images/jeju1.jpg';
import Jeju2 from '../../images/jeju2.jpg';
import Jeju3 from '../../images/jeju3.jpg';

const Jeju = () => {
  return (
    <>
      <div className="container jeju">
        <div className="content">
          <h6>About <span>Jeju</span></h6>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={Jeju1} alt="" className="img-fluid" />
              <div className="box_content">
                <h4>Land Mark</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <img src={Jeju2} alt="" className="img-fluid" />
              <div className="box_content">
                <h4>Restaurant</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <img src={Jeju3} alt="" className="img-fluid" />
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
export default Jeju;