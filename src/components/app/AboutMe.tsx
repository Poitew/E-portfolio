import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Carousel from "./Carousel";
import projects from "../../data/json/projects.json";

function AboutMe() {
	const main_section = useRef<HTMLDivElement>(null);

	const section_one = useRef<HTMLDivElement>(null);
	const section_two = useRef<HTMLDivElement>(null);

	const carousel_one = useRef<HTMLDivElement | null>(null);
	const carousel_two = useRef<HTMLDivElement | null>(null);

	useGSAP(
		() => {
			const container = main_section.current;
			const a = section_one.current;
			const b = section_two.current;

			const a1 = carousel_one.current;
			const a2 = carousel_two.current;

			if (!container || !a || !b || !a1 || !a2) return;

			const scroll_offset = a1.scrollWidth - a1.clientWidth;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					start: "top top",
					end: `+=${window.innerWidth > 1024 ? scroll_offset * 1.75 : "500%"}`,
					scrub: true,
					pin: true,
					invalidateOnRefresh: true,
				},
			});

			// s1 in
			tl.fromTo(
				a,
				{ y: "10%", opacity: 0 },
				{ y: "0%", opacity: 1, duration: 0.5, ease: "power1.out" },
			);

			// s1 carousel
			tl.to(a1, { x: -scroll_offset }, ">");

			// s2 in
			tl.fromTo(
				b,
				{ scale: 0.1, opacity: 0, transformOrigin: "50% 50%" },
				{ scale: 1, opacity: 1, duration: 0.75, ease: "power1.out" },
			);

			// s1 out
			tl.to(a, { scale: 7.5, opacity: 0, duration: 0.25, ease: "power1.inOut" }, "<");
			tl.to(a, { display: "none" });

			return () => {
				tl.revert();
				tl.scrollTrigger?.kill();
				tl.kill();
			};
		},
		{ scope: main_section },
	);

	return (
		<div
			ref={main_section}
			className="bg-[#0c0719] flex flex-col items-baseline gap-x-24 mb-56 mt-16 xl:mt-0 z-20"
			id="about-me-ID"
		>
			<Section
				title="SOFTWARE DEVELOPMENT"
				description="Development focused on performance, and elegant solutions."
				projects={projects.sd}
				innerRef={section_one}
				carousel_ref={carousel_one}
			/>

			<Section
				title="DEVOPS"
				description="Stability, efficiency, and automation, all at once."
				projects={projects.devops}
				innerRef={section_two}
				carousel_ref={carousel_two}
			/>
		</div>
	);
}

interface SectionProps {
	title: string;
	description: string;
	projects: any[];
	innerRef: React.RefObject<HTMLDivElement | null>;
	carousel_ref: React.RefObject<HTMLDivElement | null>;
}

function Section({ title, description, innerRef, projects, carousel_ref }: SectionProps) {
	return (
		<div
			ref={innerRef}
			className="absolute h-screen w-screen py-7 px-5 flex flex-col lg:items-center gap-y-5"
		>
			<div>
				<h2 className="text-4xl lg:text-6xl text-center">{title}</h2>
				<p className="text-center">{description}</p>
				<h3 className="text-center">What I worked on...</h3>
			</div>

			<Carousel projects={projects} carousel_ref={carousel_ref} />
		</div>
	);
}

export default AboutMe;
