import Header from '../components/app/Header/Header'
import Home from '../components/app/Home/Home'
import AboutMe from '../components/app/About_Me/About_Me'
import ProjectsSection from '../components/app/Projects_Section/Projects_Section'

function App(){
    return(
        <>
            <Header></Header>
            <Home></Home>
            <AboutMe></AboutMe>
            <ProjectsSection></ProjectsSection>
        </>
    );
}

export default App;