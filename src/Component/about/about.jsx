import "./about.css";
import AboutImg from "../../images/about.jpg";

const About = () => {
  return (
    <>
      {/* About */}
      <div className="container about">
        <div className="row">
          <div className="col-sm-5">
            <div className="box">
              <img src={AboutImg} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="offset-sm-2 col-sm-5">
            <h6>Travel</h6>
            <h5>Korea</h5>
            <p>Korea is a peninsular region in East Asia. Since 1945, it has been divided between two countries at or near the 38th parallel, North Korea (the Democratic People's Republic of Korea) and South Korea (the Republic of Korea). Korea consists of the Korean Peninsula, Jeju Island, and several minor islands near the peninsula. The peninsula is bordered by China to the northwest and Russia to the northeast. It is separated from Japan to the east by the Korea Strait and the East Sea. <br /> Korea has a temperate climate with comparatively fewer typhoons than other countries in East Asia. Due to the peninsula's position, it has a unique climate influenced by Siberia in the north, the Pacific Ocean in the east and the rest of Eurasia in the west. The peninsula has four distinct seasons: spring, summer, autumn and winter...</p>
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </>
  )
} 
export default About;