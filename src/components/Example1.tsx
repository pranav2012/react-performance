// UseEffect with fetch

import { useEffect, useState } from "react";

export const Example1 = () => {
	const [fetchedData, setFetchedData] = useState<DataItem[] | null>(null);
	const [inputValue, setInputValue] = useState<string>("");

	const handleInputChange = (value: string) => {
		setInputValue(value);
	};

	useEffect(() => {
		fetchData(
			`https://dummyjson.com/users${
				inputValue ? `/search?q=${inputValue}` : ""
			}`
		);
	}, [inputValue]);

	const fetchData = async (url: string) => {
		try {
			const res = await fetch(url);
			const data = await res.json();
			setFetchedData(data.users);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	return (
		<div className="p-4">
			<input
                type="text"
                value={inputValue}
				onChange={(e) => handleInputChange(e.target.value)}
				className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
			/>
			{fetchedData ? (
				<div>
					<ul className="mt-4 flex flex-wrap">
						{fetchedData?.map((item: DataItem, index: number) => (
							<li
								key={index}
								className="m-3 rounded-lg p-3 border shadow">
								<div className="d-flex flex-column align-items-center">
									<img
										className="mb-3 h-40 w-40"
										src={item.image}
										alt="image"
									/>
									<div className="text-center">
										<h5 className="mb-1">
											{item.firstName} {item.lastName}
										</h5>
										<p className="mb-1">
											<strong>Email:</strong> {item.email}
										</p>
										<p className="mb-1">
											<strong>Phone:</strong> {item.phone}
										</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			) : (
				<p className="mt-4">No data to display.</p>
			)}
		</div>
	);
};

interface DataItem {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	image: string;
}
