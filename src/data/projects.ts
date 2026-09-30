export interface Project {
	title: string;
	description: string;
	date: string;
	currently?: boolean;
	github?: string;
}

export const projects: Project[] = [
	{
		title: "contexta",
		description: "a memory layer for codebases",
		currently: true,
		date: "2026",
		github: "https://github.com/vidha/contexta"
	},
	{
		title: "enterprise ai-search system",
		description: "natural language → SQL search for enterprise data",
		date: "2026"
	},
	{
		title: "logistics transportation cost prediction",
		description: "machine learning model for predicting logistics transportation costs",
		date: "2026",
		github: "https://github.com/Vidhaaaaaa/logistics-price-predictor"
	},
	{
		title: "snaptunnel",
		description: "peer-to-peer image sharing over WebRTC",
		date: "2025",
		github: "https://github.com/vidha/snaptunnel"
	},
	{
		title: "ticketledger",
		description: "decentralized ticketing on the Aptos blockchain",
		date: "2025",
		github: "https://github.com/vidha/ticketledger"
	},
	{
		title: "technical society & event websites",
		description: "production websites built for student societies and events at MUJ",
		date: "2025 – 2026"
	}
];
