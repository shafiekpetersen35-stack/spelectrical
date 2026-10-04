import type { Metadata } from "next"
import LegalPage, { PolicySection } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Terms of Service | SP Electrical Services",
  description: "Terms for using the SP Electrical Services website and requesting electrical services.",
}

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" intro="These terms cover your use of this website. Any electrical work we undertake is also subject to the separate quotation and agreement for that work.">
      <PolicySection title="Using this website">
        <p>By using this website, you agree to use it lawfully and not to disrupt, damage, or attempt to gain unauthorised access to the site or its systems. If you do not agree with these terms, please do not use the website.</p>
      </PolicySection>

      <PolicySection title="Website information and service enquiries">
        <p>Information on this website is general information about SP Electrical Services and its services. It is not a technical assessment, electrical design, safety inspection, or quotation. Photos are examples of completed or in-progress work and may not represent every project or result.</p>
        <p>Submitting an enquiry does not create a contract or guarantee availability, pricing, or a particular completion date. Work begins only after the scope, price, and applicable terms have been agreed in writing. Quotations may depend on an inspection, site conditions, materials, and regulatory requirements.</p>
      </PolicySection>

      <PolicySection title="Electrical safety">
        <p>Do not rely on website content or an online enquiry for emergency or safety-critical advice. If there is immediate danger, keep clear of the hazard and contact the appropriate emergency service or a qualified electrician. Do not attempt electrical work unless you are qualified and authorised to do so.</p>
      </PolicySection>

      <PolicySection title="Intellectual property">
        <p>Unless stated otherwise, the text, branding, photographs, and other material on this website belong to SP Electrical Services or are used with permission. You may view the site for personal or business enquiry purposes. Reproduction, modification, or commercial reuse requires prior permission from the rights holder.</p>
      </PolicySection>

      <PolicySection title="Third-party websites and availability">
        <p>This website may link to third-party services. SP Electrical Services does not control those services and is not responsible for their content, security, or privacy practices. We aim to keep the website available and accurate, but access and content may change or be interrupted.</p>
      </PolicySection>

      <PolicySection title="Liability and applicable law">
        <p>Nothing in these terms limits a right or liability that cannot lawfully be limited. To the extent permitted by South African law, SP Electrical Services is not liable for losses arising solely from reliance on general website information, temporary unavailability, or third-party websites. These terms are governed by the laws of the Republic of South Africa.</p>
      </PolicySection>

      <PolicySection title="Changes and contact">
        <p>We may update these terms by publishing a revised version on this page. For questions about these terms, contact <a className="font-semibold text-green-700 underline" href="mailto:info@spelectrical.co.za">info@spelectrical.co.za</a> or call <a className="font-semibold text-green-700 underline" href="tel:+27766729270">+27 76 672 9270</a>.</p>
      </PolicySection>
    </LegalPage>
  )
}
