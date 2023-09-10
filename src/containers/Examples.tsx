import { Example1 } from "../components/Example1";
import { Example2 } from "../components/Example2";
import { Example3 } from "../components/Example3";
import { Example4 } from "../components/Example4";

export { Example1, Example2, Example3, Example4 };


// 1

// let debounceTimeout: number | undefined;

// 	const handleInputChange = (value: string) => {
// 		clearTimeout(debounceTimeout);

// 		debounceTimeout = setTimeout(() => {
// 			fetchData(
// 				`https://dummyjson.com/users${
// 					value ? `/search?q=${value}` : ""
// 				}`
// 			);
// 		}, 500);
// 	};

// 	useEffect(() => {
// 		fetchData("https://dummyjson.com/users");
// 	}, []);