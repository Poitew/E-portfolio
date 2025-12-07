import projects from "/src/data/json/projects.json";

function ProjectsSection() {
	const projects_info: any[] = projects;

	return (
		<div className="relative flex flex-col gap-y-7" id="projects-section">
			{projects_info.map((element, index) => (
				<Project
					key={index}
					name={element.name}
					desc={element.description}
					src={element.src}
					tech={element.tech}
					github={element.github}
				/>
			))}
		</div>
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
			className="sticky top-0 h-screen py-16 pl-5 xl:pl-16
                flex flex-col flex-wrap gap-y-5 bg-cover bg-center
                border-t-4 border-b-4 border-gray-400
                before:absolute before:inset-0 before:bg-black/70 xl:before:bg-black/50
                before:z-1 animate-border-rotate border-image-slice-1"
			style={{ backgroundImage: `url(${src})` }}
		>
			<div className="w-11/12 flex flex-col gap-y-10 relative z-2">
				<h3 className="font-bold text-5xl">{name}</h3>
				<p className="text-sm/9 xl:w-5/6">{desc}</p>

				<ul className="flex flex-wrap gap-x-10">
					{tech.map((techItem, index) => (
						<li key={index}>{techItem}</li>
					))}
				</ul>
			</div>
		</a>
	);
}

export default ProjectsSection;
