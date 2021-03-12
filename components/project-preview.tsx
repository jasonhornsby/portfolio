import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  categories: string[];
  title: string;
  description: string;
  image: string;
};

export default function ProjectPreview({
  categories,
  title,
  description,
  image,
  id,
}: Props) {
  return (
    <Link href={"/projects/" + id}>
      <motion.div
        whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
        className="bg-white text-black rounded-lg pl-4 pr-4 flex flex-col mb-2 shadow-lg h-96 cursor-pointer"
      >
        <header className="pt-1">
          {categories.map((c) => (
            <span className="text-sm pr-2">{c}</span>
          ))}
        </header>
        <h2>{title}</h2>
        <p>{description}</p>
      </motion.div>
    </Link>
  );
}

// TODO: Add the image here as a background to make it look like this https://codesandbox.io/s/app-store-ui-using-react-and-framer-motion-ecgc2?file=/src/index.tsx
