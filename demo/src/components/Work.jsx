import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import maskable from "/assets/maskable.svg";
import responsive from "/assets/responsive.svg";
import website from "/assets/website.svg";
import dynamicLogo from "/assets/dynamic-logo.svg";
import sammapannaLogo from "/assets/sammapanna-logo.svg";
import buddhaHead from "/assets/buddha-head.svg";

function Work() {
  return (
    <>
      <Header />
      <main id="work">
        <h1 className="lg-heading">
          My <span className="text-secondery">Work</span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="projects">
          <div className="item">
            <Link to="https://snbhante.github.io/">
              <img src={website} alt="Website" />
            </Link>
            <Link
              to="https://snbhante.github.io/"
              className="btn-light"
            >
              <i className="fas fa-eye"></i> Project Demo
            </Link>
            <Link
              to="https://github.com/sarbanandabhikkhu/"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Source Code
            </Link>
          </div>
          <div className="item">
            <Link to="https://snbhante.github.io/">
              <img src={responsive} alt="Responsive" />
            </Link>
            <Link
              to="https://snbhante.github.io/"
              className="btn-light"
            >
              <i className="fas fa-eye"></i> Project Demo
            </Link>
            <Link
              to="https://github.com/sarbanandabhikkhu/"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Source Code
            </Link>
          </div>
          <div className="item">
            <Link to="https://snbhante.github.io/">
              <img src={dynamicLogo} alt="Dynamic" />
            </Link>
            <Link to="" className="btn-light">
              <i className="fas fa-eye"></i> Project Demo
            </Link>
            <Link
              to="https://github.com/sarbanandabhikkhu/"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Source Code
            </Link>
          </div>
          <div className="item">
            <Link to="https://snbhante.github.io/SammaPanna/">
              <img src={sammapannaLogo} alt="SammaPanna" />
            </Link>
            <Link to="" className="btn-light">
              <i className="fas fa-eye"></i> Project Demo
            </Link>
            <Link
              to="https://github.com/sarbanandabhikkhu/"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Source Code
            </Link>
          </div>
          <div className="item">
            <Link to="https://snbhante.github.io/DhammaChakka/">
              <img src={maskable} alt="DhammaChakka" />
            </Link>
            <Link
              to="https://snbhante.github.io/DhammaChakka/"
              className="btn-light"
            >
              <i className="fas fa-eye"></i> Project Demo
            </Link>
            <Link
              to="https://github.com/sarbanandabhikkhu/DhammaChakka/"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Source Code
            </Link>
          </div>
          <div className="item">
            <Link to="https://snbhante.github.io/">
              <img src={buddhaHead} alt="Buddha Head" />
            </Link>
            <Link
              to="https://snbhante.github.io/"
              className="btn-light"
            >
              <i className="fas fa-eye"></i> Project Demo
            </Link>
            <Link
              to="https://github.com/sarbanandabhikkhu/BuddhaHead"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Source Code
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Work;
