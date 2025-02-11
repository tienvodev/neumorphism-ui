import Link from "next/link";
import styles from "./Layout.module.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode;
}

const interSans = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  const componentItems = [
    { label: "Button", href: "/components/button" },
    { label: "Alert", href: "/components/alert" },
    { label: "Input", href: "/components/input" },
    {
      label: "IconButton",
      href: "/components/icon-button",
    },
    {
      label: "Fab",
      href: "/components/fab",
    },
    {
      label: "Text",
      href: "/components/text",
    },
    {
      label: "Camera",
      href: "/components/document-camera",
    },
  ];
  return (
    <div className={clsx(interSans.variable, styles.layout)}>
      <nav className={styles.header}>
        <ul className={styles.navList}>
          {componentItems.map(({ label, href }) => (
            <li key={href} className={styles.navItem}>
              <Link
                href={href}
                className={clsx(styles.navLink, {
                  [styles.active]: router.pathname === href,
                })}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className={styles.content}>{children}</main>
    </div>
  );
}
