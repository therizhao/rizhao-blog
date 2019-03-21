export default {
  title: `My NS Story`,
  tags: ["ns"],
  spoiler: `7th January 2017. I sat in a lounge chair in the library, waiting eagerly for my NS journey to start...`,
  getContent: () => import("./document.mdx")
};
