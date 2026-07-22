import Link from "next/link";
import { siteConfig } from "@/site.config";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div><p className={styles.kicker}>KOREA CAREER CENTER</p><h2>사람의 가능성과<br />미래의 일을 연결합니다.</h2></div>
        <Link className={styles.cta} href="/apply">상담·교육 문의하기 <span aria-hidden="true">→</span></Link>
      </div>
      <div className={styles.bottom}>
        <div><strong>{siteConfig.name}</strong><p>주소·대표번호·이메일 정보는 준비 중입니다.</p></div>
        <nav aria-label="하단 메뉴"><Link href="/center">센터소개</Link><Link href="/programs">프로그램</Link><Link href="/news">공지사항</Link><Link href="/contact">오시는 길</Link></nav>
        <p className={styles.copy}>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

