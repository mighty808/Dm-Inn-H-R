import Explore from "./src/components/Explore"
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
    </section>
  )
}

export default DminnHome