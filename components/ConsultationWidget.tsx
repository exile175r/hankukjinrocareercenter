"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./ConsultationWidget.module.css";
export function ConsultationWidget(){const [open,setOpen]=useState(false);return <div className={styles.wrap}>{open&&<section className={styles.panel} role="dialog" aria-label="상담 안내"><button className={styles.close} onClick={()=>setOpen(false)} aria-label="상담 안내 닫기">×</button><span className={styles.badge}>CARE CONNECT</span><h2>어떤 도움이<br/>필요하신가요?</h2><p>상담 서비스 연결을 준비 중입니다.<br/>현재는 신청 안내를 확인해 주세요.</p><Link href="/apply">온라인 상담신청 <b>→</b></Link><Link href="/apply?type=education">교육 문의 <b>→</b></Link></section>}<button className={styles.fab} onClick={()=>setOpen(!open)} aria-expanded={open}><span aria-hidden="true">{open?"×":"✦"}</span><b>{open?"닫기":"상담"}</b></button></div>}
