
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="w-full h-screen px-4 flex flex-col justify-center items-center">
            <h1>Error 404</h1>
            <p className="my-4">Page Not Found, Back to Home</p>
            <Link to={"/"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Home
                </button>
            </Link>
        </div>
    );
};

export default Error;
