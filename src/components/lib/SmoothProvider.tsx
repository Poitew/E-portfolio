import { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import TextPlugin from "gsap/TextPlugin";
import Lenis from "lenis";

interface SmoothProviderProps {
	children: React.ReactNode;
}

gsap.registerPlugin(MotionPathPlugin, ScrollToPlugin, TextPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function SmoothProvider({ children }: SmoothProviderProps) {
	useEffect(() => {
		const lenis = new Lenis({
			lerp: 0.1,
			smoothWheel: true,
		});

		lenis.on("scroll", ScrollTrigger.update);

		function raf(time: any) {
			lenis.raf(time * 1000);
		}

		gsap.ticker.add(raf);
		gsap.ticker.lagSmoothing(0);

		ScrollTrigger.scrollerProxy(document.body, {
			scrollTop(value) {
				return value !== undefined ? lenis.scrollTo(value) : lenis.scroll;
			},
			getBoundingClientRect() {
				return {
					top: 0,
					left: 0,
					width: window.innerWidth,
					height: window.innerHeight,
				};
			},
		});

		const on_resize = () => ScrollTrigger.refresh();
		window.addEventListener("resize", on_resize);

		return () => {
			gsap.ticker.remove(raf);
			window.removeEventListener("resize", on_resize);
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}

export default SmoothProvider;
