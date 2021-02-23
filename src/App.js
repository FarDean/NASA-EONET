import Map from "./components/Map";
import { useEffect, useState } from "react";
function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");
			const data = await res.json();
			setData(data.events);
		}

		fetchData();
	}, []);

	return (
		<>
			<Map data={data} />
		</>
	);
}

export default App;
