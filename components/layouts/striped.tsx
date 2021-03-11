import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import cn from "classnames";

type Props = {
  children?: ReactNode;
  color: "light" | "dark";
};

export default function Stripedlayout(props: Props) {
  const stripeClass = props.color === "light" ? "bg-black" : "bg-white";

  return (
    <AnimatePresence>
      <motion.div
        className={cn("flex", "flex-row", "justify-start", "h-screen")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key="landing"
      >
        <div className="w-1/5"></div>
        <div className={cn("w-3", "mr-2", stripeClass)}></div>
        <div className={cn("w-3", "mr-6", stripeClass)}></div>
        <div className="flex h-full w-4/5">{props.children}</div>
      </motion.div>
    </AnimatePresence>
  );
}
