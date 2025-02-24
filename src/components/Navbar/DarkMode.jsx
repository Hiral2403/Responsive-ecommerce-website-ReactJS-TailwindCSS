import React, { useEffect, useState } from 'react';
import LightButton from '../../assets/website/light-mode-button.png';
import DarkButton from '../../assets/website/dark-mode-button.png';

const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        const element = document.documentElement;
        localStorage.setItem("theme", theme);

        if (theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
        console.log("Theme updated:", theme);
        console.log("HTML classes:", document.documentElement.classList);
    }, [theme]); 

    return (
        <div className="relative">
            <img 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                src={LightButton} 
                alt="Light Mode" 
                className={`w-12 cursor-pointer absolute right-0 z-10 transition-opacity duration-300 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
            />

            <img 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                src={DarkButton} 
                alt="Dark Mode" 
                className={`w-12 cursor-pointer transition-opacity duration-300 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
            />
        </div>
    );
};

export default DarkMode;
