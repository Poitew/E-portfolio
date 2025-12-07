import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import data from "/src/data/json/skills.json";

interface skill_element {
	src: string;
	alt: string;
}

function AboutMe() {
	const main_section = useRef<HTMLDivElement>(null);
	const section_one = useRef<HTMLDivElement>(null);
	const section_two = useRef<HTMLDivElement>(null);

	const skills = data;

	useGSAP(
		() => {
			const container = main_section.current;
			const a = section_one.current;
			const b = section_two.current;
			if (!container || !a || !b) return;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					start: "top top",
					end: `+=500%`,
					scrub: true,
					pin: true,
				},
			});

			tl.fromTo(
				a,
				{ y: "10%", opacity: 0 },
				{ y: "0%", opacity: 1, duration: 0.5, ease: "power1.out" },
			);

			tl.fromTo(
				b,
				{ scale: 0.1, opacity: 0, transformOrigin: "50% 50%" },
				{ scale: 1, opacity: 1, duration: 1, ease: "power1.out" },
			);

			tl.to(a, { scale: 7.5, opacity: 0, duration: 0.65, ease: "power1.inOut" }, "<");
			tl.to(a, { display: "none" });
			tl.to(b, { translateY: -150, opacity: 0, duration: 1, ease: "power1.inOut" });

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
			className="bg-[#0c0719] flex flex-col items-baseline gap-x-24 mb-56 mt-16 xl:mt-0"
			id="about-me-ID"
		>
			<Section
				title="SOFTWARE DEVELOPMENT"
				description="Development focused on performance, and elegant solutions."
				skills={skills.sd}
				innerRef={section_one}
			/>

			<Section
				title="DEVOPS"
				description="Stability, efficiency, and automation, all at once."
				skills={skills.devops}
				innerRef={section_two}
			/>
		</div>
	);
}

interface SectionProps {
	title: string;
	description: string;
	skills: skill_element[];
	innerRef: React.RefObject<HTMLDivElement | null>;
}

function Section({ title, description, skills, innerRef }: SectionProps) {
	return (
		<div
			ref={innerRef}
			className="absolute h-screen w-screen py-10 px-5 flex flex-col justify-between"
		>
			<div>
				<h1 className="text-4xl lg:text-9xl text-center lg:text-left">{title}</h1>
				<p className="text-center lg:text-left">{description}</p>
			</div>

			<div className="lg:flex lg:justify-end">
				<div className="grid grid-cols-4 gap-10 lg:gap-20">
					{skills.map((element: skill_element, index: number) => (
						<img
							key={index}
							src={element.src}
							alt={element.alt}
							loading="lazy"
							className="w-11 m-auto transition-all duration-500 hover:scale-150"
						></img>
					))}
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
