"use client";

import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubStats = () => {
	const [config, setConfig] = useState({
		blockSize: 15,
		blockMargin: 5,
		fontSize: 22,
		trimDateRange: false,
	});

	useEffect(() => {
		const updateConfig = () => {
			const width = window.innerWidth;
			// Account for TOC sidebar taking ~250px on screens > 1100px
			const hasSidebar = width > 1100;
			const contentWidth = hasSidebar ? width - 260 : width;

			if (contentWidth >= 2300) {
				setConfig({
					blockSize: 20,
					blockMargin: 8,
					fontSize: 20,
					trimDateRange: false,
				});
			} else if (contentWidth >= 1200) {
				setConfig({
					blockSize: 16,
					blockMargin: 5,
					fontSize: 18,
					trimDateRange: false,
				});
			} else if (contentWidth >= 900) {
				setConfig({
					blockSize: 12,
					blockMargin: 5,
					fontSize: 14,
					trimDateRange: false,
				});
			} else if (width >= 768) {
				setConfig({
					blockSize: 8,
					blockMargin: 4,
					fontSize: 12,
					trimDateRange: false,
				});
			} else if (width >= 425) {
				setConfig({
					blockSize: 10,
					blockMargin: 3,
					fontSize: 11,
					trimDateRange: true,
				});
			} else if (width >= 375) {
				setConfig({
					blockSize: 8,
					blockMargin: 2,
					fontSize: 10,
					trimDateRange: true,
				});
			} else if (width >= 320) {
				setConfig({
					blockSize: 7,
					blockMargin: 2,
					fontSize: 10,
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
			<h2>
				My GitHub <span>Stats</span>
			</h2>

			{/* Calendar and the three stat cards share one panel */}
			<div className="github-card">
				<div className="github-activity-calendar">
					<GitHubCalendar
						username="Shahir-47"
						theme={{
							dark: [
								"#393e46",
								"#0a4046",
								"#007680",
								"#00949d",
								"#00adb5",
							],
						}}
						colorScheme="dark"
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

				<div className="github-stats-grid">
					<div className="github-stat">
						<img
							src="https://github-stats-alpha-tawny.vercel.app/api?username=Shahir-47&include_all_commits=true&count_private=true&show_icons=true&hide_border=true&disable_animations=true&card_width=495&line_height=20&title_color=00adb5&icon_color=00adb5&text_color=eeeeee&bg_color=00000000"
							alt="Shahir's GitHub statistics"
							loading="lazy"
						/>
					</div>

					<div className="github-stat">
						<img
							src="https://github-stats-alpha-tawny.vercel.app/api/top-langs/?username=Shahir-47&layout=compact&hide_border=true&disable_animations=true&card_width=495&title_color=00adb5&text_color=eeeeee&bg_color=00000000"
							alt="Shahir's most used languages"
							loading="lazy"
						/>
					</div>

					<div className="github-stat">
						<a
							href="https://github-readme-streak-stats-steel-eight-67.vercel.app/?user=Shahir-47&background=00000000&title_color=00adb5&ring=00adb5&fire=00adb5&currStreakLabel=00adb5&hide_border=true&disable_animations=true&sideNums=eeeeee&sideLabels=eeeeee&dates=eeeeee&currStreakNum=eeeeee"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://github-readme-streak-stats-steel-eight-67.vercel.app/?user=Shahir-47&background=00000000&title_color=00adb5&ring=00adb5&fire=00adb5&currStreakLabel=00adb5&hide_border=true&disable_animations=true&sideNums=eeeeee&sideLabels=eeeeee&dates=eeeeee&currStreakNum=eeeeee"
								alt="Shahir's GitHub contribution streak"
								loading="lazy"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GitHubStats;
