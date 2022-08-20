import { serialize } from "next-mdx-remote/serialize";
import { getRawPost } from "../../lib/api";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import React from "react";

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const rawPost = await getRawPost(slug);
  const serializedMdx = await serialize(rawPost, {
    parseFrontmatter: true
  });

  return {
    props: {
      serializedMdx
    }
  };
}

const customComponents = {
  h1: ({ style, ...props }) => (
    <h1 style={{ fontStyle: "italic", color: "red" }} {...props} />
  ),
  CoolCounter: () => {
    const [count, setCount] = React.useState(0);

    return <button onClick={() => setCount((i) => i + 1)}>{count}</button>;
  }
};

export default function PostPage({ serializedMdx }) {
  const { frontmatter } = serializedMdx;

  return (
    <div>
      <h1>{frontmatter.title} (from frontmatter)</h1>
      <MDXRemote {...serializedMdx} components={customComponents} />
      <div>
        <Link href="/blog">
          <a>Go back</a>
        </Link>
      </div>
    </div>
  );
}
