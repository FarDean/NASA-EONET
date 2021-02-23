import { useState } from "react";
import GoogleMapReact from "google-map-react";
import { config } from "./../config";
import Marker from "./Marker";

const Map = ({ center, zoom, data }) => {
	const [open, setOpen] = useState(false);
	const markers = data.map(event => {
		if (Array.isArray(event.geometries[event.geometries.length - 1].coordinates[0])) {
			return null;
		}
		return (
			<Marker
				lat={event.geometries[event.geometries.length - 1].coordinates[1]}
				lng={event.geometries[event.geometries.length - 1].coordinates[0]}
				key={event.id}
				event={event}
			/>
		);
	});

	function onClick() {
		setOpen(prev => !prev);
	}

	return (
		<div className="map">
			<button onClick={onClick} className="desc">
				Website Description
			</button>
			<aside className={open ? "aside active" : "aside"}>
				This app idea comes from Traversy media youtube channel, although i made small
				changes myself to it!
				<p>
					it uses NASA and google map api and shows the natural events around the world!
				</p>
			</aside>
			<GoogleMapReact
				bootstrapURLKeys={{ key: config.MAP_KEY }}
				defaultCenter={center}
				defaultZoom={zoom}
			>
				{markers}
			</GoogleMapReact>
		</div>
	);
};

Map.defaultProps = {
	center: {
		lat: 42.3265,
		lng: -122.8756,
	},
	zoom: 2,
};

export default Map;
