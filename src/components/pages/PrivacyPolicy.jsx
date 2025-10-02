import React from "react";
import "./PrivacyPolicy.css";
import SEO from '../common/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <SEO 
        title="Privacy Policy - Neodhan"
        description="Privacy Policy for Neodhan - AI-powered Credit Access for Bharat's MSMEs"
        keywords="privacy policy, data protection, Neodhan, MSME loans, fintech"
      />
      
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="privacy-hero-content">
          <h1>Privacy Policy</h1>
          <p className="privacy-updated">Updated on: 2025-01-06</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="privacy-content">
        <div className="privacy-container">
          <div className="privacy-intro">
            <p>
              This policy outlines how Echoblend Technologies India Pvt Ltd, the developer of the Neodhan platform, 
              collects, uses, and safeguards your personal information while using the Neodhan app and services. 
              We prioritize the privacy and security of our users and aim to provide transparency regarding the data 
              we collect and how it is utilized. Please read this Privacy Policy carefully to understand how your 
              information is handled within the Neodhan ecosystem.
            </p>
          </div>

          <div className="privacy-section">
            <h2>1. Collection of Personally Identifiable Information and other Information</h2>
            <p>
              When registering on our platform, you will be asked to enter your name, address, mobile number, 
              income details, business information, etc. Our goal is to protect customer data and provide a safe, 
              secure, and customized experience. We promise to keep all information about our customers totally private. 
              When you create an account on our application, we collect and store your information and automatically 
              track your information with the help of "Cookies". Cookies are small files stored on your device and 
              help us track user activities to understand and serve our customers better.
            </p>
          </div>

          <div className="privacy-section">
            <h2>2. Use of your data</h2>
            <p>
              We collect and use your personal information to operate our platform and deliver the services you have 
              requested. When you choose to borrow through Neodhan, we record and analyze each customer's transaction 
              history. Our purpose of using customer's personal information is to inform them about relevant financial 
              products, services, and updates. It also helps us detect and protect against fraud or other criminal 
              activity. We recognize and utilize your IP address to help determine issues on our server and to control 
              our platform.
            </p>
            <p>For more information on the specifics of kinds of data collected, refer to the Permissions section.</p>
          </div>

          <div className="privacy-section">
            <h2>3. Data We Share</h2>
            <p>
              We keep your personal information confidential and do not sell your personal data to third parties. 
              Neodhan values your privacy. We may share your information with payment gateway providers, customer 
              service and support providers, as well as those who assist us in providing advertising services. 
              Third parties use personal data to provide you access to our services and help us investigate 
              fraudulent or illegal activities. Without the consent of our customer, we do not share personal 
              information to third parties for their marketing or advertising purposes.
            </p>
          </div>

          <div className="privacy-section">
            <h2>4. Disclosure of Personal Information</h2>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. 
              However, we might share or disclose information to group companies, authorized agents, or any trusted 
              third-party service providers who assist us in operating our platform, conducting our business, or 
              servicing you, so long as those parties comply with applicable laws and agree to keep this information 
              confidential.
            </p>
            <p>Your Personal Information may be transferred to outside parties under the following circumstances:</p>
            <ul>
              <li>We may share the personal information with other group companies or trusted entities who act on our behalf to communicate with you about product offerings through telephone/mobile/SMS/email/WhatsApp.</li>
              <li>We may share the personal information with statutory and/or regulatory authorities, government institutions where required for compliance with legal requirements.</li>
              <li>We may use the personal information to respond to court orders or legal processes to establish or exercise our legal rights or defend against legal claims.</li>
              <li>We may share the personal information to investigate, prevent, or take action against any illegal activities, suspected fraud, or as otherwise required by law.</li>
              <li>We may share the personal information to protect or enforce our rights and claims.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>5. Manner Of Collection Of Information</h2>
            <p>Your information might be gathered:</p>
            <ul>
              <li>When you enroll with the Company by setting up your account</li>
              <li>Through your transactions with any of our technology partners</li>
              <li>Directly through your input</li>
              <li>Through your use of the Services</li>
              <li>Through the use of cookies and other tracking technologies</li>
              <li>Through access which will be provided by you to the Neodhan application on your mobile phone</li>
            </ul>
            <p>
              Payment gateway providers track user activity, page content, click/touch, movement, scroll on the website. 
              Neodhan never stores or shares personal information of the customer with third-party tools.
            </p>
          </div>

          <div className="privacy-section">
            <h2>6. Security Precautions</h2>
            <p>
              The security of your information is important to us. We maintain the information you provide and safely 
              secure the information in the company's databases, and these databases are stored on secure servers 
              with appropriate firewalls. When you enter sensitive information, we encrypt that information using 
              secure socket layer technology. We never permanently store complete credit card/debit card details. 
              We follow industry standards to protect the personal information submitted to us, both during transmission 
              and once we receive it. If you find out any unauthorized use of your account or any suspicious activity, 
              we request you to notify the Neodhan team immediately by sending an email to support@neodhan.com.
            </p>
            <p><strong>Note:</strong> We urge you to take steps to keep your personal information safe, so always choose a strong password and keep it private.</p>
          </div>

          <div className="privacy-section">
            <h2>7. Retention of Personal Information</h2>
            <p>
              We will retain your Personal Information for as long as necessary to provide you the services, or for 
              complying with our statutory/regulatory obligations, resolving disputes, defending claims, and enforcing 
              our policies. Neodhan, when dealing with users for providing services offered by other lending/non-lending 
              partners, will only store basic personal information such as name, address, contact information. Such 
              information will be transferred to respective lending/non-lending partners upon completion of onboarding/processing.
            </p>
            <p>All the data or information we collect from you is stored in servers located in India.</p>
          </div>

          <div className="privacy-section">
            <h2>8. Permissions</h2>
            <p>
              At Neodhan, we place the utmost importance on the security of your information. In order to provide 
              our services with the highest standards of data protection, we request certain permissions from your 
              mobile device when you engage with our application.
            </p>
            <div className="permission-item">
              <h3>SMS:</h3>
              <p>
                Neodhan can access all SMSs to assess income, financial expenses, etc., only for the purpose of 
                loan onboarding journey. The assessment is automated and the SMSs are encrypted. Neodhan does not 
                read or store any of your personal SMS data. Also, it does not share your SMSs with any third party.
              </p>
            </div>
            <div className="permission-item">
              <h3>Contacts:</h3>
              <p>
                With your explicit consent, your contact list is collected to assess the risk associated with your 
                loan application and facilitate quicker loan approval.
              </p>
            </div>
            <div className="permission-item">
              <h3>Location Data:</h3>
              <p>
                With your explicit consent, we may intermittently collect location data during your app usage. 
                This data serves the purpose of detecting potential fraudulent activities and enhancing security measures. 
                It is important to note that this data is solely processed by automated systems and is not accessible by individuals.
              </p>
            </div>
            <div className="permission-item">
              <h3>Device Information:</h3>
              <p>
                We collect specific device information, such as hardware model and software version, to ensure device 
                authenticity and prevent unauthorized use. This includes unique identifiers like Android Device ID, 
                aiding in the secure identification of devices and safeguarding against fraudulent activities.
              </p>
            </div>
            <div className="permission-item">
              <h3>Photos and Media Documents:</h3>
              <p>
                We respect your privacy and adhere to strict guidelines regarding camera and photo access. When you 
                opt to share files, only the files you expressly grant access to will be transmitted to our servers. 
                These files are exclusively used to support authenticity of your loan application and comply with 
                local financial guidelines on data needed to be collected to process loans while maintaining data 
                security and confidentiality.
              </p>
            </div>
            <div className="permission-item">
              <h3>Installed Applications:</h3>
              <p>
                Neodhan collects your installed applications on the device to enable understanding the usage of 
                applications like VPN, gaming applications, and others for fraud detection and understanding your 
                risk profile during the lending journey.
              </p>
            </div>
            <p>
              Your provision of these permissions enhances the functionality and security of our application. It is 
              crucial to reiterate that sensitive data is accessed only by our automated systems, dedicated to risk 
              assessment and fraud detection. No human interaction with this data is permitted.
            </p>
          </div>

          <div className="privacy-section">
            <h2>9. Age Restrictions</h2>
            <p>
              We do not collect personal information from anyone under the age of 21 or knowingly allow such persons 
              to register with us. If we become aware that we have collected personal information from a child who 
              is under the age of 21, then we will take necessary steps to delete that information.
            </p>
            <p><strong>Note:</strong> To enroll with us, you should be 21 years old or more and be an Indian Resident. Minors are entirely prohibited from utilizing the services of Neodhan.</p>
          </div>

          <div className="privacy-section">
            <h2>10. Changes to the Privacy Policy</h2>
            <p>
              This Privacy Policy shall be amended from time to time to comply with our business requirements and 
              applicable laws. The amendments made to this Privacy Policy shall be updated on this website. You may 
              visit this website to view the changes in policy. These changes are effective immediately after they 
              are posted on our website. Please regularly check this Privacy Policy to ensure you are aware of the 
              latest updates.
            </p>
          </div>

          <div className="privacy-section">
            <h2>11. Modification and Rectification of Information</h2>
            <p>
              If the personal information provided by you is inaccurate, incomplete, or outdated, in that case you 
              can reach out to us at support@neodhan.com for rectifying the same.
            </p>
          </div>

          <div className="privacy-section">
            <h2>12. Withdrawal/Denial of Consent</h2>
            <p>
              You have a right to withdraw the consent already granted or deletion of your Neodhan login account or 
              deny the consent for use of specific data, restrict disclosure to third parties, data retention, 
              revoke consent already granted to collect personal data and if required, make the app delete/forget 
              the data by writing to us at support@neodhan.com. Further, if you have availed any service from the 
              Company or our lending partners, the Company and lending partners shall have a right to continue 
              processing your information until such credit facility has been repaid in full together with any 
              interest and dues payable.
            </p>
          </div>

          <div className="privacy-section">
            <h2>13. Contact Us</h2>
            <p>
              We take your complaints very seriously in order to meet the highest standards of our customers because 
              we believe in quality service. Our job is not just to make our customers happy, but to satisfy them 
              to the core. If you are unhappy with the way we have handled your personal information or any request 
              that you have raised with us, you should contact us at the contact details provided on our website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
