import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Splash() {
	const main = useRef<HTMLDivElement>(null);
	const container = useRef<HTMLDivElement>(null);
	const counter = useRef<HTMLParagraphElement>(null);

	useGSAP(
		() => {
			const ctx = main.current;
			const cntr = container.current;
			const ctr = counter.current;

			if (!ctx || !ctr || !cntr) return;

			const counter_obj = { value: 0 };
			const DURATION = 3;
			const DIVIDER = 4;

			const tl = gsap.timeline({
				ScrollTrigger: {
					trigger: ctx,
					start: "top top",
					end: "bottom bottom",
					scrub: true,
					invalidateOnRefresh: true,
				},
			});

			// flickering
			tl.to(cntr, {
				opacity: 0,
				duration: DURATION / DIVIDER,
				repeat: 5,
				yoyo: true,
				ease: "circ",
			});

			// counter
			tl.to(
				counter_obj,
				{
					value: 100,
					duration: DURATION,
					ease: "power1.inOut",
					onUpdate: () => {
						ctr.textContent = `[${Math.floor(counter_obj.value)}%]`;
					},
				},
				"<",
			);

			// out
			tl.to(cntr, { opacity: 0, display: "none", delay: DURATION / DIVIDER });
			tl.to(ctx, { opacity: 0, display: "none", duration: DURATION / DIVIDER });

			return () => {
				tl.revert();
				tl.kill();
			};
		},
		{ scope: main },
	);

	return (
		<div
			ref={main}
			className="fixed w-full h-full bg-black z-50 flex flex-col justify-center items-center"
		>
			<div ref={container}>
				<p className="text-3xl/relaxed">INITIALIZATING...</p>
				<p ref={counter}>[0%]</p>
			</div>
		</div>
	);
}

export default Splash;
