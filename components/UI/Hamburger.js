"use client";

import { useNavContext } from "@/app/context/NavContext";

const Hamburger = () => {

    const { isOpen, toggleNavSidebar } = useNavContext()

    return (
        <button
            onClick={toggleNavSidebar}
            className="relative flex h-6 w-6 flex-col justify-center gap-1.25"
            aria-label="Toggle menu"
        >
            <span
                className={`h-0.5 w-6 rounded bg-foreground transition-all duration-300 
                    ${isOpen ? "translate-y-1.75 rotate-45" : ""}`}
            />

            <span
                className={`h-0.5 w-6 rounded bg-foreground transition-all duration-300 
                    ${isOpen ? "opacity-0 -translate-x-1/2" : ""}`}
            />

            <span
                className={`h-0.5 w-6 rounded bg-foreground transition-all duration-300 
                    ${isOpen ? "-translate-y-1.75 -rotate-45" : ""}`}
            />
        </button>
    );
};

export default Hamburger;