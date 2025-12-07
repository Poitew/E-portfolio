import { useEffect, useRef } from "react";

function Home() {
	const main_ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const is_desktop = window.innerWidth > 1024;

		if (!is_desktop) return;

		let x = 0;
		let y = 0;

		let target_x = 0;
		let target_y = 0;

		const friction = 0.25;

		const on_move = (e: MouseEvent) => {
			const { innerWidth, innerHeight } = window;

			const dx = (e.clientX / innerWidth) * 2 - 1;
			const dy = (e.clientY / innerHeight) * 2 - 1;

			target_x = dx * 10;
			target_y = dy * 10;
		};

		const animate = () => {
			x += (target_x - x) * friction;
			y += (target_y - y) * friction;

			if (main_ref.current) {
				main_ref.current.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
			}

			requestAnimationFrame(animate);
		};

		window.addEventListener("mousemove", on_move);
		animate();

		return () => window.removeEventListener("mousemove", on_move);
	}, []);

	return (
		<main
			id="home"
			ref={main_ref}
			className="min-h-screen background-gradient bg-[length:200%_200%] 
        	animate-[gradient_15s_ease_infinite] bg-fixed flex flex-col items-center justify-center"
		>
			<div className="grid-overlay"></div>

			<h1 className="text-5xl lg:text-9xl font-bold mb-5">SICKPOITEW</h1>
			<p className="w-3/4 text-center text-slate-400">
				{/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laborum ducimus quas
				repellat officiis neque amet quod iusto enim, consectetur molestias eaque corporis,
				modi omnis corrupti laudantium. Necessitatibus, eum quo! */}
				Software Developer and DevOps Expert skilled in developing and maintaining software.
			</p>
		</main>
	);
}

export default Home;
