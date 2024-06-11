import React, { useEffect } from "react";
import Footer from "../../../components/footer/Footer";
import {
  Container,
  Header,
  SubHeader,
  TextStyled,
  PrivacyList,
  LiStyled,
  LinkStyled,
  AbcList,
} from "../cookies/Cookies.styled";

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <Header>Privacy Policy</Header>
        <TextStyled>
          This privacy policy applies between you, the User of this Website
          (xplainfinancial.com) and Solum Financial Limited (Solum) ,the owner
          and provider of this Website. Solum takes the privacy of your
          information very seriously. This privacy policy applies to our use of
          any and all Data collected by us or provided by you in relation to
          your use of the Website.
        </TextStyled>
        <SubHeader>Please read this privacy policy carefully.</SubHeader>
        <PrivacyList>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              In this privacy policy, the following definitions are used:
            </TextStyled>
            <SubHeader>Data</SubHeader>
            <TextStyled>
              Collectively all information that you submit to Solum via the
              Website. This definition incorporates, where applicable, the
              definitions provided in the Data Protection Laws;
            </TextStyled>
            <SubHeader>Cookies</SubHeader>
            <TextStyled>
              A small text file placed on your computer by this Website when you
              visit certain parts of the Website and/or when you use certain
              features of the Website. Details of the cookies used by this
              Website are set out in the{" "}
              <LinkStyled to="/cookies">Cookies Policy</LinkStyled>;
            </TextStyled>
            <SubHeader>Data Protection Laws</SubHeader>
            <TextStyled>
              Any applicable law relating to the processing of personal Data,
              including but not limited to the Directive 96/46/EC (Data
              Protection Directive) or the GDPR, and any national implementing
              laws, regulations and secondary legislation, for as long as the
              GDPR is effective in the UK;
            </TextStyled>
            <SubHeader>GDPR</SubHeader>
            <TextStyled>
              The General Data Protection Regulation (EU) 2016/679;
            </TextStyled>
            <SubHeader>Solum,we or us</SubHeader>
            <TextStyled>
              Solum, a company incorporated in England and Wales with registered
              number 9050223 whose registered office is at 43-45 Dorset Street,
              2F, London, W1U 7NA
            </TextStyled>
            <SubHeader>UK and EU Cookie Law</SubHeader>
            <TextStyled>
              The Privacy and Electronic Communications (EC Directive)
              Regulations 2003 as amended by the Privacy and Electronic
              Communications (EC Directive) (Amendment) Regulations 2011;
            </TextStyled>
            <SubHeader>User or you</SubHeader>
            <TextStyled>
              Any third party that accesses the Website and is not either (i)
              employed by Solum and acting in the course of their employment or
              (ii) engaged as a consultant or otherwise providing services to
              Solum and accessing the Website in connection with the provision
              of such services; and
            </TextStyled>
            <SubHeader>Website</SubHeader>
            <TextStyled>
              The website that you are currently using, www.xplainfinancial.com,
              and any sub- domains of this site unless expressly excluded by
              their own terms and conditions.
            </TextStyled>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              In this privacy policy, unless the context requires a different
              interpretation;
            </TextStyled>
            <AbcList>
              <LiStyled style={{ marginTop: 30 }}>
                <TextStyled>
                  the singular includes the plural and vice versa;
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  references to sub-clauses, clauses, schedules or appendices
                  are to sub- clauses, clauses, schedules or appendices of this
                  privacy policy;
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  a reference to a person includes firms, companies, government
                  entities, trusts and partnerships;
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  “including” is understood to mean “including without
                  limitation”;
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  reference to any statutory provision includes any modification
                  or amendment of it;
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  the headings and sub-headings do not form part of this privacy
                  policy.
                </TextStyled>
              </LiStyled>
            </AbcList>
          </LiStyled>
          <SubHeader>Scope Of This Privacy Policy</SubHeader>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              This privacy policy applies only to the actions of Solum and Users
              with respect to this Website. It does not extend to any websites
              that can be accessed from this Website including, but not limited
              to, any links we may provide to social media websites.
            </TextStyled>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              For purposes of the applicable Data Protection Laws, Solum is the
              “data controller”. This means that Solum determines the purposes
              for which, and the manner in which, your Data is processed.
            </TextStyled>
          </LiStyled>
          <SubHeader>Data Collected</SubHeader>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              In this privacy policy, unless the context requires a different
              interpretation;
            </TextStyled>
            <AbcList>
              <LiStyled style={{ marginTop: 30 }}>
                <TextStyled>name;</TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>job title;</TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>profession;</TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  contact Information such as email addresses and telephone
                  numbers;
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>IP address (automatically collected);</TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  web browser type and version (automatically collected);
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  operating system (automatically collected);
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  a list of URLs starting with a referring site, your activity
                  on this Website, and the site you exit to (automatically
                  collected);
                </TextStyled>
              </LiStyled>
            </AbcList>
            <TextStyled style={{ marginTop: 30 }}>
              in each case, in accordance with this Privacy Policy.
            </TextStyled>
          </LiStyled>
          <SubHeader>How We Collect Data</SubHeader>
          <LiStyled style={{ marginTop: 30 }}>
            We collect Data in the following ways:
            <AbcList>
              <LiStyled style={{ marginTop: 30 }}>
                <TextStyled>Data is given to us by you; </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  Data is received from other sources; and{" "}
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>Data is collected automatically. </TextStyled>
              </LiStyled>
            </AbcList>
          </LiStyled>
          <SubHeader>Data Is Given To Us By You</SubHeader>
          <LiStyled style={{ marginTop: 30 }}>
            Solum will collect your Data in a number of ways, for example:
            <AbcList>
              <LiStyled style={{ marginTop: 30 }}>
                <TextStyled>
                  when you contact us through the Website, by telephone, post,
                  e-mail or through any other means;
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  when you register with us and set up an account to receive our
                  products/ services;
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  when you elect to receive marketing communications from us;
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>when you use our services;</TextStyled>
              </LiStyled>
            </AbcList>
            <TextStyled style={{ marginTop: 30 }}>
              in each case, in accordance with this Privacy Policy.
            </TextStyled>
            <SubHeader>Data That Is Received From Third Parties</SubHeader>
          </LiStyled>
          <LiStyled>
            <TextStyled style={{ marginTop: 30 }}>
              Solum will receive Data about you from the following third
              parties;
            </TextStyled>
            <AbcList>
              <LiStyled style={{ marginTop: 30 }}>
                <TextStyled>Google Analytics.</TextStyled>
              </LiStyled>
            </AbcList>
            <SubHeader>Data That Is Collected Automatically</SubHeader>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              To the extent that you access the Website, we will collect your
              Data automatically, for example:
            </TextStyled>
            <AbcList>
              <LiStyled style={{ marginTop: 30 }}>
                <TextStyled>
                  we automatically collect some information about your visit to
                  the Website. This information helps us to make improvements to
                  Website content and navigation, and includes your IP address,
                  the date, times and frequency with which you access the
                  Website and the way you use and interact with its content.
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  we will collect your Data automatically via cookies, in line
                  with the cookie settings on your browser. For more information
                  about cookies, and how we use them on the Website, see the
                  section below, headed “Cookies”.
                </TextStyled>
              </LiStyled>
            </AbcList>
            <SubHeader>Our Use Of Data</SubHeader>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              Any or all of the above Data may be required by us from time to
              time in order to provide you with the best possible service and
              experience when using our Website. Specifically, Data may be used
              by us for the following reasons:
            </TextStyled>
            <AbcList>
              <LiStyled style={{ marginTop: 30 }}>
                <TextStyled>internal record keeping;</TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>improvement of our products/services;</TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  transmission by email of marketing materials that may be of
                  interest to you;
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  contact for market research purposes which may be done using
                  email, telephone, fax or mail. Such information may be used to
                  customize or update the Website;
                </TextStyled>
              </LiStyled>
              <TextStyled style={{ marginTop: 30 }}>
                in each case, in accordance with this Privacy Policy.
              </TextStyled>
            </AbcList>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              We may use your Data for the above purposes if we deem it
              necessary to do so for our legitimate interests. If you are not
              satisfied with this, you have the right to object in certain
              circumstances (see the section headed “Your rights” below).
            </TextStyled>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              For the delivery of direct marketing to you via e-mail, we'll need
              your consent, whether via an opt-in or soft-opt-in:
            </TextStyled>
            <AbcList>
              <LiStyled style={{ marginTop: 30 }}>
                <TextStyled>
                  soft opt-in consent is a specific type of consent which
                  applies when you have previously engaged with us (for example,
                  you contact us to ask us for more details about a particular
                  product/service, and we are marketing similar
                  products/services). Under “soft opt-in” consent, we will take
                  your consent as given unless you opt-out.
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  for other types of e-marketing, we are required to obtain your
                  explicit consent; that is, you need to take positive and
                  affirmative action when consenting by, for example, checking a
                  tick box that we'll provide.
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  if you are not satisfied about our approach to marketing, you
                  have the right to withdraw consent at any time. To find out
                  how to withdraw your consent, see the section headed “Your
                  rights” below.
                </TextStyled>
              </LiStyled>
            </AbcList>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              When you register with us and set up an account to receive our
              services, the legal basis for this processing is the performance
              of a contract between you and us and/or taking steps, at your
              request, to enter into such a contract.
            </TextStyled>
            <SubHeader>Who We Share Data With</SubHeader>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              We may share your Data with the following groups of people for the
              following reasons;
            </TextStyled>
          </LiStyled>
          <AbcList>
            <LiStyled style={{ marginTop: 30 }}>
              <TextStyled>
                any of our group companies or affiliates — to ensure the proper
                administration of your website and business;
              </TextStyled>
            </LiStyled>
            <LiStyled>
              <TextStyled>
                our employees, agents and/or professional advisors – to obtain
                advice from professional advisers;
              </TextStyled>
            </LiStyled>
            <LiStyled>
              <TextStyled>
                third party service providers who provide services to us which
                require the processing of personal data – to help third party
                service providers in receipt of any shared data to perform
                functions on our behalf to help ensure the website runs
                smoothly;
              </TextStyled>
            </LiStyled>
          </AbcList>
          <TextStyled style={{ marginTop: 30 }}>
            in each case, in accordance with this Privacy Policy.
          </TextStyled>
          <SubHeader>Keeping Data Secure</SubHeader>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              We will use technical and organisational measures to safeguard
              your Data, for example:
            </TextStyled>
            <AbcList>
              <LiStyled style={{ marginTop: 30 }}>
                <TextStyled>
                  access to your account is controlled by a password and a user
                  name that is unique to you.
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>we store your Data on secure servers.</TextStyled>
              </LiStyled>
            </AbcList>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              We are in the process of becoming certified to Cyber Essentials.
              This family of standards helps us manage your Data and keep it
              secure.
            </TextStyled>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              Technical and organisational measures include measures to deal
              with any suspected data breach. If you suspect any misuse or loss
              or unauthorised access to your Data, please let us know
              immediately by contacting us via this e-mail address:
              dpo@solum-financial.com.
            </TextStyled>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              If you want detailed information from Get Safe Online on how to
              protect your information and your computers and devices against
              fraud, identity theft, viruses and many other online problems,
              please visit{" "}
              <LinkStyled to="https://www.getsafeonline.org">
                www.getsafeonline.org
              </LinkStyled>
              . Get Safe Online is supported by HM Government and leading
              businesses.
            </TextStyled>
            <SubHeader>Data Retention</SubHeader>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              Unless a longer retention period is required or permitted by law,
              we will only hold your Data on our systems for the period
              necessary to fulfil the purposes outlined in this privacy policy
              or until you request that the Data be deleted.
            </TextStyled>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              Even if we delete your Data, it may persist on backup or archival
              media for legal, tax or regulatory purposes.
            </TextStyled>
            <SubHeader>Your Rights</SubHeader>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              You have the following rights in relation to your Data:
            </TextStyled>
            <AbcList>
              <LiStyled style={{ marginTop: 30 }}>
                <TextStyled>
                  Right to access – the right to request (i) copies of the
                  information we hold about you at any time, or (ii) that we
                  modify, update or delete such information. If we provide you
                  with access to the information we hold about you, we will not
                  charge you for this, unless your request is “manifestly
                  unfounded or excessive.” Where we are legally permitted to do
                  so, we may refuse your request. If we refuse your request, we
                  will tell you the reasons why.
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  Right to correct — the right to have your Data rectified if it
                  is inaccurate or incomplete.
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  Right to erase — the right to request that we delete or remove
                  your Data from our systems.
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  Right to restrict our use of your Data — the right to “block”
                  us from using your Data or limit the way in which we can use
                  it.
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  Right to Data portability – the right to request that we move,
                  copy or transfer your Data.
                </TextStyled>
              </LiStyled>
              <LiStyled>
                <TextStyled>
                  Right to object – the right to object to our use of your Data
                  including where we use it for our legitimate interests.
                </TextStyled>
              </LiStyled>
            </AbcList>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              To make enquiries, exercise any of your rights set out above, or
              withdraw your consent to the processing of your Data (where
              consent is our legal basis for processing your Data), please
              contact us via this e-mail address: dpo@solum- financial.com.
            </TextStyled>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              If you are not satisfied with the way a complaint you make in
              relation to your Data is handled by us, you may be able to refer
              your complaint to the relevant data protection authority. For the
              UK, this is the Information Commissioner's Office (ICO). The ICO's
              contact details can be found on their website at https://
              ico.org.uk/.
            </TextStyled>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              It is important that the Data we hold about you is accurate and
              current. Please keep us informed if your Data changes during the
              period for which we hold it.
            </TextStyled>
            <SubHeader>Links To Other Websites</SubHeader>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              This Website may, from time to time, provide links to other
              websites. We have no control over such websites and are not
              responsible for the content of these websites. This privacy policy
              does not extend to your use of such websites. You are advised to
              read the privacy policy or statement of other websites prior to
              using them.
            </TextStyled>
            <SubHeader>Changes To Business Ownership And Control</SubHeader>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              Solum Financial Limited may, from time to time, expand or reduce
              our business and this may involve the sale and/or the transfer of
              control of all or part of Solum Financial Limited. Data provided
              by Users will, where it is relevant to any part of our business so
              transferred, be transferred along with that part and the new owner
              or newly controlling party will, under the terms of this privacy
              policy, be permitted to use the Data for the purposes for which it
              was originally supplied to us.
            </TextStyled>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              We may also disclose Data to a prospective purchaser of our
              business or any part of it.
            </TextStyled>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              In the above instances, we will take steps with the aim of
              ensuring your privacy is protected.
            </TextStyled>
            <SubHeader>Changes To Business Ownership And Control</SubHeader>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              You may not transfer any of your rights under this privacy policy
              to any other person. We may transfer our rights under this privacy
              policy where we reasonably believe your rights will not be
              affected.
            </TextStyled>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              If any court or competent authority finds that any provision of
              this privacy policy (or part of any provision) is invalid, illegal
              or unenforceable, that provision or part- provision will, to the
              extent required, be deemed to be deleted, and the validity and
              enforceability of the other provisions of this privacy policy will
              not be affected.
            </TextStyled>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              Unless otherwise agreed, no delay, act or omission by a party in
              exercising any right or remedy will be deemed a waiver of that, or
              any other, right or remedy.
            </TextStyled>
          </LiStyled>
          <LiStyled style={{ marginTop: 30 }}>
            <TextStyled>
              This Agreement will be governed by and interpreted according to
              the law of England and Wales. All disputes arising under the
              Agreement will be subject to the exclusive jurisdiction of the
              English and Welsh courts.
            </TextStyled>
            <SubHeader>Changes To This Privacy Policy</SubHeader>
          </LiStyled>
          <TextStyled>
            Solum reserves the right to change this privacy policy as we may
            deem necessary from time to time or as may be required by law. Any
            changes will be immediately posted on the Website and you are deemed
            to have accepted the terms of the privacy policy on your first use
            of the Website following the alterations. You may contact Solum by
            email at dpo@solum-financial.com.
          </TextStyled>
        </PrivacyList>
      </Container>
      <Footer />
    </>
  );
};

export default Privacy;
