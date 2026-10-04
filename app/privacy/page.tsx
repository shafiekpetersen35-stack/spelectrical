import type { Metadata } from "next"
import LegalPage, { PolicySection } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy | SP Electrical Services",
  description: "How SP Electrical Services handles personal information submitted through this website.",
}

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" intro="This policy explains how SP Electrical Services (Pty) Ltd handles personal information when you visit this website or contact us.">
      <PolicySection title="Information we collect">
        <p>If you submit the contact form or contact us directly, we may receive your name, email address, phone number, and the details you include in your enquiry. Please do not send passwords, payment-card details, identity documents, or other sensitive information through the website form.</p>
        <p>Our website may also receive basic technical and usage information, such as browser and device details, pages visited, and referral information, through hosting, security, and analytics services.</p>
      </PolicySection>

      <PolicySection title="How we use information">
        <p>We use enquiry details to respond to you, prepare or discuss a quotation, arrange requested work, maintain business records, and handle follow-up related to your request. The website enquiry form opens a draft email addressed to us; your email provider processes it when you choose to send it. We use technical information to operate, protect, and improve the website.</p>
      </PolicySection>

      <PolicySection title="Service providers and transfers">
        <p>We may use service providers to host and secure the website, measure website usage, and deliver business email. These providers include Cloudflare, Vercel Analytics, and Zoho, where those services are enabled. Your email provider processes messages you send through the enquiry form. Providers process information as needed to provide their services. Depending on the provider and its infrastructure, information may be processed outside South Africa, subject to applicable legal safeguards.</p>
        <p>We do not sell personal information. We may disclose it where required by law or where reasonably necessary to protect rights, safety, or the operation of our services.</p>
      </PolicySection>

      <PolicySection title="Retention and security">
        <p>We keep personal information only for as long as reasonably necessary for the purposes described above, including legitimate business record-keeping and legal obligations. We use reasonable safeguards intended to protect information, but no method of internet transmission or electronic storage can be guaranteed completely secure.</p>
      </PolicySection>

      <PolicySection title="Your choices and rights">
        <p>You may ask us to confirm whether we hold your personal information, request access to or correction of it, or raise an objection or request deletion where applicable law permits. You can also choose not to provide information, although we may then be unable to respond to or progress your enquiry.</p>
        <p>South African data subjects may have rights under the Protection of Personal Information Act (POPIA), subject to its requirements and exceptions. You may also lodge a complaint with the Information Regulator of South Africa.</p>
      </PolicySection>

      <PolicySection title="Contact and updates">
        <p>For privacy questions or requests, contact <a className="font-semibold text-green-700 underline" href="mailto:info@spelectrical.co.za">info@spelectrical.co.za</a> or call <a className="font-semibold text-green-700 underline" href="tel:+27766729270">+27 76 672 9270</a>. We may update this policy by publishing a revised version on this page.</p>
      </PolicySection>
    </LegalPage>
  )
}
