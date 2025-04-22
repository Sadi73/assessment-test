import { useNavigate } from "react-router";

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-gray-300 w-1/2 mx-auto h-96 flex flex-col items-center justify-center'>
                <h1>hello typescript</h1>
                <button
                    className='border cursor-pointer mt-4 px-4 py-2'
                    onClick={() => navigate('/test')}
                >
                    Start
                </button>
            </div>
        </div>
    );
};

export default Home;