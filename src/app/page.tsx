'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

const creditNetworks = [
  { name: 'Ethereum', id: 'ethereum' }, { name: 'Base', id: 'base' },
  { name: 'Arbitrum', id: 'arbitrum' }, { name: 'Optimism', id: 'optimism' },
  { name: 'Polygon', id: 'polygon' }, { name: 'BNB Chain', id: 'bnb' },
  { name: 'Avalanche', id: 'avalanche' }, { name: 'Tempo', id: 'tempo' },
] as const;

type CreditNetwork = (typeof creditNetworks)[number]['id'];

function NetworkLogo({ network }: { network: CreditNetwork }) {
  if (network === 'ethereum') return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#627eea"/><path fill="#fff" d="m16 4.8-6.8 11.3 6.8 4 6.8-4L16 4.8Zm0 16.7-6.8-4 6.8 9.7 6.8-9.7-6.8 4Z"/></svg>;
  if (network === 'base') return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#0052ff"/><path fill="#fff" d="M15.7 25C10.9 25 7 21 7 16s3.9-9 8.7-9c4.5 0 8.2 3.5 8.7 8H13v2h11.4c-.5 4.5-4.2 8-8.7 8Z"/></svg>;
  if (network === 'arbitrum') return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#213147"/><path fill="#9dcced" d="M8.4 23.1 14 7.8h3.2l-5.6 15.3H8.4Z"/><path fill="#fff" d="m13.4 23.1 5.5-15.3h3.3l-5.6 15.3h-3.2Z"/><path fill="#28a0f0" d="m18.4 23.1 3.4-9.3 1.8 5-1.5 4.3h-3.7Z"/></svg>;
  if (network === 'optimism') return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#ff0420"/><text x="16" y="19.5" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="900">OP</text></svg>;
  if (network === 'polygon') return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#8247e5"/><path fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" d="m9 13.2 4-2.3 4 2.3v4.6l-4 2.3-4-2.3v-4.6Zm6 0 4-2.3 4 2.3v4.6l-4 2.3-2-1.2"/></svg>;
  if (network === 'bnb') return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#f3ba2f"/><path fill="#fff" d="m16 7 3.2 3.2-2 2L16 11l-1.2 1.2-2-2L16 7Zm-5.8 5.8 2 2L11 16l1.2 1.2-2 2L7 16l3.2-3.2Zm11.6 0L25 16l-3.2 3.2-2-2L21 16l-1.2-1.2 2-2ZM16 13l3 3-3 3-3-3 3-3Zm0 8 1.2-1.2 2 2L16 25l-3.2-3.2 2-2L16 21Z"/></svg>;
  if (network === 'tempo') return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#171717"/><path fill="#fff" d="M8 9h16v4h-6v11h-4V13H8V9Z"/></svg>;
  return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#e84142"/><path fill="#fff" d="M15.9 7.2c.6 0 1 .4 1.3 1l6.4 11.3c.4.7.1 1.3-.7 1.3h-3.6l-3.4-6.1-3.4 6.1H9c-.8 0-1.1-.6-.7-1.3l6.4-11.3c.3-.6.7-1 1.2-1Z"/></svg>;
}

