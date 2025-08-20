import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-900 border border-gray-100 p-2 m-2"
            >
              <span className="bg-slate-900 text-white text-xl font-bold pl-4">
                Zip<span className="bg-white text-black">Chat</span>
              </span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Privacy-first messaging with self-destructing messages, P2P mode,
              and advanced collaboration tools.
            </p>
          </div>
          <div> 
            <div className="font-semibold mb-4">Company</div>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Advanced
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="hover:text-white transition-colors"
                >
                  Creative
                </a>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-4">Features</div>
            <ul className="space-y-3 text-gray-300">
              <li>Self-Destruct</li>
              <li>P2P Mode</li>
              <li>Custom Themes</li>
              <li>Voice Rooms</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-4">Legal</div>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Zip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
