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
              Don't miss out on your discounts. Subscribe to our email
              newsletter to get the best offers, discounts, coupons, gifts and
              much more.
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
            Don't miss out on your discounts. Subscribe to our email newsletter
            to get the best offers, discounts, coupons, gifts and much more.
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
