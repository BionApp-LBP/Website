import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { CommunityBanner } from '@/components/sections';

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white text-navy flex flex-col justify-between">
      <Navbar />

      <div className="w-full max-w-4xl mx-auto px-6 py-32 md:py-40 flex-grow pt-[180px]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-navy tracking-tight">Terms & Conditions</h1>
        <p className="text-xl text-navy mb-12">Terms of Use</p>

        <div className="space-y-10 text-navy text-lg leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">1. Introduction</h2>
            <p>The use of https://bionapp.com ("Website") is subject to the following terms of use ("Terms"). By accessing or enrolling on our Website, you ("User" or "you") agree to abide by these Terms. "Bion" ("we," "us," or "our") owns and operates this Website and reserves the right to modify these Terms at any time, with or without prior notice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">2. General Terms</h2>
            <p>Bion provides cashback rewards to account holders for purchases made at participating brands through various platforms, including but not limited to the Website, browser extension, and mobile application (collectively, "Bion Platforms"). By using our services ("Services"), you acknowledge that you have read and understood these Terms and agree to comply with them. Continued use of our Services constitutes your acceptance of any modifications to these Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">3. Account Registration</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Users must be at least 16 years old to register.</li>
              <li>Each user is allowed only one Bion account.</li>
              <li>Cashback rewards are available in Crypto or USD only.</li>
              <li>Some merchants may have geographic restrictions on shipping and cashback eligibility.</li>
              <li>Users must provide accurate and up-to-date information, including a valid email address.</li>
              <li>Users are responsible for any network fees or currency conversion costs.</li>
              <li>Accounts may be disabled due to inactivity, fraudulent activity, or failure to maintain a valid email.</li>
              <li>Bion reserves the right to reject or terminate accounts at its discretion.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">4. Earning Cashback</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cashback is credited for purchases made through Bion Platforms at participating brands.</li>
              <li>Users must follow specific conditions to ensure cashback eligibility, including:
                <ul className="list-[circle] pl-6 mt-2 space-y-1 text-navy">
                  <li>Keeping cookies enabled.</li>
                  <li>Completing transactions in the same browsing session.</li>
                  <li>Completing the purchase within the specified timeframe.</li>
                </ul>
              </li>
              <li>Cashback is typically earned on the net purchase amount (excluding taxes, shipping, and fees).</li>
              <li>Cashback eligibility may vary by merchant and is subject to change.</li>
              <li>Transactions are conducted between the user and the participating brand, not with Bion.</li>
              <li>Cashback is initially credited as "pending" and is confirmed once verified by the retailer (typically within 30 days or more).</li>
              <li>If a transaction is canceled, returned, or modified, cashback will not be awarded.</li>
              <li>Cashback payout is at Bion's sole discretion and may be declined in cases of suspected fraud, merchant non-payment, or policy violations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">5. Withdrawing Cashback</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Users can withdraw cashback once they meet the minimum redemption amount.</li>
              <li>A valid wallet address, bank account, or other withdrawal method must be provided.</li>
              <li>Users are responsible for any applicable taxes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">6. Dormant Accounts</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accounts inactive for six months or more may be marked as dormant and terminated.</li>
              <li>Logging into your account at least once every six months will keep it active.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">7. Privacy Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Our Privacy Policy outlines how we handle your data. By using our Services, you consent to our data practices.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">8. Indemnification</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Users agree to indemnify and hold Bion harmless from any claims, liabilities, or expenses resulting from breaches of these Terms or transactions with participating brands.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">9. Assignment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bion reserves the right to assign or subcontract its rights and obligations under these Terms.</li>
              <li>Users may not assign or transfer their account or obligations without Bion's written consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">10. Virus Disclaimer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>While we take reasonable precautions, Bion is not liable for any loss, disruption, or damage caused by viruses or malware from our Website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">11. Entire Agreement</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>These Terms, along with any referenced policies, constitute the entire agreement between you and Bion.</li>
              <li>Bion reserves the right to modify these Terms at any time.</li>
              <li>Continued use of our Services constitutes acceptance of any changes.</li>
            </ul>
          </section>

          <section className="pt-6 border-t border-gray-100">
            <p>For any inquiries, please contact us at <a href="mailto:support@bionapp.com" className="text-malibu hover:underline">support@bionapp.com</a>.</p>
          </section>

        </div>
      </div>


      <CommunityBanner />
    </main>
  );
}
