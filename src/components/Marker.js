import React, { useState } from "react";
import { Icon } from "@iconify/react";
import volcanoIcon from "@iconify-icons/emojione/volcano";
import stormIcon from "@iconify-icons/emojione/cloud-with-lightning-and-rain";
import fireIcon from "@iconify-icons/emojione/fire";
import iceIcon from "@iconify-icons/noto/ice";

const Marker = ({ event }) => {
	const [open, setOpen] = useState(false);
	function onMouseEnter() {
		setOpen(true);
	}
	function onMouseLeave() {
		setOpen(false);
	}

	function getIcon() {
		if (event.categories[0].id === 10) return stormIcon;
		else if (event.categories[0].id === 12) return volcanoIcon;
		else if (event.categories[0].id === 15) return iceIcon;
		else return fireIcon;
	}

	return (
		<div className="marker" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<Icon icon={getIcon()} className="location-icon" />
			<div className={!open ? "description-box" : "description-box active"}>
				<div>
					{" "}
					<span>Event Title: </span>
					{event.title}
				</div>
				<div>
					<span>Event Type: </span>
					{event.categories[0].title}
				</div>
			</div>
		</div>
	);
};

export default React.memo(Marker);
