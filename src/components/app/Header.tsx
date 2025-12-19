import { Link } from "react-router-dom";

interface LinkProps {
	label: string;
	route: string;
}

function Header() {
	return (
		<header
			className="w-screen h-20 absolute z-10 text-xl 
            font-semibold flex items-center justify-center
            transition-colors duration-300 ease-in-out"
		>
			<NavLink label="home" route="#home" />

			<NavLink label="posts" route="/posts" />
		</header>
	);
}

function NavLink({ label, route }: LinkProps) {
	return (
		<div
			className="w-28 text-base tracking-widest relative pb-1
			flex justify-center items-center after:absolute after:w-0 after:h-0.5
			after:bottom-0 after:left-1/2 after:bg-slate-300 after-transition-left
			hover:after:w-full hover:after:left-0 active:scale-90"
		>
			<Link to={route}>{label}</Link>
		</div>
	);
}

export default Header;
