import React from "react";

import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import { GlobalLoaderTrigger } from "utils/loader.util";

import classnames from "classnames/bind";
import styles from "./terms_conditions.module.scss";
const css = classnames.bind(styles);

const VerticalLayout = CustomLazy(import(/* webpackChunkName: "VerticalLayout" */ "layouts/vertical.layout"));
const Section = CustomLazy(import(/* webpackChunkName: "Section" */ "components/section/section.component"));

const TermsConditionsPage = () => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<GlobalLoaderTrigger />}>
        <VerticalLayout>
          <React.Suspense fallback={<GlobalLoaderTrigger />}>
            <Section className={css("termsConditions")}>
              <h4 className={css("title4")}>Terms &amp; Conditions</h4>
              <span className={css("paragraph", "textDull")}>Last updated - 2nd December 2021</span>
              <hr style={{ marginBottom: "4rem" }} />
              <div className={css("content", "textDull")}>
                <p className={css("paragraph")}>
                  These Terms Of Use Is An Electronic Record In The Form Of An Electronic Contract Formed Under The
                  Information Technology Act, 2000 And The Rules Made Thereunder And The Amended Provisions Pertaining
                  To Electronic Documents / Records In Various Statutes As Amended By The Information Technology Act,
                  2000. These Terms Of Use Does Not Require Any Physical, Electronic Or Digital Signature.
                </p>
                <p className={css("paragraph")}>
                  This Document Is Published And Shall Be Construed In Accordance With The Provisions Of Rule 3 (1) Of
                  The Information Technology (Intermediaries Guidelines) Rules, 2011 Prescribed Under Information
                  Technology Act, 2000 That Require Publishing The Rules And Regulations, Privacy Policy And User
                  Agreement For Access Or Usage Of The Website.
                </p>
                <p className={css("paragraph")}>
                  These Terms Of Use Is A Legally Binding Document Between Valuationary (Website) And User (Both Terms
                  Defined Below). These Terms Of Use Will Be Effective Upon Your Acceptance Of The Same (Directly Or
                  Indirectly In Electronic Form Or By Means Of An Electronic Record) And Will Govern The Relationship
                  Between The Valuationary Website And User For The Use Of The Website (Defined Below).
                </p>
                <p className={css("paragraph")}>
                  Please Read These Terms Of Use Carefully. By Using The Website, You Indicate That You Understand,
                  Agree And Consent To These Terms Of Use. If You Do Not Agree With The Terms Of These Terms Of Use,
                  Please Do Not Use This Website. You Hereby Provide Your Unconditional Consent Or Agreements To
                  Valuationary Website As Provided Under Section 43a And Section 72a Of Information Technology Act, 2000
                  And The Information Technology (Intermediary Guidelines) Rules, 2011.
                </p>
                <p className={css("paragraph")}>
                  These Terms of Use of the website located at the URL www.valuationary.com, mobile sites or mobile
                  Website (“Website”) is between Valuationary Edtech Private Limited (“Valuationary Website” or “We” or
                  “Us” or “Our"), a company incorporated under the Companies Act, 2013 with its registered office
                  situated at B-608, Shilp Residency, Vesu, Surat, Gujarat, 395007 and the guest users or registered
                  users of the Website ("You" or "Your" or "Yourself" or "User") describe the terms on which the
                  Valuationary Website offers You access to the Website and such other services as are incidental and
                  ancillary thereto ("Services").
                </p>
                <p className={css("paragraph")}>
                  These Terms of Use is a contract between You and Valuationary Website. These Terms of Use shall be
                  read together with the Privacy Policy or other terms and condition with all other notices,
                  disclaimers, guidelines appearing on the Website from time to time (collectively referred to as
                  "Agreement(s)") constitute the entire agreement upon which You are allowed to access and use the
                  Website and avail the Services.
                </p>
                <h5 className={css("subtitle", "textBright")}>1) INTERPRETATION</h5>
                <p className={css("paragraph")}>
                  a) Any reference to the singular includes a reference to the plural and vice versa, unless explicitly
                  provided for otherwise; and any reference to the masculine includes a reference to the feminine and
                  vice versa.
                </p>
                <p className={css("paragraph")}>
                  b) Headings and captions are used for convenience only and will not affect the interpretation of these
                  Terms of Use.
                </p>
                <p className={css("paragraph")}>
                  c) Any reference to a natural person will, unless repugnant to the context, include his heirs,
                  executors and permitted assignees. Similarly, any reference to a juristic person such as Valuationary
                  Website will, unless repugnant to the context, include its affiliates, successors and permitted
                  assignees.
                </p>
                <h5 className={css("subtitle", "textBright")}>2) ACCOUNT REGISTRATION AND SECURITY</h5>
                <p className={css("paragraph")}>
                  a) You may access and use the Website and the Services either as a registered user or as a guest user.
                  However, not all sections of the Website and Services will be accessible to guest users.
                </p>
                <p className={css("paragraph")}>
                  b) <b>Registered users</b>:
                  <br />
                  Valuationary Website makes certain sections of the Services available to You through the Website only
                  if You have provided Valuationary Website certain required User information and created an account and
                  a Valuationary Website ID through certain log-in ID and password ("Account"). In the event You
                  register as a User by creating an Account in order to avail of the Services provided by the Website,
                  You will be responsible for maintaining the confidentiality and security of the Account, and are fully
                  responsible for all activities that occur under Your Account. You agree to (a) immediately notify
                  Valuationary Website of any unauthorized use of Your Account Information or any other breach of
                  security, and (b) ensure that You exit from Your Account at the end of each session. Valuationary
                  Website cannot and will not be liable for any loss or damage arising from Your failure to comply with
                  this section. You may be held liable for losses incurred by the Website or any other user of or
                  visitor to the Website due to authorized or unauthorized use of Your Account as a result of Your
                  failure in keeping Your Account Information secure and confidential. You shall ensure that the Account
                  information provided by You in the Website's registration form is complete, accurate and up-to-date.
                  Use of another user's Account information for availing the Services is expressly prohibited.
                </p>
                <p className={css("paragraph")}>
                  If You provide any information that is untrue, inaccurate, not current or incomplete (or becomes
                  untrue, inaccurate, not current or incomplete), or Website has reasonable grounds to suspect that such
                  information is untrue, inaccurate, not current or incomplete, Website has the right to suspend or
                  terminate Your Account and refuse any and all current or future use of the Website / Services (or any
                  portion thereof).
                </p>
                <p className={css("paragraph")}>
                  c) <b>Guest users</b>:
                  <br />
                  The Website also allows limited access to the Services for unregistered Users (also called as 'guest
                  users'). Such users will be able to browse the Website
                </p>
                <h5 className={css("subtitle", "textBright")}>3) SERVICES</h5>
                <p className={css("paragraph")}>
                  a) Valuationary Website is an online platform inter-alia engaged in the business of rendering of
                  services to a large community of users, where questions are asked, answered, edited, and organized by
                  the users by means of a video/audio technology and other similar services through its Website.
                </p>
                <p className={css("paragraph")}>
                  b) Neither the Website own, sell, resell, furnish, provide, prepare any product nor manage and/or
                  control the Users.
                </p>
                <p className={css("paragraph")}>
                  c) The Website responsibility is limited to facilitating the online services.
                </p>
                <h5 className={css("subtitle", "textBright")}>4) USE OF THE WEBSITE / SERVICES</h5>
                <p className={css("paragraph")}>
                  You agree and undertake that when using a Website / Service, You will not: <br />
                  a) Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights of others;
                </p>
                <p className={css("paragraph")}>
                  b) Publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory,
                  infringing, obscene, indecent or unlawful topic, name, material or information;
                </p>
                <p className={css("paragraph")}>
                  c) Conduct or forward surveys, contests, pyramid schemes or chain letters;
                </p>
                <p className={css("paragraph")}>
                  d) Falsify or delete any author attributions, legal or other proper notices or proprietary
                  designations or labels of the origin or source of software or other material contained in a file that
                  is uploaded;
                </p>
                <p className={css("paragraph")}>
                  e) Any information provided by You on this site shall not be misleading in any way;
                </p>
                <p className={css("paragraph")}>
                  f) use any deep-link, robot, spider or other automatic device, program, algorithm or methodology, or
                  any similar or equivalent manual process, to access, acquire, copy or monitor any portion of the
                  Website or content, or in any way reproduce or circumvent the navigational structure or presentation
                  of the Website, to obtain or attempt to obtain any materials, documents or information through any
                  means not specifically made available through the Website;
                </p>
                <p className={css("paragraph")}>
                  g) reverse engineer, modify, copy, distribute, transmit, display, perform, reproduce, publish,
                  license, create derivative works from, transfer, or sell any information or software obtained from the
                  Website.
                </p>
                <h5 className={css("subtitle", "textBright")}>5) THIRD PARTY CONTENTS</h5>
                <p className={css("paragraph")}>
                  a) We cannot and will not assure that other users are or will be complying with the foregoing rules or
                  any other provisions of these Terms of Use, and, as between You and Us, You hereby assume all risk of
                  harm or injury resulting from any such lack of compliance.
                </p>
                <p className={css("paragraph")}>
                  b) You acknowledge that when You access a link that leaves the Services, the site You will enter into
                  is not controlled by Us and different terms of use and privacy policy may apply. By assessing links to
                  other sites, You acknowledge that We are not responsible for those sites. We reserve the right to
                  disable links to and / or from third-party sites to the Services, although we are under no obligation
                  to do so.
                </p>
                <h5 className={css("subtitle", "textBright")}>6) PROMOTIONS, DISCOUNTS AND COUPONS</h5>
                <p className={css("paragraph")}>
                  Website reserves the right to offer the discounts/promotional offers to any Users of its own choice
                  and shall not be held liable to any User for not offering the same. The discounts/offers have been
                  made available at the sole discretion of the Website and are subject to change / amendment /
                  modification from time to time. Website at its sole discretion may at any time discontinue the
                  discounts/offers without assigning any reasons or without any prior intimation whatsoever. The
                  participation in discounts/offers is entirely voluntary and it is understood, that the participation
                  by the User shall be deemed to have been made on a voluntary basis.
                </p>
                <h5 className={css("subtitle", "textBright")}>7) COMMUNICATIONS</h5>
                <p className={css("paragraph")}>
                  When You use the Website or send emails or other data, information or communication to Us, You agree
                  and understand that You are communicating with Us through electronic records and You consent to
                  receive communications via electronic records from Us periodically and as and when required. We may
                  communicate with You by email or by such other mode of communication, electronic or otherwise.
                </p>
                <h5 className={css("subtitle", "textBright")}>8) RIGHT TO USE LOGOS</h5>
                <p className={css("paragraph")}>
                  Nothing contained in these Terms of Use constitutes a license in favor of the User to use trademarks,
                  service marks or logos and/or any other marks, owned by the Website that may be reflected on the
                  Website ("IPR"). Any use by User of IPR will be only with the prior written permission from Us. You
                  acknowledge that We are the sole and exclusive owner of Our respective IPR’s and agree that You will
                  not contest the ownership of the said IPR’s for any reason whatsoever.
                </p>
                <h5 className={css("subtitle", "textBright")}>9) NO WARRANTIES</h5>
                <p className={css("paragraph")}>
                  The Website and the Services are provided on an "as is" basis. We do not make any other
                  representations or warranties of any kind, express or implied, including without limitation that the
                  Website or the Services will meet Your requirements, will always be available, accessible,
                  uninterrupted, timely, secure, or operate without error.
                </p>
                <h5 className={css("subtitle", "textBright")}>10) INDEMNITY</h5>
                <p className={css("paragraph")}>
                  You shall indemnify and hold harmless the Website, its owner, licensee, affiliates (as applicable) and
                  their respective officers, directors, agents, and employees, from any claim or demand, or actions
                  including reasonable attorneys' fees, made by any third party or penalty imposed due to or arising out
                  of Your breach of these Terms of Use, Privacy Policy and other terms and conditions, or Your violation
                  of any law, rules or regulations or the rights (including infringement of intellectual property
                  rights) of a third party.
                </p>
                <h5 className={css("subtitle", "textBright")}>11) LIMITATION OF LIABILITY</h5>
                <p className={css("paragraph")}>
                  In no event shall Valuationary Website be liable for any special, incidental, indirect or
                  consequential damages of any kind in connection with these terms of use, even if user has been
                  informed in advance of the possibility of such damages.
                </p>
                <h5 className={css("subtitle", "textBright")}>12) UPDATES</h5>
                <p className={css("paragraph")}>
                  We reserve the right, at Our sole discretion, to change, modify, add or remove portions of these Terms
                  of Use, at any time without any prior written notice to You. We suggest that You regularly check these
                  Terms of Use to apprise Yourself of any updates. Your continued use of the Website following the
                  posting of changes will mean that You accept and agree to the revisions. As long as You comply with
                  these Terms of Use, We grant You a personal, non-exclusive, non-transferable, limited privilege to
                  enter and use the Website.
                </p>
                <h5 className={css("subtitle", "textBright")}>13) SEVERABILITY</h5>
                <p className={css("paragraph")}>
                  If any of these terms should be determined to be illegal, invalid or otherwise unenforceable by reason
                  of the laws of any state in which these terms are intended to be effective, then to the extent and
                  within the jurisdiction which that term is illegal, invalid or unenforceable, it shall be severed and
                  deleted and the remaining Terms of Use shall survive, remain in full force and effect and continue to
                  be binding and enforceable.
                </p>
                <h5 className={css("subtitle", "textBright")}>14) NON-ASSIGNMENT</h5>
                <p className={css("paragraph")}>
                  You shall not assign or transfer or purport to assign or transfer the contract between You and Us to
                  any other person.
                </p>
                <h5 className={css("subtitle", "textBright")}>
                  15) GOVERNING LAW, JURISDICTION AND DISPUTE RESOLUTION
                </h5>
                <p className={css("paragraph")}>
                  These Terms of Use are governed by the laws of India. Any action, suit, or other legal proceeding,
                  which is commenced to resolve any matter arising under or relating to this website, shall be subject
                  to the jurisdiction of the courts at Surat, India.
                </p>
                <h5 className={css("subtitle", "textBright")}>16) GRIEVANCE OFFICER</h5>
                <div className={css("paragraph")}>
                  In accordance with Information Technology Act 2000, Information Technology (Intermediary Guidelines)
                  Rules, 2011 and rules made there under, the name and contact details of the Grievance Officer are
                  provided below:
                  <br />
                  <br />
                  <p className={css("paragraph")}>Name: Mahip Gupta</p>
                  <p className={css("paragraph")}>
                    Address: Valuationary EdTech Private Limited, 303, SNS Arista, Vesu, Surat, Gujarat. 395007
                  </p>
                  <p className={css("paragraph")}>Phone: +918758893300</p>
                  <p className={css("paragraph")}>Email: connect@valuationary.com</p>
                  <p className={css("paragraph")}>Time: Monday - Saturday 9 AM to 6 PM</p>
                </div>
              </div>
            </Section>
          </React.Suspense>
        </VerticalLayout>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default TermsConditionsPage;
