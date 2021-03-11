import { NAME } from "../lib/statics";
import Image from "next/image";

export default function Header() {
  return (
    <div className="container flex flex-row items-center">
      <Image
        priority
        src="/images/face.jpg"
        className="rounded-full"
        height={108}
        width={108}
        alt={NAME}
      />
      <h1 className="ml-4">{NAME}</h1>
    </div>
  );
}

/*

<header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/face.jpg"
              height={144}
              width={144}
              alt={name}
            />
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/face.jpg"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>


*/
