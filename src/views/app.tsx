import SmoothProvider from "../components/lib/SmoothProvider";
import Header from "../components/app/Header";
import Home from "../components/app/Home";
import AboutMe from "../components/app/About_Me";
import ProjectsSection from "../components/app/Projects_Section";

function App() {
	return (
		<SmoothProvider>
			<Header></Header>
			<Home></Home>
			<AboutMe></AboutMe>
			<ProjectsSection></ProjectsSection>
		</SmoothProvider>
	);
}

export default App;
