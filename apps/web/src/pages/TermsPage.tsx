import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export const TermsPage = () => {
  return (
    <div className="min-h-screen bg-[var(--color-background)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[var(--color-primary)]"
          >
            <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
            <h1 className="text-3xl font-bold">Pamoja Chat</h1>
          </Link>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Terms and Conditions</h2>

          <div className="prose prose-slate max-w-none">
            <h3 className="text-lg font-medium mb-4">1. Introduction</h3>
            <p className="mb-4">
              Welcome to Pamoja Chat. By using our service, you agree to these
              terms. Please read them carefully.
            </p>

            <h3 className="text-lg font-medium mb-4">
              2. Privacy and Security
            </h3>
            <p className="mb-4">
              We take your privacy seriously. All messages are end-to-end
              encrypted and can only be read by the intended recipients. We
              cannot access your message contents.
            </p>

            <h3 className="text-lg font-medium mb-4">3. User Conduct</h3>
            <p className="mb-4">
              You agree to use Pamoja Chat for lawful purposes only. You will
              not:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Harass, abuse, or harm others</li>
              <li>Spread malware or viruses</li>
              <li>Attempt to gain unauthorized access</li>
              <li>Interfere with the service's operation</li>
            </ul>

            <h3 className="text-lg font-medium mb-4">
              4. Service Availability
            </h3>
            <p className="mb-4">
              While we strive for 100% uptime, we cannot guarantee uninterrupted
              service. We may occasionally need to perform maintenance or
              updates.
            </p>

            <h3 className="text-lg font-medium mb-4">
              5. Intellectual Property
            </h3>
            <p className="mb-4">
              Pamoja Chat is open source software. You may use, modify, and
              distribute it according to our license, while respecting all
              applicable copyright and trademark laws.
            </p>

            <h3 className="text-lg font-medium mb-4">6. Changes to Terms</h3>
            <p className="mb-4">
              We may update these terms from time to time. We will notify you of
              any significant changes. Continued use of Pamoja Chat constitutes
              acceptance of updated terms.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Button as={Link} to="/auth/register" variant="outline">
              Return to Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
