import useDarkStore from "@/app/storage/darkmode";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";

export default function DarkModeBtn() {
    const { darkMode, toggleDarkMode } = useDarkStore();

    return (
        <button className="absolute w-8 h-8 right-1 bg-white rounded-2xl" onClick={toggleDarkMode}>
            {darkMode ? <SunIcon className="w-8 h-8" /> : <MoonIcon className="w-8 h-8" />}
        </button>
    )
}