import { type RefObject, useEffect, useRef } from "react";
import Modal from "./Modal/Modal.tsx";

function App() {
	const ref: RefObject<HTMLDialogElement | null> = useRef(null);

	useEffect(() => {
		if (!ref.current) return;

		ref.current.showModal();
	});

	return (
		<div>
			hello{" "}
			<Modal
				ref={ref}
				onClose={() => {
					if (!ref.current) return;

					ref.current.close();
				}}
			>
				<div>Hello</div>
			</Modal>
		</div>
	);
}

export default App;
