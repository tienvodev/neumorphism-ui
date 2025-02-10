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
  const router = useRouter(); // Get current path

  const componentItems = [
    { label: "Button", href: "/components/button" },
    { label: "Alert", href: "/components/alert" },
    { label: "Input", href: "/components/input" },
  ];
  return (
    <div className={clsx(interSans.variable, styles.layout)}>
      <nav className={styles.sidebar}>
        <div className={styles.logo}>My UI Kit</div>

        {/* <h3 className={styles.sectionTitle}>Styles</h3>
        <ul className={styles.navList}>
          {navItems.map(({ label, href }) => (
            <li key={href} className={styles.navItem}>
              <Link
                href={href}
                className={`${styles.navLink} ${
                  router.pathname === href ? styles.active : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul> */}

        <h3 className={styles.sectionTitle}>Components</h3>
        <ul className={styles.navList}>
          {componentItems.map(({ label, href }) => (
            <li key={href} className={styles.navItem}>
              <Link
                href={href}
                className={`${styles.navLink} ${
                  router.pathname === href ? styles.active : ""
                }`}
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
