import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { CommunityBanner } from '@/components/sections';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[white] text-navy flex flex-col justify-between">
      <Navbar />

      <div className="w-full max-w-4xl mx-auto px-6 py-32 md:py-40 flex-grow pt-[180px]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-navy tracking-tight">Privacy Policy</h1>

        <div className="space-y-10 text-navy text-lg leading-relaxed mt-10">

          <p>Welcome to Bion. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.</p>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect the following types of information:</p>

            <h3 className="text-xl font-medium text-navy mb-2">a. Personal Information:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Name, email address, phone number</li>
              <li>Payment details for transactions</li>
              <li>Account credentials for authentication</li>
            </ul>

            <h3 className="text-xl font-medium text-navy mb-2">b. Non-Personal Information:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Device information (IP address, browser type, OS)</li>
              <li>Usage data (time spent, features used, preferences)</li>
              <li>Cookies and tracking technologies</li>
            </ul>

            <h3 className="text-xl font-medium text-navy mb-2">c. Blockchain Data:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Public wallet addresses for transactions</li>
              <li>On-chain interactions related to purchases and rewards</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use collected data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and enhance our services</li>
              <li>Process payments and transactions</li>
              <li>Personalize your shopping experience</li>
              <li>Improve security and fraud prevention</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">3. How We Share Your Information</h2>
            <p className="mb-4">We do not sell your personal information. However, we may share data with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-navy">Service Providers:</strong> Payment processors, analytics partners, and customer support tools</li>
              <li><strong className="text-navy">Legal Authorities:</strong> If required by law or to enforce our terms</li>
              <li><strong className="text-navy">Business Transfers:</strong> In case of a merger, sale, or acquisition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">4. Data Security & Retention</h2>
            <p>We implement robust security measures to protect your data. Personal data is retained only as long as necessary for operational, legal, and compliance purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">5. Your Rights & Choices</h2>
            <p className="mb-4">You may have rights under applicable privacy laws, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, correct, or delete your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Disable cookies via browser settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">6. Third-Party Links & Services</h2>
            <p>Our platform may contain links to third-party services. We are not responsible for their privacy practices.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">7. Updates to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Changes will be posted with an updated effective date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">8. Contact Us</h2>
            <p>For questions or concerns, contact us at <a href="mailto:connect@bionapp.com" className="text-malibu hover:underline">connect@bionapp.com</a>.</p>
          </section>

          <section className="pt-6 border-t border-[#262626] font-medium text-navy">
            <p>By using Bion, you agree to this Privacy Policy.</p>
          </section>

        </div>
      </div>


      <CommunityBanner />
    </main>
  );
}
