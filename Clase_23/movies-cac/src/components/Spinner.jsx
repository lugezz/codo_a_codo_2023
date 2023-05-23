import { FaSpinner } from "react-icons/fa";
import "./Spinner.css";

export const Spinner = () => {
    return (
        <div className="spinner">
            <FaSpinner className="spinner-icon" />
        </div>
    );
    }