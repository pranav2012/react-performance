// useRef

import { useRef } from "react";

export const Example2 = () => {
	const userName = useRef<HTMLInputElement | null>(null);

	return (
		<div className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
			<p className="text-xl mb-2">Enter your name</p>
			<input
				type="text"
				ref={userName}
				className="border border-gray-300 rounded p-2 w-64 mb-2"
				placeholder="Your Name"
			/>
			<button
				type="button"
				onClick={() => console.log(userName.current?.value)}
				className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
			>
				Click to log name
			</button>
		</div>
	);
};
