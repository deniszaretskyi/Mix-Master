import Wrapper from "../../assets/wrappers/AboutPage";
import aboutImg from "../../assets/aboutUs.svg";
const About = () => {
  return (
    <Wrapper>
      <div className="AboutText">
        <h3>
          About <span>US</span>
        </h3>
        <p>
          Introducing "MixMaster," the ultimate party sidekick app that fetches
          cocktails from the hilarious Cocktails DB API. With a flick of your
          finger, you'll unlock a treasure trove of enchanting drink recipes
          that'll make your taste buds dance and your friends jump with joy. Get
          ready to shake up your mixology game, one fantastical mocktail at a
          time, and let the laughter and giggles flow!
        </p>
      </div>
      <img src={aboutImg} alt="About section image" />
    </Wrapper>
  );
};

export default About;
