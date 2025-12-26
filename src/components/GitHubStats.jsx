"use client";

import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubStats = () => {
	const [config, setConfig] = useState({
		blockSize: 15,
		blockMargin: 5,
		fontSize: 24,
		trimDateRange: false,
	});

	useEffect(() => {
		const updateConfig = () => {
			const width = window.innerWidth;

			if (width >= 2560) {
				setConfig({
					blockSize: 20,
					blockMargin: 8,
					fontSize: 30,
					trimDateRange: false,
				});
			} else if (width >= 1440) {
				setConfig({
					blockSize: 18,
					blockMargin: 6,
					fontSize: 26,
					trimDateRange: false,
				});
			} else if (width >= 1024) {
				setConfig({
					blockSize: 12,
					blockMargin: 5,
					fontSize: 22,
					trimDateRange: false,
				});
			} else if (width >= 768) {
				setConfig({
					blockSize: 8,
					blockMargin: 4,
					fontSize: 20,
					trimDateRange: false,
				});
			} else if (width >= 425) {
				setConfig({
					blockSize: 10,
					blockMargin: 3,
					fontSize: 18,
					trimDateRange: true,
				});
			} else if (width >= 375) {
				setConfig({
					blockSize: 8,
					blockMargin: 2,
					fontSize: 15,
					trimDateRange: true,
				});
			} else if (width >= 320) {
				setConfig({
					blockSize: 7,
					blockMargin: 2,
					fontSize: 14,
					trimDateRange: true,
				});
			}
		};

		updateConfig();

		window.addEventListener("resize", updateConfig);

		return () => {
			window.removeEventListener("resize", updateConfig);
		};
	}, []);

	const transformData = (contributions) => {
		const currentDate = new Date();
		const startDate = new Date();
		startDate.setMonth(currentDate.getMonth() - 6);

		startDate.setHours(0, 0, 0, 0);
		currentDate.setHours(23, 59, 59, 999);

		return contributions.filter((activity) => {
			const activityDate = new Date(activity.date);
			return activityDate >= startDate && activityDate <= currentDate;
		});
	};

	return (
		<div className="github-stats-section">
			<h2>📊 My GitHub Stats</h2>

			{/* GitHub Activity Calendar */}
			<div className="github-activity-calendar">
				<GitHubCalendar
					username="Shahir-47"
					blockSize={config.blockSize}
					blockMargin={config.blockMargin}
					fontSize={config.fontSize}
					transformData={config.trimDateRange ? transformData : undefined}
					labels={{
						totalCount: config.trimDateRange
							? "{{count}} contributions in the last 6 months"
							: "{{count}} contributions in the last year",
					}}
				/>
			</div>

			{/* GitHub Stats */}
			<div className="github-stats-container">
			  <img
			    align="center"
			    src="https://github-stats-alpha-tawny.vercel.app/api?username=Shahir-47&include_all_commits=true&count_private=true&show_icons=true&hide_border=true&line_height=20&title_color=4fd1c5&icon_color=4fd1c5&text_color=e0e0e0&bg_color=00000000"
			    alt="Shahir's GitHub Stats"
			  />
			
			  <img
			    align="center"
			    src="https://github-stats-alpha-tawny.vercel.app/api/top-langs/?username=Shahir-47&layout=compact&hide_border=true&card_width=495&title_color=4fd1c5&text_color=e0e0e0&bg_color=00000000"
			    alt="Shahir's Top Languages"
			  />
			
			  <a
			    href="https://github-readme-streak-stats-steel-eight-67.vercel.app/?user=Shahir-47&background=00000000&title_color=4fd1c5&ring=4fd1c5&fire=4fd1c5&currStreakLabel=4fd1c5&hide_border=true&sideNums=e0e0e0&sideLabels=e0e0e0&dates=e0e0e0&currStreakNum=e0e0e0"
			    target="_blank"
			    rel="noopener noreferrer"
			  >
			    <img
			      align="center"
			      src="https://github-readme-streak-stats-steel-eight-67.vercel.app/?user=Shahir-47&background=00000000&title_color=4fd1c5&ring=4fd1c5&fire=4fd1c5&currStreakLabel=4fd1c5&hide_border=true&sideNums=e0e0e0&sideLabels=e0e0e0&dates=e0e0e0&currStreakNum=e0e0e0"
			      alt="Shahir's GitHub Streak"
			    />
			  </a>
			</div>
		</div>
	);
};

export default GitHubStats;
