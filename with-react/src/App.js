import ForkMeOnGithub from "fork-me-on-github";

import { StarsIndividual, StarsStacked } from "./stars";

function App() {
	return (
		<div>
			<div
				style={{
					textAlign: "center",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					margin: "auto",
					minHeight: "100vh",
				}}
			>
				<div>
					<p>individual</p>
					<StarsIndividual count={5} />
				</div>
				<div style={{ marginTop: "8px" }}>
					<p>stacked, stopPropagation = false</p>
					<StarsStacked count={5} stopPropagation={false} />
				</div>
				<div style={{ marginTop: "8px" }}>
					<p>stacked, stopPropagation = true</p>
					<StarsStacked count={5} stopPropagation={true} />
				</div>
			</div>

			<ForkMeOnGithub
				repo="https://github.com/kiprasmel/stars-stacked-hover"
				colorBackground="black"
				colorOctocat="white"
			/>
		</div>
	);
}

export default App;
