import { motion } from "framer-motion";
import { NextComponentType } from "next";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function FullScreenDarkLayout(props: Props) {
  return (
    <motion.div
      initial={{ height: "100vh", width: 0 }}
      animate={{ width: "100%", height: "100vh" }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white"
    >
      {props.children}
    </motion.div>
  );
}
