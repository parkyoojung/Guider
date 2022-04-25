import './header.css';
import HeaderImg from "../../images/header.jpg";

const Header = () => {
  return(
    <>
      <div className="header">
        <div>
          <div className="img">
            <img src={HeaderImg} alt="" className="img-fluid" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="Content">
          <form action="">
            <h6>
              Arrange A Meeting <br /> With Our Specialist
            </h6>
            <div className="form-group">
              <input 
                type="text" required
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <input 
                type="number" required
                className="form-control"
                placeholder="Your Number"
                />
            </div>
            <div className="form-group">
              <input 
                type="email" required
                className="form-control"
                placeholder="Your Email"
                />
            </div>
            <div className="form-group">
              <textarea rows="6" required className="form-control" placeholder="Type Your Message..."></textarea>
            </div>
            <button className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </>
  )
}
export default Header;