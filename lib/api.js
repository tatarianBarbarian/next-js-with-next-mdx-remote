const post1 = `---
title: Sample Post 1
---

# Hello from sample-post-1!

It is and MDX came from outer source

This is provided component:

<CoolCounter />

Imports and exports have no power here!
`;

const post2 = `---
title: Sample Post Two
---

# Hello from sample-post-two!

It is and MDX came from outer source
`;

const post3 = `---
title: Sample Post III
---

# Hello from sample-post-III!

It is and MDX came from outer source
`;

const posts = [
  {
    slug: "sample-post-1",
    content: post1
  },
  {
    slug: "sample-post-two",
    content: post2
  },
  {
    slug: "sample-post-III",
    content: post3
  }
];

export const getPostsSlugs = async () => {
  return posts.map((p) => p.slug);
};

export const getRawPost = async (slug) =>
  posts.find((p) => p.slug === slug).content;
