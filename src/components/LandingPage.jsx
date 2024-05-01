import Navbar from "./NavBar";
import { useSpring, animated } from "react-spring";
const LandingPage = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000 },
  });
  const styles1 = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 3000 },
  });
  const styles2 = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 4000 },
  });
  return (
    <section className="w-full h-[60vh] md:h-screen  bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('2531.jpg')] homepage bg-cover bg-no-repeat    ">
      <div className="w-full  ">
        <Navbar />

        <div className=" h-[40rem] flex flex-col items-center md:items-start justify-start md:justify-center gap-4 md:ml-80 pt-[10vh]">
          <animated.div style={styles}>
            <h1 className=" text-center md:text-left text-[1.2rem] sm:text-2xl md:text-4xl font-extralight  text-text">
              WELCOME TO
            </h1>
            <h1 className="text-center md:text-left text-[1.2rem] sm:text-2xl md:text-6xl font-bold font-serif text-text">
              {" "}
              DM INN
            </h1>
          </animated.div>
          <animated.div style={styles1}>
            <p className="text-left text-[1.2rem] sm:text-2xl md:text-4xl font-extralight text-text italic">
              HOTEL && RESIDENCE
            </p>
          </animated.div>
          <animated.div style={styles2}>
            <p
              type=""
              className="text-center md:text-left text-[1.2rem] sm:text-xl md:text-xl font-extralight  text-text"
            >
              Book your stay and enjoy luxury <br />
              redefined at the most affordable rates
            </p>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
