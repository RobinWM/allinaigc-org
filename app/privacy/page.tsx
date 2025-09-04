import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - All In AIGC',
  description: 'Privacy Policy and Data Protection Statement of All In AIGC',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Last Updated: {new Date().toLocaleDateString('en-US')}
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                1. Introduction
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                Welcome to All In AIGC (referred to as &quot;we&quot;, &quot;our company&quot;, or &quot;our service&quot;). We highly value your privacy rights and are committed to protecting your personal information. This privacy policy details how we collect, use, store, and protect the information you provide when using our services.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                By using our services, you agree to the information collection and use practices described in this privacy policy. If you do not agree with any part of this policy, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                2. Information Collection
              </h2>

              <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-3">
                2.1 Types of Information We Collect
              </h3>

              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6 mb-4">
                <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Personal Information:</h4>
                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                  <li>Name, email address, phone number</li>
                  <li>Account login information</li>
                  <li>Payment information (processed through third-party payment processors)</li>
                  <li>User-generated content and preference settings</li>
                </ul>
              </div>

              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6 mb-4">
                <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Technical Information:</h4>
                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                  <li>IP address, browser type and version</li>
                  <li>Device information and operating system</li>
                  <li>Access logs and usage statistics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-3">
                2.2 Methods of Information Collection
              </h3>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
                <li><strong>Direct Collection:</strong> When you register an account, contact us, or use our services</li>
                <li><strong>Automatic Collection:</strong> Through cookies, log files, and analytics tools</li>
                <li><strong>Third-party Sources:</strong> From partners or publicly available sources</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                3. Information Usage
              </h2>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-3">Service Provision</h3>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>• Provide and maintain our services</li>
                    <li>• Process transactions and payments</li>
                    <li>• Personalize user experience</li>
                    <li>• Provide customer support</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                  <h3 className="font-medium text-green-900 dark:text-green-100 mb-3">Improvement and Analysis</h3>
                  <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                    <li>• Analyze usage patterns and trends</li>
                    <li>• Improve service features</li>
                    <li>• Develop new products and services</li>
                    <li>• Conduct research and analysis</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                  <h3 className="font-medium text-purple-900 dark:text-purple-100 mb-3">Communication</h3>
                  <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                    <li>• Send service-related notifications</li>
                    <li>• Respond to inquiries and requests</li>
                    <li>• Send marketing information (with consent)</li>
                    <li>• Provide technical support</li>
                  </ul>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
                  <h3 className="font-medium text-orange-900 dark:text-orange-100 mb-3">Security and Compliance</h3>
                  <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                    <li>• Detect and prevent fraud</li>
                    <li>• Ensure service security</li>
                    <li>• Comply with legal requirements</li>
                    <li>• Resolve disputes</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                4. Information Sharing
              </h2>

              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-6">
                <h3 className="font-medium text-amber-900 dark:text-amber-100 mb-2">Important Statement</h3>
                <p className="text-amber-800 dark:text-amber-200">
                  We do not sell, rent, or otherwise disclose your personal information to third parties, except in the following circumstances:
                </p>
              </div>

              <div className="space-y-4">
                <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                  <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Service Providers</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    Sharing with trusted third-party service providers to assist us in providing services (such as payment processing, data analysis)
                  </p>
                </div>

                <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                  <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Legal Requirements</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    When required by law or to protect our rights, property, or safety
                  </p>
                </div>

                <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                  <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Business Transfer</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    In case of merger, acquisition, or asset sale
                  </p>
                </div>

                <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                  <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">User Consent</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    Other circumstances with your explicit consent
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                5. Data Security
              </h2>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                We employ industry-standard security measures to protect your personal information:
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">🔒</span>
                  </div>
                  <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Encrypted Transmission</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Using SSL/TLS encryption to protect data transmission
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">🛡️</span>
                  </div>
                  <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Access Control</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Strictly limiting access permissions to personal data
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">🔐</span>
                  </div>
                  <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Secure Storage</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Storing data in secure server environments
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                6. Your Rights
              </h2>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                Under applicable data protection laws, you have the following rights:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200">Right of Access</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Request a copy of the personal information we hold about you</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200">Right of Rectification</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Request correction of inaccurate or incomplete personal information</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200">Right of Erasure</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Request deletion of your personal information in certain circumstances</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200">Right to Restrict Processing</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Limit our processing of your personal information in specific circumstances</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200">Right to Data Portability</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Receive your personal information in a structured, commonly used, machine-readable format</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="flex-shrink-0 w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200">Right to Object</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Object to data processing based on legitimate interests or direct marketing purposes</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                7. Cookies and Tracking Technologies
              </h2>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                We use cookies and similar technologies to improve your user experience. Types of cookies include:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-700">
                      <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left">Cookie Type</th>
                      <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left">Purpose</th>
                      <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Essential Cookies</td>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Required for basic website functionality</td>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Session duration</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Functional Cookies</td>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Remember user preferences and settings</td>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Analytics Cookies</td>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Understand website usage</td>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">2 years</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-medium">Marketing Cookies</td>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Provide relevant advertising and marketing content</td>
                      <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                You can manage cookie preferences through your browser settings. Please note that disabling certain cookies may affect website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                8. Data Retention
              </h2>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  We retain your personal information only for as long as necessary:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span className="text-slate-700 dark:text-slate-300"><strong>Account Information:</strong> During the validity period of your account, or as required by law</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span className="text-slate-700 dark:text-slate-300"><strong>Transaction Records:</strong> Retained for 7 years according to tax and accounting requirements</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                    <span className="text-slate-700 dark:text-slate-300"><strong>Marketing Information:</strong> Until you unsubscribe or request deletion</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    <span className="text-slate-700 dark:text-slate-300"><strong>Log Data:</strong> Typically retained for 12 months</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                9. International Data Transfers
              </h2>

              <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Your personal information may be transferred to and maintained on computers located outside your country/region. We ensure your data protection through the following methods:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Adequacy Decisions</h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      Transfer data only to countries with adequate data protection levels
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Standard Contractual Clauses</h4>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      Sign standard contractual clauses with data recipients
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                10. Children&apos;s Privacy
              </h2>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <p className="text-yellow-800 dark:text-yellow-200 leading-relaxed">
                  Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we discover that we have collected personal information from a child under 13, we will immediately delete such information. If you are a parent or guardian and you know that your child has provided us with personal information, please contact us.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                11. Policy Updates
              </h2>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                We may update this privacy policy from time to time. When we make changes, we will:
              </p>

              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
                <li>Post the updated privacy policy on this page</li>
                <li>Update the &quot;Last Updated&quot; date at the top of the page</li>
                <li>For significant changes, we will notify you via email or website notification</li>
                <li>In some cases, we may request your explicit consent</li>
              </ul>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                We recommend that you review this privacy policy regularly to stay informed of any changes. Changes become effective immediately upon posting to this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                12. Contact Us
              </h2>

              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  If you have any questions, comments, or requests regarding this privacy policy, please contact us through the following methods:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-3">Contact Information</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-slate-700 dark:text-slate-300">
                        <strong>Email:</strong> support@allinaigc.org
                      </p>
                      <p className="text-slate-700 dark:text-slate-300">
                        <strong>Address:</strong> Suite 13909 61 Bridge Street ,Kington, United Kingdom, HR5 3DJ
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-3">Response Time</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-slate-700 dark:text-slate-300">
                        <strong>General Inquiries:</strong> Reply within 3 business days
                      </p>
                      <p className="text-slate-700 dark:text-slate-300">
                        <strong>Rights Requests:</strong> Processed within 30 days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center pt-8 border-t border-slate-200 dark:border-slate-600">
              <p className="text-slate-600 dark:text-slate-400">
                Thank you for trusting All In AIGC. We are committed to protecting your privacy and handling your personal information responsibly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}