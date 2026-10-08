export interface Project {
	title: string;
	description: string;
	date: string;
	currently?: boolean;
	featured?: boolean;
	github?: string;
	live?: string;
	details?: string[];
}

export const projects: Project[] = [
	{
		title: "Contexta",
		description: "Persistent conceptual memory layer for codebases",
		currently: true,
		featured: true,
		date: "May 2026 - Present",
		live: "https://getcontexta.vercel.app",
		details: [
			"A persistent conceptual memory layer for codebases"
		]
	},
	{
		title: "Enterprise AI Search System",
		description: "RAG + NL2SQL based search engine for enterprise data",
		featured: true,
		date: "Jun 2026",
		details: [
			"Built a natural language query-to-SQL pipeline using Ollama, Pydantic, fuzzy matching, and dynamic SQL generation",
			"Developed keyword extraction and entity matching workflows to retrieve enterprise records from large databases"
		]
	},
	{
		title: "Logistics Transportation Cost Prediction",
		description: "ML model trained on actual enterprise data for predicting logistics transportation costs",
		featured: true,
		date: "Jun 2026",
		github: "https://github.com/Vidhaaaaaa/logistics-price-predictor",
		details: [
			"Developed a machine learning model to predict logistics transportation costs using shipment and transportation-related features",
			"Performed data preprocessing, feature engineering, and evaluation using pandas",
			"Achieved an R2 score of 0.96 on the test dataset with median percentage error of 11%"
		]
	},
	{
		title: "SnapTunnel",
		description: "Peer-to-peer image sharing using WebRTC",
		featured: false,
		date: "Apr 2025",
		github: "https://github.com/vidha/snaptunnel",
		details: [
			"Engineered a peer-to-peer image sharing system using WebRTC with encrypted chunked file transfer and real-time peer communication",
			"Implemented initial logic for encrypted, chunked file transfer between peers"
		]
	},
	{
		title: "TicketLedger",
		description: "Decentralized ticketing on the Aptos blockchain",
		featured: true,
		date: "Nov 2024",
		github: "https://github.com/vidha/ticketledger",
		details: [
			"Built a decentralized ticketing platform on the Aptos blockchain with NFT-based ticket ownership tracking and transparent transfer verification to reduce fraudulent ticket reselling"
		]
	},
	{
		title: "Technical Society & Event Websites",
		description: "Production websites built for student societies and events at MUJ",
		date: "Jun 2025 – Mar 2026",
		details: [
			"Designed, deployed, and maintained production websites for ACM SIGAI, EIS, and Elicit'25, serving hundreds of university students and event participants",
			"Worked on backend functionality, deployment workflows, production maintenance, and collaborative development within multi-member teams"
		]
	},
	{
		title: "NotiChan",
		description: "Email notification script for unread emails",
		date: "Jul 2025 - Aug 2025",
		details: [
			"Built a Python script that sends daily message alerts for unread emails"
		]
	},
	{
		title: "ACM SIGAI MUJ - Official Website",
		description: "Official website for ACM SIGAI club",
		date: "Jun 2025 - Nov 2025",
		live: "https://mujsigai.acm.org/",
		github: "https://github.com/Vidhaaaaaa/media_sigai",
		details: [
			"Contributed to building the club's new edition website as part of the web development team"
		]
	},
	{
		title: "Elicit'25 - Tech Fest Website",
		description: "Official website for university's largest tech fest",
		featured: true,
		date: "Jul 2025 - Sept 2025",
		live: "https://elicit-25-nine.vercel.app/",
		github: "https://github.com/Vidhaaaaaa/ELICIT-25",
		details: [
			"Built backend features and a feedback system for the university's largest tech fest website catering 200+ users",
			"Worked with the team to develop, deploy and monitor the site"
		]
	},
	{
		title: "Entrepreneur and Innovation Society - Official Website",
		description: "First official website for EIS club",
		featured: true,
		date: "Mar 2026",
		live: "https://eismuj.com",
		github: "https://github.com/Vidhaaaaaa/EISwebsite",
		details: [
			"Built and deployed the first official website of the club"
		]
	}
];
