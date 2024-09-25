
import { ModalProps } from "../model/IProject";
import "../styles/singleProject.scss";

export const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
    if (!open) return null; // Only render if `open` is true

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Prevent modal click from closing it */}
                <button className="modal-close-btn" onClick={onClose}>
                    &times; {/* Close button (X) */}
                </button>
                {children} {/* The modal content will be rendered here */}
            </div>
        </div>
    );
};