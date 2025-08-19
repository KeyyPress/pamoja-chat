import { Link } from "react-router-dom";

const Section = ({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => (
  <section id={id} className={`w-full ${className}`}>
    {children}
  </section>
);

const PhoneMock = ({
  className = "",
  caption,
  children,
}: {
  className?: string;
  caption?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={`relative mx-auto h-[540px] w-[270px] rounded-[45px] bg-gray-900 shadow-2xl ring-1 ring-gray-800 ${className}`}
  >
    {/* Dynamic Island */}
    <div className="absolute left-1/2 top-2 -translate-x-1/2 h-6 w-32 rounded-full bg-black" />

    {/* Screen */}
    <div className="absolute inset-x-2 bottom-2 top-10 rounded-[35px] bg-white overflow-hidden shadow-inner">
      {children || (
        <div className="h-full w-full bg-white">
          {/* Default chat interface mockup */}
          <div className="bg-slate-900 text-white p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500" />
            <div className="text-sm font-medium">Secure Chat</div>
            <div className="ml-auto">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
          <div className="p-4 space-y-3 bg-gray-50">
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm max-w-[200px] shadow-sm">
                Messages are end-to-end encrypted
              </div>
            </div>
            <div className="flex">
              <div className="bg-white px-4 py-2 rounded-2xl text-sm max-w-[200px] shadow-sm border">
                Perfect! Privacy first
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm max-w-[200px] shadow-sm">
                Zero-knowledge encryption active
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

    {caption && (
      <div className="absolute -bottom-10 w-full text-center text-sm text-gray-600 font-medium">
        {caption}
      </div>
    )}
  </div>
);

const AppStoreIcon = ({ className = "" }) => (
  <svg
    className={`w-5 h-5 ${className}`}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GooglePlayIcon = ({ className = "" }) => (
  <svg
    className={`w-5 h-5 ${className}`}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
);

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 border-b border-gray-100">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-900">
          <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center">
            <span className="text-white font-bold text-sm">Z</span>
          </div>
          <span className="text-xl font-bold">Zip</span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-gray-600 md:flex">
          <a
            className="hover:text-slate-900 transition-colors"
            href="#features"
          >
            Features
          </a>
          <a
            className="hover:text-slate-900 transition-colors"
            href="#services"
          >
            Advanced
          </a>
          <a
            className="hover:text-slate-900 transition-colors"
            href="#community"
          >
            Creative
          </a>
          <Link className="hover:text-slate-900 transition-colors" to="/terms">
            Terms
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            to="/auth/login"
            className="hidden text-sm font-medium text-gray-600 hover:text-slate-900 transition-colors md:inline"
          >
            Login
          </Link>
          <Link
            to="/auth/register"
            className="rounded-xl bg-slate-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-colors"
          >
            Sign up
          </Link>
        </div>
      </header>

      {/* Hero */}
      <Section className="mx-auto max-w-7xl px-6 pt-16 pb-20">
        <div className="text-center">
          <h1 className="mx-auto max-w-4xl text-6xl font-bold leading-tight text-slate-900 md:text-7xl tracking-tight">
            Privacy-first
            <br />
            <span className="text-slate-600">messaging</span>
          </h1>
          <p className="mx-auto max-w-2xl mt-6 text-xl text-gray-600 leading-relaxed">
            Secure conversations with self-destructing messages, P2P mode, and
            zero-knowledge encryption.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              className="flex items-center gap-3 rounded-2xl bg-black px-8 py-4 text-sm font-medium text-white shadow-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              href="#"
            >
              <AppStoreIcon />
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
            <a
              className="flex items-center gap-3 rounded-2xl bg-black px-8 py-4 text-sm font-medium text-white shadow-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              href="#"
            >
              <GooglePlayIcon />
              <div className="text-left">
                <div className="text-xs text-gray-300">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
          <div className="mt-20 flex items-end justify-center gap-8">
            <PhoneMock className="transform -rotate-12 opacity-80">
              <div className="h-full w-full bg-gray-50">
                <div className="bg-slate-800 text-white p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500" />
                  <div className="text-sm font-medium">Team Chat</div>
                  <div className="ml-auto text-xs text-gray-300">4 online</div>
                </div>
                <div className="p-3 space-y-3 text-xs">
                  <div className="text-center text-gray-400 text-[10px] mb-4">
                    Today 2:45 PM
                  </div>
                  <div className="flex">
                    <div className="bg-white px-3 py-2 rounded-2xl max-w-[140px] shadow-sm border">
                      <div className="text-[10px] text-purple-600 font-medium mb-1">
                        Sarah
                      </div>
                      <div>Meeting starts in 5 minutes</div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white px-3 py-2 rounded-2xl max-w-[140px] shadow-sm">
                      On my way!
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-white px-3 py-2 rounded-2xl max-w-[140px] shadow-sm border">
                      <div className="text-[10px] text-green-600 font-medium mb-1">
                        Mike
                      </div>
                      <div>Already here 👍</div>
                    </div>
                  </div>
                </div>
              </div>
            </PhoneMock>
            <PhoneMock className="z-10 scale-110">
              <div className="h-full w-full bg-white">
                <div className="bg-slate-900 text-white p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500" />
                  <div className="text-sm font-medium">Alex</div>
                  <div className="ml-auto flex items-center gap-2">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="p-3 space-y-3 text-xs bg-gray-50">
                  <div className="text-center text-gray-400 text-[10px] mb-4">
                    Today 2:45 PM
                  </div>
                  <div className="flex">
                    <div className="bg-white px-3 py-2 rounded-2xl max-w-[140px] shadow-sm border">
                      Want to try the self-destruct feature?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white px-3 py-2 rounded-2xl max-w-[140px] shadow-sm">
                      Sure! Set it to 30 seconds
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-red-50 border border-red-200 px-3 py-2 rounded-2xl max-w-[140px] relative">
                      <div className="text-red-600 text-[10px] mb-1 flex items-center gap-1">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83z" />
                        </svg>
                        Self-destructing in 10s
                      </div>
                      <div className="text-red-700">
                        This message will disappear!
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-[8px] animate-pulse">
                        10
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white px-3 py-2 rounded-2xl max-w-[140px] shadow-sm">
                      Love the privacy! 🚀
                    </div>
                  </div>
                </div>
              </div>
            </PhoneMock>
            <PhoneMock className="transform rotate-12 opacity-80">
              <div className="h-full w-full bg-white">
                <div className="bg-indigo-600 text-white p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium">VIP Group</div>
                  <div className="ml-auto text-xs bg-yellow-400 text-indigo-600 px-2 py-0.5 rounded-full font-medium">
                    Premium
                  </div>
                </div>
                <div className="p-3 space-y-2 text-xs">
                  <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-2">
                    <div className="text-[10px] font-medium text-indigo-700 mb-1 flex items-center gap-1">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      Quick Poll
                    </div>
                    <div className="text-[10px] text-indigo-600 mb-2">
                      Weekend plans?
                    </div>
                    <div className="space-y-1">
                      <div className="bg-blue-100 rounded px-2 py-1 text-[9px] flex justify-between">
                        <span>🏖️ Beach</span>
                        <span className="font-medium">65%</span>
                      </div>
                      <div className="bg-green-100 rounded px-2 py-1 text-[9px] flex justify-between">
                        <span>🏔️ Mountains</span>
                        <span className="font-medium">35%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PhoneMock>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section id="features" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Explore Zip's Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced privacy tools, smart engagement features, and creative
              expression options
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Privacy & Security",
                desc: "Self-destructing messages, metadata stripping, and P2P mode for ultimate privacy. Your conversations disappear on your terms.",
                icon: (
                  <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                ),
              },
              {
                title: "Smart Engagement",
                desc: "Threaded conversations, voice-to-text, inline polls, and shared spaces. Chat like never before with rich interactions.",
                icon: (
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                ),
              },
              {
                title: "Creative Expression",
                desc: "Custom themes per chat, animated reactions, collaborative notes, and built-in mini-apps for seamless productivity.",
                icon: (
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                      />
                    </svg>
                  </div>
                ),
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                {feature.icon}
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Advanced Features */}
      <Section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <h3 className="text-4xl font-bold mb-6">Advanced Features</h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Powerful tools that make Zip the most advanced privacy-focused
              messenger available today.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                {
                  icon: (
                    <svg
                      className="w-6 h-6 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  ),
                  title: "Self-Destruct",
                  desc: "Messages disappear automatically",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                  title: "Metadata Strip",
                  desc: "Remove location & device info",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                      />
                    </svg>
                  ),
                  title: "P2P Mode",
                  desc: "Direct connection bypass",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  ),
                  title: "Voice Rooms",
                  desc: "Group audio conversations",
                },
              ].map((service) => (
                <div key={service.title} className="group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center mb-4 transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">{service.desc}</p>
                  <button className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors flex items-center gap-1">
                    Learn more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <PhoneMock>
              <div className="h-full w-full bg-white">
                <div className="bg-slate-900 text-white p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500" />
                  <div className="text-sm font-medium">Jordan</div>
                  <div className="ml-auto text-xs bg-red-500 px-2 py-1 rounded-full font-medium">
                    P2P
                  </div>
                </div>
                <div className="p-3 space-y-3 text-xs bg-gray-50">
                  <div className="text-center text-gray-400 text-[10px] mb-4">
                    Now - Direct Connection
                  </div>
                  <div className="flex">
                    <div className="bg-white px-3 py-2 rounded-2xl max-w-[140px] shadow-sm border">
                      Switched to P2P mode for this conversation
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white px-3 py-2 rounded-2xl max-w-[140px] shadow-sm">
                      Perfect! No servers = max privacy
                    </div>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-2">
                    <div className="text-[10px] font-medium text-orange-700 mb-2 flex items-center gap-1">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                      Voice Room Active
                    </div>
                    <div className="text-[10px] text-orange-600 mb-2">
                      3 people listening
                    </div>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-blue-500 rounded-full text-[8px] flex items-center justify-center text-white font-medium">
                        A
                      </div>
                      <div className="w-4 h-4 bg-green-500 rounded-full text-[8px] flex items-center justify-center text-white font-medium">
                        M
                      </div>
                      <div className="w-4 h-4 bg-purple-500 rounded-full text-[8px] flex items-center justify-center text-white font-medium">
                        J
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PhoneMock>
          </div>
        </div>
      </Section>

      {/* Collaboration & Productivity */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <PhoneMock>
              <div className="h-full w-full bg-white">
                <div className="bg-slate-900 text-white p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm font-medium">Project Team</div>
                  <div className="ml-auto text-xs bg-yellow-400 text-slate-900 px-2 py-1 rounded-full font-medium">
                    Notes
                  </div>
                </div>
                <div className="p-3 space-y-3 text-xs bg-gray-50">
                  <div className="text-center text-gray-400 text-[10px] mb-4">
                    Today 3:15 PM
                  </div>
                  <div className="flex">
                    <div className="bg-white px-3 py-2 rounded-2xl max-w-[140px] shadow-sm border">
                      Let's collaborate on the design mockups
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white px-3 py-2 rounded-2xl max-w-[140px] shadow-sm">
                      Added to shared notes! ✓
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
                    <div className="text-[10px] font-medium text-blue-700 mb-2 flex items-center gap-1">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Shared Notes
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] text-blue-600">
                        • Design review - Friday
                      </div>
                      <div className="text-[10px] text-blue-600">
                        • Color palette finalized
                      </div>
                      <div className="text-[10px] text-blue-600">
                        • Mockups in progress
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-2">
                    <div className="text-[10px] font-medium text-green-700 mb-2 flex items-center gap-1">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                      Task List
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] text-green-600 flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Coffee for team meeting
                      </div>
                      <div className="text-[10px] text-green-600 flex items-center gap-1">
                        <div className="w-2 h-2 border border-green-500 rounded-full"></div>
                        Review wireframes
                      </div>
                      <div className="text-[10px] text-green-600 flex items-center gap-1">
                        <div className="w-2 h-2 border border-green-500 rounded-full"></div>
                        Update timeline
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PhoneMock>
            <div className="space-y-8">
              <h3 className="text-4xl font-bold">Collaboration Made Simple</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Built-in productivity tools that turn every chat into a
                workspace. Share notes, create polls, manage tasks, and stay
                organized.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    ),
                    name: "Collaborative Notes",
                    desc: "Real-time shared documents",
                    badge: "Live",
                    badgeColor: "bg-green-100 text-green-800",
                  },
                  {
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    ),
                    name: "Shared Lists",
                    desc: "Shopping, tasks, and todos",
                    badge: "Popular",
                    badgeColor: "bg-blue-100 text-blue-800",
                  },
                  {
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    ),
                    name: "Mini-Apps",
                    desc: "Currency converter, polls, timers",
                    badge: "Built-in",
                    badgeColor: "bg-purple-100 text-purple-800",
                  },
                ].map((feature) => (
                  <div
                    key={feature.name}
                    className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600">
                        {feature.icon}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          {feature.name}
                        </div>
                        <div className="text-gray-600">{feature.desc}</div>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${feature.badgeColor}`}
                    >
                      {feature.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Creative Features */}
      <Section id="community" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6">
            Express Yourself Creatively
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every chat can have its own personality. Customize themes, add
            reactions, and make conversations uniquely yours.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <PhoneMock className="scale-75">
              <div className="h-full w-full bg-white">
                <div className="bg-purple-600 text-white p-3">
                  <div className="text-sm font-medium text-center">
                    Custom Theme
                  </div>
                </div>
                <div className="p-3 bg-purple-50">
                  <div className="space-y-3 text-xs">
                    <div className="flex">
                      <div className="bg-purple-100 border border-purple-200 px-3 py-2 rounded-2xl max-w-[120px] shadow-sm">
                        Love this purple theme!
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-purple-600 text-white px-3 py-2 rounded-2xl max-w-[120px] shadow-sm">
                        Each chat has its own vibe ✨
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-purple-100 border border-purple-200 px-3 py-2 rounded-2xl max-w-[120px] relative shadow-sm">
                        So cool!
                        <div className="absolute -top-1 -right-1 text-lg animate-bounce">
                          🎉
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PhoneMock>
            <div className="mt-6">
              <div className="font-bold text-lg text-gray-900">
                Custom Themes
              </div>
              <p className="text-gray-600 mt-2">
                Personalize every conversation with unique colors and styles.
              </p>
            </div>
          </div>

          <div className="text-center">
            <PhoneMock className="scale-75">
              <div className="h-full w-full bg-white">
                <div className="bg-slate-900 text-white p-3">
                  <div className="text-sm font-medium text-center">
                    Media Spaces
                  </div>
                </div>
                <div className="p-3">
                  <div className="grid grid-cols-3 gap-1 mb-3">
                    <div className="aspect-square bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg"></div>
                    <div className="aspect-square bg-gradient-to-br from-green-200 to-green-300 rounded-lg"></div>
                    <div className="aspect-square bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg"></div>
                    <div className="aspect-square bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg"></div>
                    <div className="aspect-square bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg"></div>
                    <div className="aspect-square bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg flex items-center justify-center text-xs font-bold">
                      +12
                    </div>
                  </div>
                  <div className="text-[10px] text-gray-500 text-center font-medium">
                    Live collage of shared memories
                  </div>
                </div>
              </div>
            </PhoneMock>
            <div className="mt-6">
              <div className="font-bold text-lg text-gray-900">
                Media Spaces
              </div>
              <p className="text-gray-600 mt-2">
                Group media boards that form beautiful live collages.
              </p>
            </div>
          </div>

          <div className="text-center">
            <PhoneMock className="scale-75">
              <div className="h-full w-full bg-white">
                <div className="bg-slate-900 text-white p-3">
                  <div className="text-sm font-medium text-center">
                    Smart Features
                  </div>
                </div>
                <div className="p-3 space-y-3 text-xs bg-gray-50">
                  <div className="flex">
                    <div className="bg-white px-3 py-2 rounded-2xl max-w-[130px] shadow-sm border">
                      <div className="flex items-center gap-1 mb-1">
                        <svg
                          className="w-3 h-3 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                        <span className="text-[9px] text-blue-600 font-medium">
                          Voice → Text
                        </span>
                      </div>
                      <div>"Hey there, how are you?"</div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white px-3 py-2 rounded-2xl max-w-[130px] shadow-sm">
                      <div className="flex items-center gap-1 mb-1">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                        </svg>
                        <span className="text-[9px] text-blue-200 font-medium">
                          Text → Voice
                        </span>
                      </div>
                      <div>I'm great!</div>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
                    <div className="text-[10px] font-medium text-blue-700 flex items-center gap-1">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      Live Location
                    </div>
                    <div className="text-[9px] text-blue-600 mt-1">
                      Expires in 30 min
                    </div>
                  </div>
                </div>
              </div>
            </PhoneMock>
            <div className="mt-6">
              <div className="font-bold text-lg text-gray-900">
                Smart Features
              </div>
              <p className="text-gray-600 mt-2">
                Voice-to-text, live location, and seamless interactions.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h3 className="text-5xl font-bold leading-tight mb-6">
                Download now and start chatting securely
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of users who trust Zip for private, secure
                messaging with advanced features.
              </p>
              <div className="flex items-center gap-4">
                <a
                  className="flex items-center gap-3 rounded-2xl bg-white text-black px-8 py-4 text-sm font-medium shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105"
                  href="#"
                >
                  <AppStoreIcon className="text-black" />
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl bg-white text-black px-8 py-4 text-sm font-medium shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105"
                  href="#"
                >
                  <GooglePlayIcon className="text-black" />
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <PhoneMock>
                <div className="h-full w-full bg-white">
                  <div className="bg-slate-900 text-white p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">Z</span>
                    </div>
                    <div className="text-sm font-medium">Get Started</div>
                    <div className="ml-auto text-xs bg-green-500 px-2 py-1 rounded-full font-medium">
                      Ready
                    </div>
                  </div>
                  <div className="p-8 text-center">
                    <div className="bg-gray-50 rounded-3xl p-8">
                      <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-2xl">Z</span>
                      </div>
                      <div className="text-2xl font-bold text-slate-900 mb-2">
                        Zip
                      </div>
                      <div className="text-sm text-gray-600 mb-6">
                        Privacy-First • Self-Destruct • P2P
                      </div>
                      <button className="bg-slate-900 text-white px-8 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </PhoneMock>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-sm">Z</span>
                </div>
                <span className="text-xl font-bold">Zip</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Privacy-first messaging with self-destructing messages, P2P
                mode, and advanced collaboration tools.
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
    </div>
  );
};

export default LandingPage;
