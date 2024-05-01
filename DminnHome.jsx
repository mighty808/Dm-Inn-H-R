import Explore from "./src/components/Explore"
import Footer from "./src/components/Footer"
import LandingPage from "./src/components/LandingPage"
import MiniServices from "./src/components/MiniServices"
import Offers from "./src/components/Offers"

const DminnHome = () => {
  return (
    <section className="w-screen bg-secondary pb-4">
        <LandingPage/>
        <MiniServices/>
        <Offers/>
        <Explore/>
        <Footer/>
    </section>
  )
}

export default DminnHome