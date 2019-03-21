import React from "react";
import { Link } from "react-navi";
import ArticleMeta from "./ArticleMeta";
import styles from "./ArticleSummary.module.css";

function ArticleSummary({ blogRoot, route }) {
  return (
    <Link style={{ color: 'inherit', textDecoration: 'none' }} href={route.url.href}>
      <article className={styles.ArticleSummary}>
        <h2>{route.title}</h2>
        <ArticleMeta blogRoot={blogRoot} meta={route.data} />
        <p>{route.data.spoiler}</p>
      </article>
    </Link>
  );
}

export default ArticleSummary;
