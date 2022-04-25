import "./seoul.css";
import Seoul1 from '../../images/seoul1.jpg';
import Seoul2 from '../../images/seoul2.jpg';
import Seoul3 from '../../images/seoul3.jpg';

const Seoul = () => {
  return (
    <>
      <div className="container seoul">
        <div className="content">
          <h6>About <span>Seoul</span></h6>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={Seoul1} alt="" className="img-fluid" />
              <div className="box_content">
                <h4>Land Mark</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <img src={Seoul2} alt="" className="img-fluid" />
              <div className="box_content">
                <h4>Restaurant</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <img src={Seoul3} alt="" className="img-fluid" />
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
export default Seoul;