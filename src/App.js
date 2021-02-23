import Map from "./components/Map";
import { useEffect, useState } from "react";
function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const res = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");
			const data = await res.json();
			setData(data.events);
			setLoading(false);
		}

		fetchData();
	}, []);

	return <>{loading ? <h1>Loading ...</h1> : <Map data={data} />}</>;
}

export default App;
