import React, { useState } from "react";

export function StarsStacked({ count, stopPropagation = true, nth = 1, }) {
	const [isHovered, setIsHovered] = useState(false);

	if (count <= 0) {
		return null;
	}

	const StarComponent = isHovered ? StarFilled : StarEmpty;

	return (
		<>
			<div
				key={count}
				style={{ display: "inline" }}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onClick={(e) => {
					if (stopPropagation) {
						e.stopPropagation();
					}
					alert(`${nth} stars selected`);
				}}
			>
				<StarComponent></StarComponent>

				{/* 
				 	try changing the order of the "Stars" component & the "div" element
				 */}
				<StarsStacked count={count - 1} stopPropagation={stopPropagation} nth={nth + 1} />
			</div>
		</>
	);
}

/**
 * exactly the same as above,
 * but not nested
 * (see the order of the recursive "StarsStacked" vs "StarsIndividual" placement)
 */
export function StarsIndividual({ count, nth = 1 }) {
	const [isHovered, setIsHovered] = useState(false);

	if (count <= 0) {
		return null;
	}

	const StarComponent = isHovered ? StarFilled : StarEmpty;

	return (
		<>
			<div
				key={count}
				style={{ display: "inline" }}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onClick={() => alert(`${nth} stars selected`)}
			>
				<StarComponent></StarComponent>

				{/* 
				 	try changing the order of the "Stars" component & the "div" element
				 */}
			</div>
			<StarsIndividual count={count - 1} nth={nth + 1} />
		</>
	);
}

function StarEmpty() {
	return (
		<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M16 8C16.2897 8 16.5543 8.16448 16.6825 8.42428L18.7424 12.598L23.3483 13.2672C23.635 13.3089 23.8732 13.5097 23.9627 13.7853C24.0523 14.0608 23.9776 14.3633 23.7701 14.5655L20.4372 17.8143L21.224 22.4016C21.273 22.6871 21.1556 22.9757 20.9212 23.146C20.6868 23.3163 20.3761 23.3388 20.1197 23.2039L16 21.0381L11.8803 23.2039C11.6239 23.3388 11.3132 23.3163 11.0788 23.146C10.8444 22.9757 10.727 22.6871 10.776 22.4016L11.5628 17.8143L8.22988 14.5655C8.02241 14.3633 7.94775 14.0608 8.03727 13.7853C8.1268 13.5097 8.365 13.3089 8.65171 13.2672L13.2576 12.598L15.3175 8.42428C15.4457 8.16448 15.7103 8 16 8ZM16 10.481L14.4456 13.6305C14.3347 13.8551 14.1204 14.0108 13.8725 14.0469L10.3968 14.5519L12.9119 17.0035C13.0913 17.1783 13.1731 17.4303 13.1308 17.6772L12.537 21.1389L15.6458 19.5045C15.8675 19.3879 16.1325 19.3879 16.3542 19.5045L19.463 21.1389L18.8692 17.6772C18.8269 17.4303 18.9087 17.1783 19.0881 17.0035L21.6032 14.5519L18.1275 14.0469C17.8796 14.0108 17.6653 13.8551 17.5544 13.6305L16 10.481Z"
				fill="#2A3647"
				// fill-opacity="0.72"
				fillOpacity="0.72"
			/>
		</svg>
	);
}

function StarFilled() {
	return (
		<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z"
				fill="#DEEAFA"
			/>
			<path
				d="M16.6825 8.42428C16.5543 8.16448 16.2897 8 16 8C15.7103 8 15.4457 8.16448 15.3175 8.42428L13.2576 12.598L8.65171 13.2672C8.365 13.3089 8.1268 13.5097 8.03727 13.7853C7.94775 14.0608 8.02241 14.3633 8.22988 14.5655L11.5628 17.8143L10.776 22.4016C10.727 22.6871 10.8444 22.9757 11.0788 23.146C11.3132 23.3163 11.6239 23.3388 11.8803 23.2039L16 21.0381L20.1197 23.2039C20.3761 23.3388 20.6868 23.3163 20.9212 23.146C21.1556 22.9757 21.273 22.6871 21.224 22.4016L20.4372 17.8143L23.7701 14.5655C23.9776 14.3633 24.0523 14.0608 23.9627 13.7853C23.8732 13.5097 23.635 13.3089 23.3483 13.2672L18.7424 12.598L16.6825 8.42428Z"
				fill="#317AE2"
			/>
		</svg>
	);
}
