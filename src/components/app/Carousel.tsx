interface CarouselProps {
	projects: any[];
	carousel_ref: React.RefObject<HTMLDivElement | null>;
}

function Carousel({ projects, carousel_ref }: CarouselProps) {
	return (
		<section className="h-full">
			<div ref={carousel_ref} className="flex gap-10 h-full">
				{projects.map((item, index) => (
					<Project key={index} {...item} />
				))}
			</div>
		</section>
	);
}

interface ProjectsProp {
	src: string;
	name: string;
	desc: string;
	tech: string[];
	github: string;
}

function Project({ src, name, desc, tech, github }: ProjectsProp) {
	return (
		<a
			href={github}
			target="_blank"
			className="shrink-0 w-full h-full p-5 xl:p-16
                flex flex-col flex-wrap gap-y-5 bg-cover lg:bg-center"
			style={{ backgroundImage: `url(${src})` }}
		>
			<div className="flex flex-col gap-y-10">
				<h4 className="font-bold text-3xl lg:text-5xl">{name}</h4>
				<p className="text-md/9 xl:w-5/6">{desc}</p>

				<ul className="flex flex-wrap gap-x-10 bg-black/60 p-5">
					{tech.map((techItem, index) => (
						<li key={index}>{techItem}</li>
					))}
				</ul>
			</div>
		</a>
	);
}

export default Carousel;
