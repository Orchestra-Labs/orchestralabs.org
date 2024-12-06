import { SectionNavigator } from '@/components';
import { NavItem } from '@/types';

const HEADINGS: Record<number, { id: string; label: string }> = {
  1: { id: 'data-collection', label: '1. Data Collection' },
  2: { id: 'data-usage', label: '2. Data Usage' },
  3: { id: 'data-sharing', label: '3. Data Sharing' },
  4: { id: 'third-party-services', label: '4. Third-Party Services' },
  5: { id: 'security', label: '5. Security' },
  6: { id: 'policy-changes', label: '6. Changes to This Policy' },
  7: { id: 'user-rights', label: '7. Your Rights' },
  8: { id: 'contact-us', label: '8. Contact Us' },
};

const NAVIGATION_ITEMS: NavItem[] = Object.keys(HEADINGS).map(key => ({
  id: key,
  label: HEADINGS[+key].label,
  href: `#${HEADINGS[+key].id}`,
}));

export const PrivacyPolicy = () => (
  <div className="mt-[104px] mb-0 bg-background-dark-grey">
    <div className="page-container flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Privacy Policy
        </h1>
        <p className="text-xl md:text-h5 xl:text-h3 mt-10">
          Effective Date: Dec 05, 2024
        </p>

        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>
          <p className="mt-10">
            We value your privacy and do not collect or store any personal or
            identifiable user data through the use of the [Your Extension Name]
            extension. Any data collection is incidental and limited to:
          </p>
          <ul className="list-disc mt-5 px-6 md:pl-8">
            <li>
              <strong>Google Extension Comments:</strong> Comments made on the
              Chrome Web Store are governed by Google’s privacy policies. We do
              not control or manage data collected there.
            </li>
            <li>
              <strong>Social Media Interactions:</strong> Interactions on social
              media platforms (e.g., comments, likes) are governed by the
              respective platforms’ privacy policies.
            </li>
          </ul>
        </div>

        <div id={HEADINGS[2].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[2].label}
          </h2>
          <p className="mt-10">
            Since we do not collect personal or identifiable data, there is no
            specific data usage applicable. Incidental data obtained from
            external sources may be used to:
          </p>
          <ul className="list-disc mt-5 px-6 md:pl-8">
            <li>Respond to inquiries and feedback.</li>
            <li>Improve our extension based on feedback.</li>
          </ul>
        </div>

        <div id={HEADINGS[3].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[3].label}
          </h2>
          <p className="mt-10">
            We do not share, sell, or disclose any data to third parties. Any
            incidental data collected through external sources will not be
            shared except as required by law.
          </p>
        </div>

        <div id={HEADINGS[4].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[4].label}
          </h2>
          <p className="mt-10">
            This extension may interact with third-party tools or APIs to
            enhance functionality. These tools do not collect or store your
            personal data. Any interactions with third-party services are
            governed by their respective privacy policies.
          </p>
        </div>

        <div id={HEADINGS[5].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[5].label}
          </h2>
          <p className="mt-10">
            We do not store any user data directly, so no additional security
            measures are necessary. Any incidental data from external sources is
            subject to the security measures of those platforms.
          </p>
        </div>

        <div id={HEADINGS[6].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[6].label}
          </h2>
          <p className="mt-10">
            We reserve the right to update this privacy policy at any time.
            Changes will be indicated by an updated “Effective Date” at the top
            of the document. Users are encouraged to review the policy
            periodically.
          </p>
        </div>

        <div id={HEADINGS[7].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[7].label}
          </h2>
          <p className="mt-10">
            Since we do not collect personal or identifiable data, there is no
            data to request, delete, or modify. For comments or data shared on
            external platforms, users should refer to the respective platform's
            privacy policies for managing their data.
          </p>
        </div>

        <div id={HEADINGS[8].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[8].label}
          </h2>
          <p className="mt-10">
            If you have any questions or concerns about this Privacy Policy or
            the [Your Extension Name] extension, you may contact us at:
          </p>
          <ul className="list-disc mt-5 px-6 md:pl-8">
            <li>Email: dblackstone@orchestralabs.org</li>
            <li>
              Address: 8 The Green, Suite B, Dover, DE, 19901, United States
            </li>
          </ul>
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
