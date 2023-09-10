// profiling

import { useEffect, useState } from "react";

export const Example4 = () => {
	const [items, setItems] = useState<number[]>([]);
	const [renderItems, setRenderItems] = useState<boolean>(false);

	useEffect(() => {
		if (renderItems) {
			// Intentionally create a large number of elements in the state
			const newItems: number[] = [];
			for (let i = 0; i < 10000; i++) {
				newItems.push(i);
			}
			setItems(newItems);
		} else {
			setItems([]);
		}
	}, [renderItems]);

	return (
		<div className="bg-gray-200 p-4 rounded-lg shadow-md">
			<h1 className="text-2xl mb-4">Slow Rendering Component</h1>
			<button
				onClick={() => setRenderItems(!renderItems)}
				className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
				{renderItems ? "Hide Items" : "Show Items"}
			</button>
			<ItemList items={items} />
		</div>
	);
};

interface ItemListProps {
	items: number[];
}

const ItemList = ({ items }: ItemListProps) => {
	return (
		<div className="overflow-auto max-h-60">
			{items.map((item) => (
				<p key={item}>Child Item: {item}</p>
			))}
		</div>
	);
};
