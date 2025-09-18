import React from "react";

// TermsAndConditions.jsx
// Tailwind-based React component. Place this file in src/components/TermsAndConditions.jsx
// Usage: import TermsAndConditions from './components/TermsAndConditions'; then render <TermsAndConditions /> in your App.

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-16 px-6">
      <article className="max-w-7xl w-full bg-white shadow-sm rounded-md p-8 sm:p-12">
        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Terms and Conditions</h1>
          <p className="mt-2 text-sm text-gray-500">
            Welcome to [Your Online Education Platform]! Before accessing or using our website, please read these Terms
            and Conditions carefully. By accessing or using any part of the site, you agree to be bound by these Terms
            and Conditions.
          </p>
        </header>

        <section className="space-y-6 text-gray-700 text-sm leading-relaxed">
          <div>
            <h2 className="font-medium text-gray-900">1. Use of Website:</h2>
            <p className="mt-2">
              Your use of our website is subject to these Terms and Conditions. You must be at least 18 years old to use
              our services.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-gray-900">2. User Account:</h2>
            <p className="mt-2">
              You are responsible for maintaining the confidentiality of your account and password. You agree to provide
              accurate and complete information when creating an account.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-gray-900">3. Intellectual Property:</h2>
            <p className="mt-2">
              All content on this website, including text, graphics, logos, and images, is the property of [Your Online
              Education Platform] and protected by copyright laws. You may not reproduce, distribute, or transmit any
              content without prior written consent.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-gray-900">4. Payment and Billing:</h2>
            <p className="mt-2">
              Payment for our services is required in advance. All fees are non-refundable.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-gray-900">5. Termination:</h2>
            <p className="mt-2">
              We reserve the right to suspend or terminate your account at any time for violation of these Terms and
              Conditions. Please review our full Terms and Conditions for more detailed information. You have the right
              to access, update, or delete your personal information at any time. You can opt out of receiving
              promotional emails by following the instructions provided in the email. By using our website, you consent
              to the terms of this Privacy Policy. If you have any questions or concerns, please contact us.
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