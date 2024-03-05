import React from "react";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import { GlobalLoaderTrigger } from "utils/loader.util";

import classnames from "classnames/bind";
import styles from "./privacy_policy.module.scss";
const css = classnames.bind(styles);

const VerticalLayout = CustomLazy(import(/* webpackChunkName: "VerticalLayout" */ "layouts/vertical.layout"));
const Section = CustomLazy(import(/* webpackChunkName: "Section" */ "components/section/section.component"));

const PrivacyPolicyPage = () => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<GlobalLoaderTrigger />}>
        <VerticalLayout>
          <React.Suspense fallback={<GlobalLoaderTrigger />}>
            <Section className={css("privacyPolicy")}>
              <h4 className={css("title4")}>Privacy Policy</h4>
              <span className={css("paragraph", "textDull")}>Last updated - 2nd December 2021</span>
              <hr />
              <div className={css("content")}>
                <h5 className={css("subtitle")}>Privacy Policy for Valuationary</h5>
                <p className={css("paragraph", "textDull")}>
                  At Valuationary, accessible from valuationary.com, one of our main priorities is the privacy of our
                  visitors. This Privacy Policy document contains types of information that is collected and recorded by
                  Valuationary and how we use it. If you have additional questions or require more information about our
                  Privacy Policy, do not hesitate to contact us through email at By accessing the website at ..., you
                  are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree
                  that you are responsible for compliance with any applicable local laws. If you do not agree with any
                  of these terms, you are prohibited from using or accessing this site. The materials contained in this
                  website are protected by applicable copyright and trademark law.
                </p>
                <h5 className={css("subtitle")}>Log Files</h5>
                <p className={css("paragraph", "textDull")}>
                  Valuationary follows a standard procedure of using log files. These files log visitors when they visit
                  websites. All hosting companies do this as part of hosting services' analytics. The information
                  collected by log files include internet protocol (IP) addresses, browser type, Internet Service
                  Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These
                  are not linked to any information that is personally identifiable. The purpose of the information is
                  for analyzing trends, administering the site, tracking users' movement on the website, and gathering
                  demographic information.
                </p>
                <h5 className={css("subtitle")}>Cookies and Web Beacons</h5>
                <p className={css("paragraph", "textDull")}>
                  Like any other website, Valuationary uses 'cookies'. These cookies are used to store information
                  including visitors' preferences, and the pages on the website that the visitor accessed or visited.
                  The information is used to optimize the users' experience by customizing our web page content based on
                  visitors' browser type and/or other information.
                </p>
                <h5 className={css("subtitle")}>Privacy Policies</h5>
                <p className={css("paragraph", "textDull")}>
                  You may consult this list to find the Privacy Policy for each of the advertising partners of
                  Valuationary. Our Privacy Policy was created with the help of the Privacy Policy Generator.
                  Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that
                  are used in their respective advertisements and links that appear on Valuationary, which are sent
                  directly to users' browsers. They automatically receive your IP address when this occurs. These
                  technologies are used to measure the effectiveness of their advertising campaigns and/or to
                  personalize the advertising content that you see on websites that you visit. Note that Valuationary
                  has no access to or control over these cookies that are used by third-party advertisers.
                </p>
                <h5 className={css("subtitle")}>Third Party Privacy Policies</h5>
                <p className={css("paragraph", "textDull")}>
                  Valuationary’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising
                  you to consult the respective Privacy Policies of these third-party ad servers for more detailed
                  information. It may include their practices and instructions about how to opt-out of certain options.
                  You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links. You
                  can choose to disable cookies through your individual browser options. To know more detailed
                  information about cookie management with specific web browsers, it can be found at the browsers'
                  respective websites. What Are Cookies?
                </p>
                <h5 className={css("subtitle")}>Children's Information</h5>
                <p className={css("paragraph", "textDull")}>
                  Another part of our priority is adding protection for children while using the internet. We encourage
                  parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                  Valuationary does not knowingly collect any Personal Identifiable Information from children under the
                  age of 13. If you think that your child provided this kind of information on our website, we strongly
                  encourage you to contact us immediately and we will do our best efforts to promptly remove such
                  information from our records.
                </p>
                <h5 className={css("subtitle")}>Online Privacy Policy Only</h5>
                <p className={css("paragraph", "textDull")}>
                  This Privacy Policy applies only to our online activities and is valid for visitors to our website
                  with regards to the information that they shared and/or collected in Valuationary. This policy is not
                  applicable to any information collected offline or via channels other than this website.
                </p>
                <h5 className={css("subtitle")}>Consent</h5>
                <p className={css("paragraph", "textDull")}>
                  By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
                </p>
                <h5 className={css("subtitle")}>Use Licence</h5>
                <div className={css("paragraph", "textDull")}>
                  <ol className={css("list")}>
                    <li>
                      Permission is granted to temporarily download one copy of the materials (information or software)
                      on Valuationary's website for personal, non-commercial transitory viewing only. This is the grant
                      of a licence, not a transfer of title, and under this licence you may not:
                      <ol>
                        <li>modify or copy the materials;</li>
                        <li>
                          use the materials for any commercial purpose, or for any public display (commercial or
                          non-commercial);
                        </li>
                        <li>
                          attempt to decompile or reverse engineer any software contained on Valuationary's website;
                        </li>
                        <li>remove any copyright or other proprietary notations from the materials; or</li>
                        <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                      </ol>
                    </li>
                    <li>
                      This licence shall automatically terminate if you violate any of these restrictions and may be
                      terminated by Valuationary at any time. Upon terminating your viewing of these materials or upon
                      the termination of this licence, you must destroy any downloaded materials in your possession
                      whether in electronic or printed format.
                    </li>
                  </ol>
                </div>
                <h5 className={css("subtitle")}>Disclaimer</h5>
                <p className={css("paragraph", "textDull")}>
                  The materials on Valuationary's website are provided on an 'as is' basis. Valuationary makes no
                  warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                  without limitation, implied warranties or conditions of merchantability, fitness for a particular
                  purpose, or non-infringement of intellectual property or other violation of rights. Further,
                  Valuationary does not warrant or make any representations concerning the accuracy, likely results, or
                  reliability of the use of the materials on its website or otherwise relating to such materials or on
                  any sites linked to this site.
                </p>
                <h5 className={css("subtitle")}>Limitations</h5>
                <p className={css("paragraph", "textDull")}>
                  In no event shall Valuationary or its suppliers be liable for any damages (including, without
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                  use or inability to use the materials on Valuationary's website, even if Valuationary or a
                  Valuationary authorised representative has been notified orally or in writing of the possibility of
                  such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations
                  of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>
                <h5 className={css("subtitle")}>Accuracy of materials</h5>
                <p className={css("paragraph", "textDull")}>
                  The materials appearing on Valuationary's website could include technical, typographical, or
                  photographic errors. Valuationary does not warrant that any of the materials on its website are
                  accurate, complete or current. Valuationary may make changes to the materials contained on its website
                  at any time without notice. However Valuationary does not make any commitment to update the materials.
                </p>
                <h5 className={css("subtitle")}>Links</h5>
                <p className={css("paragraph", "textDull")}>
                  Valuationary has not reviewed all of the sites linked to its website and is not responsible for the
                  contents of any such linked site. The inclusion of any link does not imply endorsement by Valuationary
                  of the site. Use of any such linked website is at the user's own risk.
                </p>
                <h5 className={css("subtitle")}>Modifications</h5>
                <p className={css("paragraph", "textDull")}>
                  Valuationary may revise these terms of service for its website at any time without notice. By using
                  this website you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>
            </Section>
          </React.Suspense>
        </VerticalLayout>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default PrivacyPolicyPage;
