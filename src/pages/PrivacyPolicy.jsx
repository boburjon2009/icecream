import React from "react";

// PrivacyPolicy.jsx
// Tailwind-based React component. Place this file in src/components/PrivacyPolicy.jsx
// Usage: import PrivacyPolicy from './components/PrivacyPolicy'; then render <PrivacyPolicy /> in your App.

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50  flex items-start justify-center py-16 px-1">
      <article className="max-w-7xl w-full bg-white shadow-sm rounded-md p-8 sm:p-12">
        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-500">
            Protecting your privacy is important to us. This Privacy Policy outlines how we collect, use,
            and disclose personal information when you use our website.
          </p>
        </header>

        <section className="space-y-6 text-gray-700 text-sm leading-relaxed">
          <div>
            <h2 className="font-medium text-gray-900">1. Information We Collect:</h2>
            <p className="mt-2">
              We collect personal information such as your name, email address, and payment details when you
              create an account or make a purchase. We also collect usage data such as IP address, browser
              type, and pages visited.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-gray-900">2. How We Use Your Information:</h2>
            <p className="mt-2">
              We use your personal information to provide and improve our services. Your information may also be
              used for communication purposes, such as sending newsletters or updates.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-gray-900">3. Information Sharing:</h2>
            <p className="mt-2">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your
              consent. We may share your information with trusted third-party service providers who assist us in
              operating our website.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-gray-900">4. Security:</h2>
            <p className="mt-2">
              We implement security measures to protect your personal information against unauthorized access or
              alteration. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-gray-900">5. Your Choices:</h2>
            <p className="mt-2">
              You have the right to access, update, or delete your personal information at any time. You can opt out
              of receiving promotional emails by following the instructions provided in the email. By using our
              website, you consent to the terms of this Privacy Policy. If you have any questions or concerns,
              please contact us.
            </p>
          </div>
        </section>

        <footer className="mt-8 text-xs text-gray-400">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </footer>
      </article>
    </div>
  );
}
