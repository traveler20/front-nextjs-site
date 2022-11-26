import styles from "styles/two-column.module.css";

// 1ファイルで複数コンポーネントのためdefaultではなく名前付きエクスポート
export function TwoColumn({ children }) {
  return <div className={styles.flexContainer}>{children}</div>;
}

export function TwoColumnMain({ children }) {
  return <div className={styles.main}>{children}</div>;
}

export function TwoColumnSidebar({ children }) {
  return <div className={styles.sidebar}>{children}</div>;
}
