import Link from "next/link";

type BlogPreviewProperties = {
  id: string;
  title: string;
  date: string;
  key: string;
};

export default function BlogPreview(props: BlogPreviewProperties) {
  return (
    <Link href={"/posts/" + props.id}>
      <div className="cursor-pointer shadow-lg p-4 rounded-lg">
        <h3>{props.title}</h3>
      </div>
    </Link>
  );
}
