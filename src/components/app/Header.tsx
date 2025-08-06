import { useRef, useEffect } from "react"
import { motion, useScroll } from "motion/react"
import { LinkProps } from "../../types/link";
import { Link } from "react-router-dom";

function Header(){
    const header = useRef<HTMLElement | null>(null);
    const headerImage = useRef<HTMLImageElement | null>(null);
    const width: number = window.innerWidth;

    useEffect(() => {
        const handleScroll = () => {
            const websitePosition = window.scrollY;

            if (header.current) {
                if(websitePosition >= 50){
                    header.current.style.background = "rgba(12, 7, 24, 0.1)";
                    header.current.style.backdropFilter = "blur(10px)";
                }
                else {
                    header.current.style.background = "rgba(12, 7, 24, 0)";
                }
            }

        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [width]);

    return(
        <header className="w-full h-20 py-1 xl:pl-16 fixed z-10 text-xl 
            font-semibold flex items-center justify-center xl:justify-between
            transition-colors duration-300 ease-in-out"
            ref={header}
        >
            <Link to="#about-me-ID" className="hidden xl:block" >
                <img className="w-52" src="/assets/icons/logo.svg" alt="Code Logo" ref={headerImage} />
            </Link>

	        <nav className="flex xl:pr-12" >
		        <NavLink
                    label="home"
                    route="#home"
                />
                
                <NavLink
                    label="posts"
                    route="/posts"
                />
	        </nav>
          
            <ScrollIndicator/>
        </header>
    );
}

function ScrollIndicator(){
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
        style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            originX: 0,
            backgroundColor: "var(--green)",
        }}
        />
    );
}

function NavLink({label, route}: LinkProps) {
    return(
        <div className="w-28 text-base tracking-widest relative pb-1
        flex justify-center items-center after:absolute after:w-0 after:h-0.5
        after:bottom-0 after:left-1/2 after:bg-slate-300 after-transition-left 
        hover:after:w-full hover:after:left-0 active:scale-90">
            <Link to={route}>{label}</Link>
        </div>
    )
}

export default Header;