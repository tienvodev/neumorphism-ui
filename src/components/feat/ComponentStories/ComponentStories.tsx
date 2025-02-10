import { FC } from "react";
import styles from "./ComponentStories.module.css";

interface ComponentStoriesProps<T extends object> {
  title: string;
  description?: string;
  variants: T[];
  component: FC<T>;
}

export default function ComponentStories<T extends object>({
  title,
  description,
  variants,
  component: Component,
}: ComponentStoriesProps<T>) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.grid}>
        {variants.map((props, index) => (
          <div key={index} className={styles.variantContainer}>
            <Component {...props} />
          </div>
        ))}
      </div>
    </div>
  );
}
