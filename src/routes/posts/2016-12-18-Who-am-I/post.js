export default {
  title: `Who am I?`,
  tags: ['introspective'],
  spoiler: `Flickering lights. Groaning stomach. I drifted from block to block like an intoxicated ghost...`,
  getContent: () => import('./document.mdx'),
}