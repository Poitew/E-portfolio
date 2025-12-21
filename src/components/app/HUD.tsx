function HUD() {
	return (
		<div className="w-full h-full absolute p-10 z-10 text-sm text-slate-400 flex justify-between">
			<div className="flex flex-col justify-between">
				<img
					className="invisible md:visible"
					src="/assets/HUD/corner.svg"
					alt="Corner HUD"
				/>
				<img className="scale-150 lg:scale-100" src="/assets/HUD/tag.svg" alt="Tag" />
			</div>

			<div className="flex flex-col justify-between items-end">
				<img
					className="invisible md:visible scale-125 lg:scale-100"
					src="/assets/HUD/data.svg"
					alt="Data"
				/>

				<img src="/assets/HUD/scroll.svg" alt="Scroll arrow" width="60" height="60" />
			</div>
		</div>
	);
}

export default HUD;
