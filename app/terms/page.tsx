import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - All In AIGC',
  description: 'Terms of Service and User Agreement of All In AIGC',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Last Updated: {new Date().toLocaleDateString('en-US')}
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                1. Introduction and Acceptance
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                Welcome to All In AIGC ("we", "our", "us", or "the Company"). These Terms of Service ("Terms") govern your use of our website, products, and services (collectively, the "Services").
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                2. Service Description
              </h2>

              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6 mb-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  All In AIGC provides artificial intelligence and machine learning solutions, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mt-4">
                  <li>AI-powered content generation tools</li>
                  <li>Machine learning model development and deployment</li>
                  <li>Data analysis and processing services</li>
                  <li>Custom AI solution consulting</li>
                  <li>API access and integration services</li>
                </ul>
              </div>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any part of our Services at any time without prior notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                3. User Accounts and Registration
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-3">Account Requirements</h3>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
                    <li>• You must be at least 18 years old</li>
                    <li>• Provide accurate and complete information</li>
                    <li>• Maintain the security of your account</li>
                    <li>• Use a valid email address</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                  <h3 className="font-medium text-green-900 dark:text-green-100 mb-3">Account Responsibilities</h3>
                  <ul className="text-sm text-green-800 dark:text-green-200 space-y-2">
                    <li>• Keep your login credentials secure</li>
                    <li>• Notify us of unauthorized access</li>
                    <li>• Update your information when necessary</li>
                    <li>• Comply with all applicable laws</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mt-6">
                <h4 className="font-medium text-amber-900 dark:text-amber-100 mb-2">Important Notice</h4>
                <p className="text-amber-800 dark:text-amber-200">
                  You are responsible for all activities that occur under your account. We are not liable for any loss or damage arising from unauthorized use of your account.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                4. Acceptable Use Policy
              </h2>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                When using our Services, you agree not to:
              </p>

              <div className="space-y-4">
                <div className="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <h4 className="font-medium text-red-900 dark:text-red-100 mb-2">Prohibited Content</h4>
                  <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
                    <li>• Generate or distribute illegal, harmful, or offensive content</li>
                    <li>• Create content that violates intellectual property rights</li>
                    <li>• Produce misleading or false information</li>
                    <li>• Generate content that promotes violence or discrimination</li>
                  </ul>
                </div>

                <div className="border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100 mb-2">Technical Restrictions</h4>
                  <ul className="text-orange-800 dark:text-orange-200 text-sm space-y-1">
                    <li>• Attempt to reverse engineer our services</li>
                    <li>• Use automated tools to access our services excessively</li>
                    <li>• Interfere with or disrupt our services</li>
                    <li>• Attempt to gain unauthorized access to our systems</li>
                  </ul>
                </div>

                <div className="border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Commercial Restrictions</h4>
                  <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
                    <li>• Resell our services without explicit permission</li>
                    <li>• Use our services to compete with us</li>
                    <li>• Share your account access with unauthorized parties</li>
                    <li>• Exceed usage limits specified in your plan</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                5. Payment Terms and Billing
              </h2>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-4">Subscription Plans</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We offer various subscription plans with different features and usage limits. Pricing and plan details are available on our website and may be updated from time to time.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Free Tier</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Limited usage with basic features</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Pro Plans</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Monthly or annual billing options</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Enterprise</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Custom pricing and features</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">💳</span>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200">Payment Processing</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Payments are processed securely through third-party payment providers. We do not store your payment information.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">🔄</span>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200">Automatic Renewal</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Subscriptions automatically renew unless cancelled before the renewal date. You can cancel anytime from your account settings.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">💰</span>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200">Refund Policy</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Refunds are available within 30 days of purchase for annual plans. Monthly subscriptions are non-refundable.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                6. Intellectual Property Rights
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-3">Our Rights</h3>
                  <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                    All intellectual property rights in our Services, including software, algorithms, models, and content, belong to us or our licensors.
                  </p>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>• Proprietary AI models and algorithms</li>
                    <li>• Software and user interfaces</li>
                    <li>• Trademarks and brand assets</li>
                    <li>• Documentation and training materials</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                  <h3 className="font-medium text-green-900 dark:text-green-100 mb-3">Your Rights</h3>
                  <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                    You retain ownership of the content you input into our Services and the output generated for you.
                  </p>
                  <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                    <li>• Your input data and content</li>
                    <li>• Generated outputs for your use</li>
                    <li>• Your account information</li>
                    <li>• Commercial use rights (per plan)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mt-6">
                <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">License Grant</h4>
                <p className="text-yellow-800 dark:text-yellow-200">
                  We grant you a limited, non-exclusive, non-transferable license to use our Services in accordance with these Terms. This license terminates when your account is closed or these Terms are breached.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                7. Data Usage and Privacy
              </h2>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                Your privacy is important to us. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your data.
              </p>

              <div className="space-y-4">
                <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                  <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Data Processing</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    We may use your data to improve our services, train our models, and provide you with better results. All processing is done in accordance with applicable data protection laws.
                  </p>
                </div>

                <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                  <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Data Security</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    We implement industry-standard security measures to protect your data. However, no system is completely secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                  <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Data Retention</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    We retain your data only as long as necessary to provide our services and comply with legal obligations. You can request data deletion at any time.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                8. Disclaimers and Limitations of Liability
              </h2>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
                <h3 className="font-medium text-red-900 dark:text-red-100 mb-3">Service Disclaimers</h3>
                <p className="text-red-800 dark:text-red-200 text-sm leading-relaxed">
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or completely secure.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6">
                  <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-3">Limitation of Liability</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6">
                  <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-3">Maximum Liability</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    Our total liability to you for all claims shall not exceed the amount you paid us in the 12 months preceding the claim.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                9. Termination
              </h2>

              <div className="space-y-6">
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6">
                  <h3 className="font-medium text-slate-800 dark:text-slate-200 mb-4">Termination by You</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
                    You may terminate your account at any time by:
                  </p>
                  <ul className="text-slate-700 dark:text-slate-300 text-sm space-y-1">
                    <li>• Cancelling your subscription in account settings</li>
                    <li>• Contacting our support team</li>
                    <li>• Sending a written termination notice</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6">
                  <h3 className="font-medium text-slate-800 dark:text-slate-200 mb-4">Termination by Us</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
                    We may terminate or suspend your account if you:
                  </p>
                  <ul className="text-slate-700 dark:text-slate-300 text-sm space-y-1">
                    <li>• Violate these Terms of Service</li>
                    <li>• Engage in fraudulent or illegal activities</li>
                    <li>• Fail to pay applicable fees</li>
                    <li>• Misuse our services or harm other users</li>
                  </ul>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                  <h4 className="font-medium text-amber-900 dark:text-amber-100 mb-2">Effect of Termination</h4>
                  <p className="text-amber-800 dark:text-amber-200 text-sm">
                    Upon termination, your access to our services will cease, and we may delete your account and data in accordance with our data retention policy. Some provisions of these Terms will survive termination.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                10. Governing Law and Dispute Resolution
              </h2>

              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6">
                <h3 className="font-medium text-slate-800 dark:text-slate-200 mb-4">Governing Law</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
                </p>

                <h3 className="font-medium text-slate-800 dark:text-slate-200 mb-4">Dispute Resolution</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      <strong>Informal Resolution:</strong> We encourage you to contact us first to resolve any disputes informally.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      <strong>Mediation:</strong> If informal resolution fails, disputes may be resolved through mediation.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      <strong>Arbitration:</strong> Any remaining disputes shall be resolved through binding arbitration in accordance with UK arbitration rules.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                11. Changes to Terms
              </h2>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <p className="text-blue-800 dark:text-blue-200 leading-relaxed mb-4">
                  We reserve the right to modify these Terms at any time. When we make changes, we will:
                </p>

                <ul className="text-blue-800 dark:text-blue-200 space-y-2 text-sm">
                  <li>• Update the "Last Updated" date at the top of this page</li>
                  <li>• Notify you via email or through our service</li>
                  <li>• Post the updated Terms on our website</li>
                  <li>• For material changes, provide at least 30 days' notice</li>
                </ul>

                <p className="text-blue-800 dark:text-blue-200 leading-relaxed mt-4 text-sm">
                  Your continued use of our Services after the effective date of any changes constitutes your acceptance of the revised Terms.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                12. Contact Information
              </h2>

              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-3">Contact Details</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-slate-700 dark:text-slate-300">
                        <strong>Email:</strong> support@allinaigc.org
                      </p>
                      <p className="text-slate-700 dark:text-slate-300">
                        <strong>Address:</strong> Suite 13909 61 Bridge Street, Kington, United Kingdom, HR5 3DJ
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-3">Response Time</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-slate-700 dark:text-slate-300">
                        <strong>General Inquiries:</strong> 3-5 business days
                      </p>
                      <p className="text-slate-700 dark:text-slate-300">
                        <strong>Legal Matters:</strong> 7-10 business days
                      </p>
                      <p className="text-slate-700 dark:text-slate-300">
                        <strong>Urgent Issues:</strong> Within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center pt-8 border-t border-slate-200 dark:border-slate-600">
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                By using All In AIGC services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
