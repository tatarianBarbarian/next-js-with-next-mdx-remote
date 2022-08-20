import Link from "next/link";
import { getPostsSlugs } from "../../lib/api";

export async function getStaticProps() {
  const postsSlugs = await getPostsSlugs();

  return {
    props: {
      postsSlugs
    }
  };
}

export default function BlogIndex({ postsSlugs }) {
  return (
    <ul>
      {postsSlugs.map((s) => (
        <li key={s}>
          <Link as={`/blog/${s}`} href="/blog/[slug]">
            <a>{s}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
