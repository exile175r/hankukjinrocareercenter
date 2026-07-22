"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/site.config";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/" aria-label={`${siteConfig.name} 홈`}>
          <span className={styles.mark} aria-hidden="true"><i /><i /><i /></span>
          <span><b>한국진로</b><small>커리어센터</small></span>
        </Link>
        <button className={styles.menuButton} type="button" aria-label="메뉴 열기" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={`${styles.nav} ${open ? styles.open : ""}`} aria-label="주요 메뉴">
          <ul className={styles.navList}>
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link onClick={() => setOpen(false)} className={pathname === item.href || pathname.startsWith(`${item.href}/`) ? styles.active : ""} href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <Link onClick={() => setOpen(false)} className={styles.cta} href="/apply">상담·교육 신청 <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
