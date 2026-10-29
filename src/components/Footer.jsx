import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About US', path: '/about' },
    { name: 'Case Study', path: '/case-study' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact US', path: '/contact' }
  ];

  return (
    <footer className="border-t border-white/10 bg-[#040404] py-12 text-zinc-400">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 pb-10 border-b border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <Link to="/" className="text-xl font-bold text-white flex items-center gap-2 group">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
              <span>Shamil K.</span>
            </Link>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed font-light">
              Performance Marketer, Meta &amp; Google Ads Specialist, and AI Product Builder based in Kerala, India. Helping brands scale ad performance, fix checkout leaks, and ship fast landing pages.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Kerala, India • Working with clients in India, Oman &amp; the GCC</span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block mb-3">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-white transition-colors py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3">
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block mb-3">
              Direct Contact
            </span>
            <div className="space-y-2 text-xs">
              <a
                href="https://wa.me/918075448758?text=Hi%20Shamil,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
                <span>+91 80754 48758</span>
              </a>
              <a
                href="mailto:mhdshamil136@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>mhdshamil136@gmail.com</span>
              </a>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://github.com/N-o-o-Dev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                >
                  <FaLinkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2 font-mono">
            <span>Portfolio:</span>
            <a
              href="https://mohamed-shamil-k-portfolio.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              mohamed-shamil-k-portfolio.vercel.app
            </a>
          </div>

          <div>
            © {currentYear} Mohamed Shamil K. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

