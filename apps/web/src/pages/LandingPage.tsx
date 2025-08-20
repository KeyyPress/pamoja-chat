import {
  LockDoodle,
  ShieldDoodle,
  MessageDoodle,
  StarDoodle,
  VoiceDoodle,
  NoteDoodle,
  CheckDoodle,
} from "../components/Doodles";
import Navbar from "../components/shared/Navbar";
import AppStoreIcon from "../components/AppStoreIcon";
import GooglePlayIcon from "../components/GooglePlayIcon";
import Footer from "../components/shared/Footer";
import PhoneMock from "../components/shared/PhoneMock";
import Section from "../components/shared/Section";

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <Navbar showSections={true} />

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
              className="flex items-center gap-3 rounded-2xl bg-green-500 px-8 py-4 text-sm font-medium text-white shadow-lg hover:bg-green-600 transition-all duration-200 hover:scale-105"
              href="#"
            >
              <GooglePlayIcon />
              <div className="text-left">
                <div className="text-xs text-gray-100">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
          <div className="mt-20 flex items-end justify-center gap-8">
            <PhoneMock className="transform -rotate-12 opacity-80"></PhoneMock>
            <PhoneMock className="z-10 scale-125"></PhoneMock>
            <PhoneMock className="transform rotate-12 opacity-80"></PhoneMock>
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
                  <div className="w-16 h-16 flex items-center justify-center mb-4">
                    <ShieldDoodle className="scale-[200%]" />
                  </div>
                ),
              },
              {
                title: "Smart Engagement",
                desc: "Threaded conversations, voice-to-text, inline polls, and shared spaces. Chat like never before with rich interactions.",
                icon: (
                  <div className="w-16 h-16 flex items-center justify-center mb-4">
                    <MessageDoodle className="scale-[200%]" />
                  </div>
                ),
              },
              {
                title: "Creative Expression",
                desc: "Custom themes per chat, animated reactions, collaborative notes, and built-in mini-apps for seamless productivity.",
                icon: (
                  <div className="w-16 h-16 flex items-center justify-center mb-4">
                    <StarDoodle className="scale-[500%]" />
                  </div>
                ),
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
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
                  icon: <ShieldDoodle className="scale-[200%]" />,
                  title: "Self-Destruct",
                  desc: "Messages disappear automatically",
                },
                {
                  icon: <LockDoodle className="scale-[200%]" />,
                  title: "Metadata Strip",
                  desc: "Remove location & device info",
                },
                {
                  icon: <VoiceDoodle className="scale-[200%]" />,
                  title: "P2P Mode",
                  desc: "Direct connection bypass",
                },
                {
                  icon: <NoteDoodle className="scale-[200%]" />,
                  title: "Voice Rooms",
                  desc: "Group audio conversations",
                },
              ].map((service) => (
                <div key={service.title} className="group cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center mb-4 transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">{service.desc}</p>
                  <button className="text-sm font-medium text-green-600 group-hover:text-green-700 transition-colors flex items-center gap-1">
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
            <PhoneMock></PhoneMock>
          </div>
        </div>
      </Section>

      {/* Collaboration & Productivity */}
      <Section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <PhoneMock />
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
                    icon: <NoteDoodle className="scale-[100%]" />,
                    name: "Collaborative Notes",
                    desc: "Real-time shared documents",
                  },
                  {
                    icon: <CheckDoodle className="scale-[100%]" />,
                    name: "Shared Lists",
                    desc: "Shopping, tasks, and todos",
                  },
                  {
                    icon: <StarDoodle className="scale-[300%]" />,
                    name: "Mini-Apps",
                    desc: "Currency converter, polls, timers",
                  },
                ].map((feature) => (
                  <div
                    key={feature.name}
                    className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center text-gray-600">
                        {feature.icon}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          {feature.name}
                        </div>
                        <div className="text-gray-600">{feature.desc}</div>
                      </div>
                    </div>
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
            <PhoneMock className="scale-75" />
          </div>

          <div className="text-center">
            <PhoneMock className="scale-75" />
          </div>

          <div className="text-center">
            <PhoneMock className="scale-75" />
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
                  className="flex items-center gap-3 rounded-2xl bg-green-500 text-white px-8 py-4 text-sm font-medium shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105"
                  href="#"
                >
                  <GooglePlayIcon className="text-white" />
                  <div className="text-left">
                    <div className="text-xs text-gray-100">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <PhoneMock />
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
