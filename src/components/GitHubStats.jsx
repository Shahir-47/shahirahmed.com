import GitHubCalendar from "react-github-calendar";

const GitHubStats = () => {
	return (
		<div className="github-stats-section">
			<h2>📊 My GitHub Stats</h2>

			{/* GitHub Activity Calendar */}
			<div className="github-activity-calendar">
				<GitHubCalendar
					username="Shahir-47"
					blockSize={15}
					blockMargin={5}
					fontSize={24}
					fontWeight={600}
				/>
			</div>

			{/* GitHub Stats */}
			<div className="github-stats-container">
				<img
					align="center"
					src="https://github-readme-stats-2cpj.vercel.app/api?username=Shahir-47&include_all_commits=true&count_private=true&show_icons=true&hide_border=true&line_height=20&title_color=4fd1c5&icon_color=4fd1c5&text_color=e0e0e0&bg_color=00000000"
					alt="Shahir's GitHub Stats"
				/>
				<img
					align="center"
					src="https://github-readme-stats.vercel.app/api/top-langs/?username=Shahir-47&layout=compact&hide_border=true&card_width=495&title_color=4fd1c5&text_color=e0e0e0&bg_color=00000000"
					alt="Shahir's Top Languages"
				/>
				<a
					href="https://github-readme-streak-stats.herokuapp.com/?user=Shahir-47&theme=dark&background=00000000&title_color=4fd1c5&ring=4fd1c5&fire=4fd1c5&currStreakLabel=4fd1c5&&hide_border=true&sideNums=e0e0e0&sideLabels=e0e0e0&dates=e0e0e0&currStreakNum=e0e0e0"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						align="center"
						src="https://nirzak-streak-stats.vercel.app/?user=Shahir-47&theme=dark&background=00000000&title_color=4fd1c5&ring=4fd1c5&fire=4fd1c5&currStreakLabel=4fd1c5&&hide_border=true&sideNums=e0e0e0&sideLabels=e0e0e0&dates=e0e0e0&currStreakNum=e0e0e0"
						alt="Shahir's GitHub Streak"
					/>
				</a>
			</div>
		</div>
	);
};

export default GitHubStats;
