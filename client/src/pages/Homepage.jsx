import { Link } from "react-router-dom";
import HomeSection from "../components/HomeSection"
import StorySection from "../components/StorySection"
// import './Home.css'

const HomePage = () => {
  return (
    <div>
      <HomeSection />
     
      <section className="">
        <div className="newsletter__bg grid">
          <div>
            <h2 className="newsletter__title">Consult Psychiatrist</h2>
            <p className="newsletter__description">
            It is the journey that takes you to new destinations every day with endless possibilities of life on the back of happiness, energy, and hope. Practo wants to make this journey easy for every Indian and help them live healthier and longer lives.
            </p>
          </div>

          <form action="" className="newsletter__subscribe">
              <Link to='/consult' style={{color:'white'}}>
            <button className="button">
                  Psychiatrist
            </button>
              </Link>
          </form>
        </div>
      </section>
      <section className="  ">
        <div className="newsletter__bg grid">
          <h2 className="newsletter__title">Report CyberBulling</h2>
          <p className="newsletter__description">
          All the details you submit will strictly be kept confidential. Once you have submitted your details, our team members will reach out to you on email and guide you with the next steps
          </p>
          <Link to='/report'>
          <button className="button">Report</button>
          </Link>
        </div>
      </section>
      <StorySection />
    </div>
  );
}

export default HomePage
