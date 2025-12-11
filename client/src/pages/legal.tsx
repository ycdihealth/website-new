import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useLocation } from "wouter";

export default function LegalPage() {
  const [location] = useLocation();
  
  const getTitle = () => {
    if (location.includes("privacy")) return "Privacy Policy";
    if (location.includes("disclaimer")) return "Disclaimer";
    return "Legal";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container px-4 md:px-8 max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl font-bold mb-8">{getTitle()}</h1>
          
          <div className="prose prose-stone max-w-none">
            {location.includes("privacy") && (
              <>
                <p className="text-sm text-muted-foreground mb-6">Last Updated: 12/10/25</p>
                
                <h3 className="text-xl font-bold mt-8 mb-4">1. Introduction</h3>
                <p>
                  You Can Do It Health Coaching (“I,” “me,” “my,” or “the business”) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and safeguarded when you visit this website, sign up for emails, or participate in coaching services.
                </p>
                <p>
                  By using this website, you consent to the practices described in this Privacy Policy.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">2. Information I Collect</h3>
                <h4 className="font-bold mt-4 mb-2">a. Information You Provide Directly</h4>
                <p>You may voluntarily provide personal information when you:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Sign up for a newsletter or download</li>
                  <li>Book a discovery call</li>
                  <li>Fill out a contact form</li>
                  <li>Purchase coaching services</li>
                  <li>Participate in coaching or submit assessments</li>
                </ul>
                <p>This information may include:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Payment information (processed securely through third-party services)</li>
                  <li>Health and lifestyle information you choose to share during coaching</li>
                  <li>Any other information you voluntarily submit</li>
                </ul>

                <h4 className="font-bold mt-4 mb-2">b. Information Collected Automatically</h4>
                <p>When you visit the website, certain information may be automatically collected, including:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Referral source</li>
                  <li>Pages viewed and time spent on the site</li>
                  <li>Cookies or similar tracking technologies</li>
                </ul>
                <p>This data helps improve website performance and user experience.</p>

                <h3 className="text-xl font-bold mt-8 mb-4">3. How Your Information Is Used</h3>
                <p>I may use your information to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Provide and personalize coaching services</li>
                  <li>Process payments and manage billing</li>
                  <li>Send newsletters, updates, and relevant content</li>
                  <li>Respond to inquiries or support requests</li>
                  <li>Improve website functionality and user experience</li>
                  <li>Analyze trends and website usage</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4">4. Email Communications</h3>
                <p>
                  If you subscribe to my email list, you may receive updates, educational content, promotions, or program announcements. You can unsubscribe at any time using the link at the bottom of any email.
                </p>
                <p>
                  I do not sell, rent, or share your email address with third parties for marketing purposes.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">5. Sharing of Information</h3>
                <p>
                  I do not sell your personal information. Your information may be shared only in the following situations:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li><strong>Service Providers:</strong> For example, scheduling software, email marketing tools, or payment processors. These providers only access what they need to perform services on my behalf and are required to protect your information.</li>
                  <li><strong>Legal Compliance:</strong> If required by law, subpoena, or court order.</li>
                  <li><strong>Business Operations:</strong> If necessary to protect the rights, safety, or integrity of the business.</li>
                </ul>
                <p>
                  I will never share your health-related information without your explicit permission unless legally required.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">6. Cookies & Tracking Technologies</h3>
                <p>This website may use cookies, pixels, and similar technologies to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Improve website speed</li>
                  <li>Analyze traffic</li>
                  <li>Customize user experience</li>
                </ul>
                <p>
                  You can disable cookies in your browser settings, though some site features may not function optimally.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">7. Data Security</h3>
                <p>
                  I take reasonable measures to protect your personal information from unauthorized access or disclosure. However, no system is completely secure, and I cannot guarantee absolute security of your data.
                </p>
                <p>
                  Sensitive payment data is handled only through secure third-party payment processors.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">8. Children’s Privacy</h3>
                <p>
                  This website and coaching services are not intended for individuals under the age of 18. I do not knowingly collect personal information from minors.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">9. Your Rights</h3>
                <p>Depending on your location, you may have rights regarding your personal data, including the right to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Access the information I hold about you</li>
                  <li>Correct or update your information</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent</li>
                  <li>Opt out of email marketing</li>
                  <li>Limit certain data uses</li>
                </ul>
                <p>To exercise any of these rights, contact me at: <a href="mailto:youcandoithealth@gmail.com" className="text-primary hover:underline">youcandoithealth@gmail.com</a></p>

                <h3 className="text-xl font-bold mt-8 mb-4">10. Third-Party Links</h3>
                <p>
                  The website may contain links to external sites. I am not responsible for the content or privacy practices of those sites. Please review their privacy policies separately.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">11. Changes to This Policy</h3>
                <p>
                  This Privacy Policy may be updated from time to time. Changes will be posted on this page with the updated date. Continued use of the website after changes means you accept the revised policy.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">12. Contact Information</h3>
                <p>
                  If you have questions about this Privacy Policy or how your information is handled, you can contact:
                </p>
                <div className="bg-secondary/20 p-6 rounded-lg mt-4">
                  <p className="font-bold">You Can Do It Health Coaching</p>
                  <p><strong>Owner:</strong> Andrea Tucker (Sole Proprietor)</p>
                  <p><strong>Location:</strong> San Diego, CA</p>
                  <p><strong>Email:</strong> <a href="mailto:youcandoithealth@gmail.com" className="text-primary hover:underline">youcandoithealth@gmail.com</a></p>
                </div>
              </>
            )}

            {location.includes("disclaimer") && (
              <>
                <p className="font-bold text-lg mb-4">You Can Do It Health Coaching (Sole Proprietor)</p>
                
                <h3 className="text-xl font-bold mt-8 mb-4">1. Educational & Informational Purposes Only</h3>
                <p>
                  The content on this website, including any blog posts, guides, emails, downloadable materials, programs, or coaching services, is provided by You Can Do It Health Coaching for educational and informational purposes only. Nothing on this website is intended to be, nor should it be interpreted as, medical advice, diagnosis, or treatment.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">2. Not Medical or Nutritional Therapy Advice</h3>
                <p>
                  I am a Certified Nutrition Coach, not a medical doctor, registered dietitian, nurse, or licensed healthcare provider. The information on this website and in coaching sessions is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with your physician or qualified healthcare provider before making any changes to your diet, exercise routine, medications, or health practices.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">3. Personal Responsibility & Assumption of Risk</h3>
                <p>
                  By using this website or participating in coaching, you acknowledge that you alone are responsible for your health decisions and outcomes. You agree to use your best judgment and consult a medical professional when appropriate. You understand that any actions you take based on the information provided are taken at your own risk.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">4. No Guarantees</h3>
                <p>
                  While I am committed to providing high-quality guidance and support, You Can Do It Health Coaching cannot and does not guarantee specific results. Your progress depends on individual factors such as consistency, effort, health status, and personal circumstances. Any success stories or testimonials represent individual experiences and are not promises of what you will achieve.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">5. Accuracy & Updates</h3>
                <p>
                  I strive to ensure that the information on this website is accurate and current. However, I make no warranties regarding completeness, reliability, or accuracy. Content may be updated, changed, or removed at any time without notice.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">6. Intellectual Property</h3>
                <p>
                  All content on this website—including text, graphics, logos, photos, videos, downloadable materials, and program content—is the property of You Can Do It Health Coaching unless otherwise stated. You may not reproduce, distribute, modify, or create derivative works from any content without prior written permission.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">7. Limited Liability</h3>
                <p>
                  To the fullest extent permitted by law, You Can Do It Health Coaching and its sole proprietor are not liable for any damages or injuries resulting from your use of the website or coaching services. This includes, but is not limited to, direct, indirect, incidental, or consequential damages.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">8. External Links</h3>
                <p>
                  This website may contain links to third-party sites. These links are provided for convenience only. I do not endorse, control, or take responsibility for the content, policies, or practices of external websites.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">9. Use of the Website</h3>
                <p>
                  By using this website, you agree not to engage in unlawful, harmful, or disruptive behavior, including attempts to access restricted areas, scrape content, or interfere with site functionality.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">10. Privacy</h3>
                <p>
                  Any personal information you provide is handled in accordance with my Privacy Policy. You are responsible for maintaining the confidentiality of your login information (if applicable).
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">11. Agreement</h3>
                <p>
                  By accessing this website, downloading materials, or engaging in coaching services through You Can Do It Health Coaching, you acknowledge that you have read, understood, and agree to these Disclaimer & Terms of Use.
                </p>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