export default function Home() {
  const [amount, setAmount] = useState(600);
  const [term, setTerm] = useState(30);
  const repayment = useMemo(() => Math.ceil(amount * 1.02), [amount]);

  return <main>
    <nav className="nav shell">
      <a href="#top" className="logo"><Image src="/bion_logo_1.png" alt="Bion" width={112} height={44}/></a>
      <div className="navLinks"><a href="#how">How it works</a><a href="#support">Support</a></div>
      <div className="navActions"><a className="navCredit" href="https://app.bionapp.com/credit-dashboard">My Credit</a><a className="navTelegram" href="https://t.me/bionapp_bot" target="_blank" rel="noopener noreferrer" aria-label="Open Bion Telegram Mini App"><svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M21.7 3.3a1 1 0 0 0-1-.2L2.8 10a1 1 0 0 0 .1 1.9l4.6 1.5 1.8 5.5a1 1 0 0 0 1.7.4l2.7-2.8 4.7 3.5a1 1 0 0 0 1.6-.6l2-15.2a1 1 0 0 0-.3-.9ZM9 12.6l8.8-5.5-7.3 7.1-.4 2.3L9 12.6Z"/></svg><span>Telegram Mini App</span></a></div>
    </nav>

    <section className="hero shell" id="top">
      <div className="heroCopy">
        <div className="kicker">BION CREDIT</div>
        <h1>Your credit journey,<br/>in one place.</h1>
        <p>Connect your wallet to check eligibility, receive your credit decision and manage every step—from agreement to repayment—in one place.</p>
        <div className="heroNetworks" aria-label="Networks analyzed for credit eligibility">
          <strong>Wallet activity analyzed across 8 EVM networks</strong>
          <div>
            {creditNetworks.map(network => <span key={network.id}><i><NetworkLogo network={network.id}/></i>{network.name}</span>)}
          </div>
        </div>
        <div className="heroSettlement"><b>Settlement network: Base mainnet</b><span>Disbursement and repayment are completed in USDC on Base.</span></div>
      </div>
      <div className="heroCredit" aria-label="Get Bion credit">
        <a className="heroCreditOpen" href="https://app.bionapp.com/stao-pilot">Open full screen ↗</a>
        <iframe title="Get Bion credit" src="https://app.bionapp.com/stao-pilot?embed=1" allow="clipboard-write" />
      </div>
    </section>

    <div className="marquee"><div>✦ SHOP &nbsp;&nbsp; ✦ TRAVEL &nbsp;&nbsp; ✦ STABLECOIN PAYMENTS &nbsp;&nbsp; ✦ PAY ANYWHERE &nbsp;&nbsp; ✦ REUSE YOUR LIMIT &nbsp;&nbsp; ✦ NO HARD CREDIT CHECK &nbsp;&nbsp; ✦ READY WHEN LIFE HAPPENS</div></div>

    <section className="people shell">
      <div className="peopleVisual">
        <Image className="peopleLifestyle" src="/bion-cafe-customer-v1.png" alt="A Bion customer using her phone at a neighbourhood cafe" fill sizes="(max-width: 850px) 100vw, 540px"/>
        <div className="peopleTag"><span>↗</span><div><small>CREDIT LINE</small><b>Ready when life happens</b></div></div>
      </div>
      <div className="peopleCopy"><div className="kicker">MORE THAN A ONE-TIME LOAN</div><h2>A credit line that keeps up with real life.</h2><p>Borrow what you need, repay it, and use your available limit again. Bion gives eligible users practical stablecoin spending power for everyday purchases and the moments that matter.</p><div className="definition"><div><b>Flexible access</b><small>Use only the amount you need from your available credit line.</small></div></div><div className="definition"><div><b>Reusable</b><small>Repay your balance and your available credit line opens back up.</small></div></div></div>
    </section>

    <section className="how shell" id="how">
      <div className="kicker">HOW IT WORKS</div><h2>Your stablecoin credit line,<br/>ready in three small steps.</h2>
      <div className="steps">
        <article className="walletStep"><div className="walletOptions"><span className="walletMeta"><i>◆</i><b>MetaMask</b></span><span className="walletConnect"><i>〰</i><b>WalletConnect</b></span><span className="walletCoinbase"><i>C</i><b>Coinbase</b></span><span className="walletTrust"><i>◈</i><b>Trust Wallet</b></span></div><h3>Connect your wallet</h3><p>Choose the wallet you already use. Your history stays on-chain and in your control.</p></article>
        <article><div className="stepIcon">✦</div><h3>Get your limit</h3><p>Our underwriting looks at your activity—not a legacy credit file—to offer a limit.</p></article>
        <article><div className="stepIcon">↗</div><h3>Spend anywhere</h3><p>Use Bion online or in-store, then choose a clear 7, 15 or 30-day repayment tenure.</p></article>
      </div>
    </section>

    <section className="quickEstimate shell" aria-label="Credit repayment estimate">
      <div className="quickEstimateIntro">
        <div className="kicker">QUICK ESTIMATE</div>
        <h2>See how your credit could look.</h2>
        <p>Choose an amount and repayment tenure for a simple illustration.</p>
      </div>
      <div className="quickEstimateCard">
        <div className="quickAmount"><span>Credit amount</span><strong>${amount}</strong></div>
        <input aria-label="Credit amount" type="range" min="100" max="1000" step="50" value={amount} onChange={e=>setAmount(Number(e.target.value))}/>
        <div className="quickRange"><span>$100</span><span>$1,000</span></div>
        <div className="quickTerms" aria-label="Repayment tenure">{[7,15,30].map(x=><button type="button" key={x} onClick={()=>setTerm(x)} className={term===x?'active':''}>{x} days</button>)}</div>
        <div className="quickTotal"><span>Estimated repayment<small>Includes an illustrative 2% fee</small></span><strong>${repayment}</strong></div>
        <a href="https://app.bionapp.com">Check my real limit <span>→</span></a>
        <small className="quickFine">Illustration only. Eligibility and final terms may differ.</small>
      </div>
    </section>

    <section className="useCases shell"><div className="kicker">MADE FOR MOMENTS THAT MATTER</div><h2>One line of credit.<br/>A thousand possibilities.</h2><div className="caseGrid"><article className="travel"><h3>Book the trip</h3><p>Cover flights today and repay when it suits your cash flow.</p><b>Explore freely ↗</b></article><article className="daily"><h3>Handle everyday</h3><p>Keep groceries, bills and subscriptions moving without stress.</p><b>Stay flexible ↗</b></article><article className="unexpected"><h3>Support family abroad</h3><p>Freelance income can be uneven. Use your credit line to send support home when it matters.</p><b>Stay connected ↗</b></article></div></section>

    <section className="borderless"><div className="shell borderlessGrid"><div className="borderlessCopy"><div className="kicker light">BORDERLESS BY DESIGN</div><h2>Your financial life is global.<br/>Your credit should be too.</h2><p>Bion connects an on-chain generation to a single stablecoin credit line—built to travel across borders, currencies and everyday moments.</p><div className="worldStats"><span><b>24/7</b><small>always-on access</small></span><span><b>Global</b><small>from day one</small></span><span><b>On-chain</b><small>portable reputation</small></span></div></div><div className="globeWrap"><div className="globeGlow"></div><Image src="/hero_globe.png" alt="A global community connected through Bion" width={760} height={760}/><div className="globeNote"><span>✦</span><div><small>ONE COMMUNITY</small><b>Credit without borders</b></div></div></div></div></section>

    <section className="cta shell"><div><div className="kicker light">READY WHEN YOU ARE</div><h2>See what your wallet<br/>can unlock.</h2><p>Check your limit in minutes. No hard credit check.</p></div><a href="https://app.bionapp.com">Get started <span>→</span></a></section>

    <section className="community shell" id="support"><div><div className="kicker">COMMUNITY & SUPPORT</div><h2>Stay close. Get help when you need it.</h2><p>Follow Bion for product updates or email our customer-support team with any question.</p></div><div className="communityLinks"><a className="supportLink" href="mailto:connect@bionapp.com"><span className="emailMark" aria-hidden="true">✉</span><div><small>CUSTOMER SUPPORT</small><b>Email connect@bionapp.com</b></div><em>↗</em></a><a href="https://t.me/bionofficial" target="_blank" rel="noreferrer"><span className="telegramMark">➤</span><div><small>COMMUNITY</small><b>Join Telegram</b></div><em>↗</em></a><a href="https://x.com/bion_app" target="_blank" rel="noreferrer"><span className="xMark">𝕏</span><div><small>FOLLOW US</small><b>Follow on X</b></div><em>↗</em></a></div></section>

    <footer className="shell"><a className="footerLogo" href="#top"><Image src="/bion_logo_1.png" alt="Bion" width={100} height={40}/></a><div><a href="https://app.bionapp.com/credit-dashboard">My Credit</a><a href="https://t.me/bionapp_bot" target="_blank" rel="noreferrer">Telegram Mini App</a><a href="mailto:connect@bionapp.com">Support</a><a href="/privacy">Privacy</a></div><small>© 2026 Bion. All rights reserved.</small></footer>
  </main>
}
