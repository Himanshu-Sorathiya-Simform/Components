import { type RefObject } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

export default function Modal({
	ref,
	onClose,
	children,
	className = "",
}: {
	ref: RefObject<HTMLDialogElement | null>;
	onClose: () => void;
	children: React.ReactNode;
	className?: string;
}) {
	const handleCancel = (event: React.SyntheticEvent<HTMLDialogElement>) => {
		event.preventDefault();
		onClose();
	};

	return createPortal(
		<dialog
			ref={ref}
			onCancel={handleCancel}
			className={`universal-modal ${className}`}
		>
			<div className="modal-container">{children}</div>
		</dialog>,
		document.body,
	);
}
