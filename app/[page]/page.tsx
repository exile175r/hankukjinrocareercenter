import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { openingNotice,partners,programs } from "@/content/home";
import styles from "./page.module.css";

const pages={center:"센터소개",organization:"조직도",programs:"프로그램 안내",partners:"협력기관",apply:"상담·교육 신청",news:"공지사항·소식",contact:"오시는 길·문의"} as const;
type PageKey=keyof typeof pages;
export function generateStaticParams(){return Object.keys(pages).map(page=>({page}))}
export async function generateMetadata({params}:{params:Promise<{page:string}>}):Promise<Metadata>{const {page}=await params;return {title:pages[page as PageKey]??"페이지"}}

function Pending({title,description}:{title:string;description:string}){return <div className={styles.pending}><span aria-hidden="true">✦</span><h2>{title}</h2><p>{description}</p><Link href="/">홈으로 돌아가기 →</Link></div>}

export default async function InteriorPage({params}:{params:Promise<{page:string}>}){const {page}=await params;if(!(page in pages))notFound();const key=page as PageKey;return <main className={styles.main}><section className={styles.hero}><div className="container"><span>HANKUK JINRO CAREER CENTER</span><p>HOME / {pages[key]}</p><h1>{pages[key]}</h1></div></section><div className={`container ${styles.content}`}>
  {key==="center"&&<><header className={styles.intro}><span>ABOUT US</span><h2>사람의 가능성과<br/>미래의 일을 연결합니다.</h2><p>한국진로커리어센터는 AI 시대 변화하는 취업환경 속에서 한 사람 한 사람에게 맞는 진로 방향을 함께 찾아가는 것을 목표로 합니다.</p></header><Pending title="센터소개 콘텐츠를 준비 중입니다" description="설립 배경, 비전과 핵심가치는 자료를 전달받은 후 정확하게 안내하겠습니다."/></>}
  {key==="organization"&&<Pending title="조직도 정보를 준비 중입니다" description="조직 구성과 담당 업무 자료를 전달받은 후 업데이트하겠습니다."/>}
  {key==="programs"&&<><header className={styles.intro}><span>PROGRAMS</span><h2>나에게 필요한 성장을<br/>프로그램에서 시작하세요.</h2><p>진로상담부터 취업역량 강화, 기업 채용과 위탁교육까지 대상과 목적에 맞는 프로그램을 확인해보세요.</p></header><div className={styles.programGrid}>{programs.map(p=><Link key={p.slug} href={`/programs/${p.slug}`}><span>{p.number} · {p.label}</span><h2>{p.title}</h2><p>{p.summary}</p><b>프로그램 보기 →</b></Link>)}</div></>}
  {key==="partners"&&<><header className={styles.intro}><span>PARTNERSHIP</span><h2>함께 연결하고,<br/>더 넓은 기회를 만듭니다.</h2></header><div className={styles.partnerList}>{partners.map((p,i)=><article key={p.name}><span>0{i+1}</span><div><h2>{p.name}</h2><p>{p.description}</p><small>기관 로고와 연결 정보는 준비 중입니다.</small></div></article>)}</div></>}
  {key==="apply"&&<><header className={styles.intro}><span>CONTACT</span><h2>상담과 교육에 대해<br/>편하게 문의해주세요.</h2><p>현재 온라인 접수 서비스는 준비 중입니다. 접수처가 확정되는 즉시 안전한 신청 기능을 제공하겠습니다.</p></header><section className={styles.formCard}><div><span>APPLICATION</span><h2>온라인 신청 준비 중</h2><p>개인정보 수집 범위와 접수 방식이 확정되기 전에는 신청 정보를 받지 않습니다.</p></div><form aria-label="준비 중인 상담 신청 양식"><label>이름<input disabled placeholder="서비스 준비 중"/></label><label>연락처<input disabled placeholder="서비스 준비 중"/></label><label>문의 구분<select disabled><option>온라인 상담신청</option><option>교육 문의</option></select></label><label>문의 내용<textarea disabled placeholder="서비스 준비 중"/></label><button disabled>신청 서비스 준비 중</button></form></section></>}
  {key==="news"&&<><header className={styles.intro}><span>NEWS & NOTICE</span><h2>센터의 새로운 소식을<br/>전해드립니다.</h2></header><article className={styles.notice}><div><span>NOTICE</span><time>{openingNotice.date}</time></div><h2>{openingNotice.title}</h2>{openingNotice.paragraphs.map(p=><p key={p}>{p}</p>)}<p>청년 대상 취업역량강화과정, AI 활용 진로상담, 기업 채용 컨설팅 등 프로그램 안내</p><p>중랑구여성인력개발센터, 한국폴리텍대학 로봇캠퍼스, 성남시청, 두드림IT교육원 등 협력기관과의 활동 소식</p><p>온라인 상담·교육 신청</p><strong>한국진로커리어센터 드림</strong></article></>}
  {key==="contact"&&<><header className={styles.intro}><span>LOCATION & CONTACT</span><h2>한국진로커리어센터로<br/>오시는 길</h2></header><Pending title="위치와 문의 정보를 준비 중입니다" description="정확한 주소, 연락처, 운영시간과 지도 연결 정보가 확인되는 즉시 안내하겠습니다."/></>}
  </div></main>}
