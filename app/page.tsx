import Image from "next/image";
import Link from "next/link";
import { ConsultationWidget } from "@/components/ConsultationWidget";
import { OpeningPopup } from "@/components/OpeningPopup";
import { openingNotice,partners,programs } from "@/content/home";
import styles from "./page.module.css";

export default function Home(){return <main>
  <OpeningPopup/><ConsultationWidget/>
  <section className={styles.hero}>
    <Image src="/images/career-ai-hero.png" alt="상담 전문가와 구직자가 함께 진로 방향을 살펴보는 모습" fill priority sizes="100vw" className={styles.heroImage}/>
    <div className={styles.heroShade}/><div className={styles.heroGrid}/>
    <div className={styles.heroContent}><span className={styles.eyebrow}>기술과 사람을 잇는 곳이란</span><h1>나의 가능성을 발견하고,<br/><em>미래의 일</em>과 연결합니다.</h1><p>AI 진단 도구와 사람 중심의 전문 상담을 결합해<br/>나에게 맞는 진로 방향을 함께 찾아갑니다.</p><div className={styles.actions}><Link className="button primary" href="/programs">프로그램 살펴보기 <span>→</span></Link><Link className="button glass" href="/apply">상담·교육 신청</Link></div></div>
    <div className={styles.heroMeta}><span>AI CAREER GUIDANCE</span><b>01</b><i/></div>
  </section>

  <section className={styles.pathSection}><div className="container"><header className="section-heading"><span>START YOUR JOURNEY</span><h2>지금, 어떤 도움이<br/>필요하신가요?</h2><p>목적에 맞는 안내를 선택하면 필요한 프로그램으로 바로 연결됩니다.</p></header><div className={styles.paths}>
    <Link className={`${styles.path} ${styles.pathMain}`} href="/programs/ai-career-counseling"><small>01 · CAREER</small><h3>진로 방향을<br/>찾고 싶어요</h3><p>AI 활용 진로상담</p><b>↗</b><div className={styles.orbit}><i/><i/><i/></div></Link>
    <Link className={styles.path} href="/programs/youth-employment"><small>02 · GROWTH</small><h3>취업 역량을<br/>높이고 싶어요</h3><p>청년 취업역량강화과정</p><b>↗</b></Link>
    <Link className={styles.path} href="/programs/corporate-recruiting"><small>03 · BUSINESS</small><h3>우리 기업의<br/>채용이 필요해요</h3><p>기업 채용 컨설팅</p><b>↗</b></Link>
    <Link className={styles.path} href="/programs/commissioned-education"><small>04 · EDUCATION</small><h3>특강·교육을<br/>의뢰하고 싶어요</h3><p>특강·위탁교육</p><b>↗</b></Link>
  </div></div></section>

  <section className={styles.programSection}><div className="container"><header className="section-heading row"><div><span>PROGRAMS</span><h2>가능성을 현실로 만드는<br/>커리어 프로그램</h2></div><Link className="text-link" href="/programs">전체 프로그램 보기 →</Link></header><div className={styles.programs}>{programs.map((program)=><Link href={`/programs/${program.slug}`} className={`${styles.programCard} ${styles[program.tone]}`} key={program.slug}><div><span>{program.number}</span><small>{program.label}</small></div><h3>{program.title}</h3>{program.subtitle&&<b>{program.subtitle}</b>}<p>{program.summary}</p><i>자세히 보기 →</i></Link>)}</div></div></section>

  <section className={styles.aiSection}><div className="container"><div className={styles.aiPanel}><div className={styles.aiCopy}><span className={styles.eyebrow}>AI × HUMAN EXPERTISE</span><h2>데이터로 발견하고,<br/>대화로 방향을 찾습니다.</h2><p>AI는 가능성을 넓게 탐색하고, 전문 상담가는 한 사람의 경험과 상황을 깊이 이해합니다. 기술과 사람이 함께 만드는 더 세심한 진로상담을 지향합니다.</p><Link className="button light" href="/programs/ai-career-counseling">AI 진로상담 알아보기 →</Link></div><div className={styles.steps}><div><span>01</span><b>진로 진단</b><p>개인의 관심과 역량을 살펴봅니다.</p></div><div><span>02</span><b>심층 상담</b><p>경험과 상황을 함께 이해합니다.</p></div><div><span>03</span><b>방향 설계</b><p>실행 가능한 다음 단계를 찾습니다.</p></div></div></div></div></section>

  <section className={styles.partners}><div className="container"><header className="section-heading row"><div><span>PARTNERSHIP</span><h2>지역과 교육, 산업을 잇는<br/>협력 네트워크</h2></div><p>다양한 전문기관과 함께 실질적인<br/>고용서비스 모델을 만들어갑니다.</p></header><div className={styles.partnerGrid}>{partners.map((partner,index)=><article key={partner.name}><span>0{index+1}</span><h3>{partner.name}</h3><p>{partner.description}</p></article>)}</div></div></section>

  <section className={styles.news}><div className="container"><header className="section-heading row"><div><span>NEWS & NOTICE</span><h2>센터의 새로운 소식</h2></div><Link className="text-link" href="/news">전체 소식 보기 →</Link></header><Link href="/news" className={styles.newsCard}><div><small>NOTICE</small><span>{openingNotice.date}</span></div><h3>{openingNotice.title}</h3><p>{openingNotice.paragraphs[2]}</p><b>→</b></Link></div></section>

  <section className={styles.ctaSection}><div className="container"><div className={styles.ctaPanel}><span>YOUR NEXT STEP</span><h2>나에게 맞는 다음 걸음,<br/>함께 찾아볼까요?</h2><p>상담과 교육에 관한 문의를 남겨주세요.<br/>연결 서비스는 현재 준비 중입니다.</p><div><Link className="button primary" href="/apply">온라인 상담신청 →</Link><Link className="button outline" href="/apply?type=education">교육 문의</Link></div></div></div></section>
</main>}
