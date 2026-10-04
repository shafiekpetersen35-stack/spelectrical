import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-gray-800">
          <div>
            <div className="relative aspect-[3/1] w-full max-w-xs overflow-hidden rounded mb-4">
              <Image
                src="/sp-electrical-logo-footer.png"
                alt="SP Electrical Services — Trusted Expertise"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-contain"
              />
            </div>
            <p className="text-sm">
              TRUSTED EXPERTISE. Domestic and commercial electrical services covering new installations,
              rewiring, maintenance, COCs, solar and backup power systems, and SSEG registration assistance.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-primary transition-colors">Credentials</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-primary transition-colors">New Installations</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Rewiring & Maintenance</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Solar & Backup Systems</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">COCs & Certifications</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">SSEG Registrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>Shafiek Petersen</li>
              <li>Phone: +27 76 672 9270</li>
              <li>Email: shafiek@spelectrical.co.za</li>
              <li>Website: <a href="https://www.spelectrical.co.za" className="hover:text-primary transition-colors">www.spelectrical.co.za</a></li>
              <li>WhatsApp: +27 76 672 9270</li>
              <li>DOL Licensed</li>
              <li>ECA (SA) Member</li>
              <li>Registered Electrical Contractor</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm">
          <p>&copy; 2026 SP Electrical Services (Pty) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
