import SmoothProvider from "../lib/SmoothProvider";
import Splash from "./Splash";
import Header from "./Header";
import Home from "./Home";
import AboutMe from "./AboutMe";
import HUD from "./HUD";

function App() {
	return (
		<SmoothProvider>
			<Splash />
			<Header />
			<HUD />
			<Home />
			<AboutMe />
		</SmoothProvider>
	);
}

export default App;
