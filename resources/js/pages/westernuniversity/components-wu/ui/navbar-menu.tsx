"use client";
import React from "react";
import { motion } from "motion/react";
import { Link } from "@inertiajs/react";
import {  ChevronUp } from "lucide-react";
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.a
          href={item.toLowerCase() === "about us" ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-color1 font-noto-san-extra-light font-extrabold hover:opacity-[0.9] dark:text-white flex gap-0.5 items-center justify-center"
      >
       <p>{item}</p>
       <ChevronUp className="h-4 w-4 text-color1 mt-0.5 font-extrabold dark:text-gray-300 transition-transform duration-300 rotate-180" />
          href={item.toLowerCase() === "about" ? '/'  : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
        transition={{ duration: 0.5 }}
        className="  cursor-pointer text-white font-now-regular tracking-widest hover:underline underline-offset-4 dark:text-white flex gap-0.5 items-center justify-center"
      >
       {item}
      </motion.a>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4 font-proxima-nova-bold "
            <div className="absolute top-[calc(100%_+_10px)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-gray-900 dark:bg-black backdrop-blur-sm overflow-hidden"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4 font-now-regular "
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}

        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative dark:bg-black dark:border-white/[0.2]  bg-white shadow-input flex justify-between items-center  py-2 "
    >
        <a href="/" className="w-14  flex gap-2 items-center">
             <img src="/assets/demo-images/logo-wu.png" />
             <p className="text-color1 font-noto-san-extra-light font-extrabold text-lg">Western University</p>
        </a>
      className="relative  flex justify-between items-center py-2 "
    >
        <div className="flex justify-between items-center space-x-6 ">
        {children}
        </div>

    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md object-cover shadow-xl"
      />
      <div>
        <h4 className="text-xl font-noto-san-extra-light font-extrabold mb-1 text-color1 dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
        <h4 className="text-xl font-now-regular font-extrabold mb-1 text-color1 dark:text-white">
          {title}
        </h4>
        <p className="text-white text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-white max-w-56 dark:text-neutral-200 hover:text-[#273896] "
    >
      {children}
    </Link>
  );
};
