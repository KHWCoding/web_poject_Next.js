import { FadeLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex flex-col h-screen mb-8 mt-16 justify-center items-center bg-white text-black text-xl lg:ml-72 lg:mt-0 dark:text-white dark:bg-black">
            <div>Loading...!</div>
            <FadeLoader color="gray" width={8} height={8} radius={8} />
        </div>
    );
}

export default Loading;