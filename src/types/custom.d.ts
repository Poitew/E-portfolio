declare module "*.module.css" {
	const classes: { [key: string]: string };
	export default classes;
}

declare module "link.ts" {
	const value: any;
	export default value;
}

declare module "*.json" {
	const value: any;
	export default value;
}

declare module "*.md" {
	const value: string;
	export default value;
}

declare module "*.md?raw" {
	const value: string;
	export default value;
}

interface ImportMeta {
	glob(
		pattern: string,
		options?: {
			eager?: boolean;
			query?: string;
			import?: string;
		},
	): Record<string, string>;
}
