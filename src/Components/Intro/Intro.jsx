import "./Intro.css";
import Me from "../../img/i-i-removebg-preview.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <div className="i-intro">Hello, I am </div>
          <div className="i-name">Asadbek</div>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">JS Developer</div>
              <div className="i-title-item">Student</div>
              <div className="i-title-item">Front-end Developer</div>
            </div>
          </div>
          <div className="i-desc">
            I am Asadbek, front-end and JS developer, starting out at the age 19
            I never stopped learning new programming skills and languages. Early
            I started making websites for my friends and just fun as well,
            besides web development.
          </div>
        </div>
      </div>

      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} className="i-img" alt="" />
      </div>
    </div>
  );
};

export default Intro;
