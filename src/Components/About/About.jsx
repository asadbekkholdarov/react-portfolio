import "./About.css";
import Award from "../../img/award.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/10263343/pexels-photo-10263343.jpeg?cs=srgb&dl=pexels-anna-tis-10263343.jpg&fm=jpg"
            className="a-img"
            alt=""
          />
        </div>
      </div>
      <div className="a-right">
        <br /> <br />
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet vel
          labore explicabo
        </p>
        <br />
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, facere
          asperiores ipsum, neque reiciendis, quos incidunt ut harum illum
          blanditiis expedita? erit commodi provident odit!
        </p>
        <div className="a-award">
          <img src={Award} className="a-award-img" alt="" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Coder</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
