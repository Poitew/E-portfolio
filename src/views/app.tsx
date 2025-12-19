import SmoothProvider from "../components/lib/SmoothProvider";
import Header from "../components/app/Header";
import Home from "../components/app/Home";
import AboutMe from "../components/app/AboutMe";

function App() {
	return (
		<SmoothProvider>
			<Header></Header>
			<Home></Home>
			<AboutMe></AboutMe>
		</SmoothProvider>
	);
}

export default App;
