'use client'

import { motion } from "framer-motion";
import Link from "next/link";

const PrimaryButton = ({ text = "Discover the Collection", url }) => {

    return (
        <Link href={url ? url : '/'}>
            <motion.button
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden px-10 py-4 border border-accent rounded-full text-foreground uppercase    max-md:text-sm text-lg lg:text-xl tracking-[0.2em] font-heading transition-all duration-500 ease-out hover:tracking-[0.3em] bg-primary cursor-pointer">
                <span className="relative z-10 transition-colors duration-500 group-hover:text-primary font-heading font-bold">
                    {text}
                </span>
                <span className="absolute inset-0 bg-accent scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-x-100"></span>
            </motion.button>
        </Link>
    );
};
export { PrimaryButton }