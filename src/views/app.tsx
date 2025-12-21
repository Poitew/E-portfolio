import SmoothProvider from "../components/lib/SmoothProvider";
import Splash from "../components/app/Splash";
import Header from "../components/app/Header";
import Home from "../components/app/Home";
import AboutMe from "../components/app/AboutMe";
import HUD from "../components/app/HUD";

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
