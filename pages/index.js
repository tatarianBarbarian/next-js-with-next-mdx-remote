import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <p>This sandbox is example for article</p>
      <div>
        <Link href="/blog">
          <a>Go to blog</a>
        </Link>
      </div>
    </div>
  );
}
