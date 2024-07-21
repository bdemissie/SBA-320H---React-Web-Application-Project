import Hero from "./components/Hero";
import Events from "./components/Events";
import NavBar from "../NavBar/NavBar";

function HomePage() {

    return (
        <div>
            <NavBar/>
            <Hero />
            <Events />
        </div>
    )

}
export default HomePage;