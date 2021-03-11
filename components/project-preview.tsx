import image from "next/image";
import Image from "next/image";

type Props = {
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
}: Props) {
  return (
    <div className="w-2/6 h-80 bg-white text-black rounded-lg pl-4 pr-4 flex flex-col">
      <header className="pt-1">
        {categories.map((c) => (
          <span className="text-sm pr-2">{c}</span>
        ))}
      </header>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

// TODO: Add the image here as a background to make it look like this https://codesandbox.io/s/app-store-ui-using-react-and-framer-motion-ecgc2?file=/src/index.tsx
