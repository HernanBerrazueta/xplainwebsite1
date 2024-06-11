import React, { useEffect } from "react";
import Footer from "../../../components/footer/Footer";
import {
  TextStyled,
  Container,
  TitleStyled,
  Header,
  CookiesList,
  LiStyled,
  LinkStyled,
} from "./Cookies.styled";

const Cookies: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <Header>Cookies Policy</Header>
        <TextStyled>
          Xplainfinancial.com (Website) may place and access certain Cookies on
          your computer. Solum Financial Limited (Solum uses Cookies to improve
          your experience of using the Website and to improve our range of
          products and services. Solum has carefully chosen these Cookies and
          has taken steps to ensure that your privacy is always protected and
          respected.
        </TextStyled>
        <TextStyled>
          All Cookies used by this Website are used in accordance with current
          UK and EU Cookie Law.
        </TextStyled>
        <TextStyled>
          Before the Website places Cookies on your computer, you will be
          presented with a message bar requesting your consent to set those
          Cookies. By giving your consent to the placing of Cookies, you are
          enabling Solum to provide a better experience and service to you. You
          may, if you wish, deny consent to the placing of Cookies; however
          certain features of the Website may not function fully or as intended.
        </TextStyled>
        <TextStyled>
          You can choose to enable or disable Cookies in your internet browser.
          By default, most internet browsers accept Cookies but this can be
          changed. For further details, please consult the help menu in your
          internet browser.
        </TextStyled>
        <TextStyled>
          You can choose to delete Cookies at any time; however you may lose any
          information that enables you to access the Website more quickly and
          efficiently including, but not limited to, personalization settings.
        </TextStyled>
        <TextStyled>
          It is recommended that you ensure that your internet browser is
          up-to-date and that you consult the help and guidance provided by the
          developer of your internet browser if you are unsure about adjusting
          your privacy settings.
        </TextStyled>
        <TextStyled>
          For more information generally on cookies, including how to disable
          them, please refer to{" "}
          <LinkStyled to="https://aboutcookies.org">
            aboutcookies.org.
          </LinkStyled>
          You will also find details on how to delete cookies from your
          computer.
        </TextStyled>
        <TitleStyled>What Are Cookies</TitleStyled>
        <TextStyled>
          Cookies are text files with small pieces of data that are used to
          identify your computer as you use a computer network. Specific cookies
          known as HTTP cookies are used to identify specific users and improve
          your web browsing experience.
        </TextStyled>
        <TextStyled>
          Data stored in a cookie is created by the server upon your connection.
          This data is labelled with an ID unique to you and your computer.
        </TextStyled>
        <TextStyled>
          When the cookie is exchanged between your computer and the network
          server, the server reads the ID and knows what information to
          specifically serve to you.
        </TextStyled>
        <TitleStyled>Why do We Use Them</TitleStyled>
        <TextStyled style={{ marginBottom: 10 }}>
          Our websites use cookies to:
        </TextStyled>
        <CookiesList>
          <LiStyled>
            <TextStyled>
              Store any preferences you have made and display content to you in
              a more personalized way
            </TextStyled>
          </LiStyled>
          <LiStyled>
            <TextStyled>
              Evaluate our websites' advertising and promotional effectiveness
            </TextStyled>
          </LiStyled>
          <LiStyled>
            <TextStyled>
              Gain insight into the nature of our audience so we can tailor our
              content accordingly
            </TextStyled>
          </LiStyled>
        </CookiesList>
        <TextStyled>
          We will always endeavour to make sure our website contains clear and
          easy to find information about our cookies.
        </TextStyled>
        <TitleStyled style={{ marginBottom: 10 }}>
          What Types Of Cookies Do We Use?
        </TitleStyled>
        <CookiesList>
          <LiStyled>
            <TextStyled>
              Per-session cookies — These are only used while navigating a
              website. They are stored in random access memory and never written
              to the hard drive. When your session ends, session cookies are
              automatically deleted. This type of cookie also helps the “back”
              button or third-party anonymizer plugins work.
            </TextStyled>
          </LiStyled>
          <LiStyled>
            <TextStyled>
              First party cookies — Whether a cookie is 'first' party refers to
              the website or domain placing the cookie. First party cookies in
              basic terms are cookies set by a website visited by the user – the
              website displayed in the URL window. Third party cookies are
              cookies that are set by a domain other than the one being visited
              by the user. If a user visits a website and a separate company
              sets a cookie through that website this would be a third-party
              cookie.
            </TextStyled>
          </LiStyled>
        </CookiesList>
        <TextStyled style={{ marginBottom: 10 }}>
          Below is a list of the cookies that we use. We have tried to ensure
          this is complete and up to date, but if you think that we have missed
          a cookie or there is any discrepancy, please let us know:
        </TextStyled>
        <CookiesList>
          <LiStyled>
            <TextStyled>Cookie: Google Analytics</TextStyled>
          </LiStyled>
          <LiStyled>
            <TextStyled>Type: Site analytics (Google Analytics)</TextStyled>
          </LiStyled>
          <LiStyled>
            <TextStyled>
              Description: Google (
              <LinkStyled to="www.google.com">www.google.com</LinkStyled>)
              operates the Google display Network: a collection of millions of
              websites and mobile applications that are powered by display
              advertising, including many Google services like YouTube. Google
              also operates the doubleClick digital advertising platform: the ad
              technology foundation to create, transact, and manage digital
              advertising for the world's buyers, creators, and sellers. The
              doubleClick platform includes the doubleClick Advertising Exchange
              and double Click Bid Manager. To learn more about how Google
              collect and use information for online advertising, please visit{" "}
              <LinkStyled to="https://policies.google.com/privacy?hl=en">
                Google Privacy Policy
              </LinkStyled>
              .
            </TextStyled>
          </LiStyled>
        </CookiesList>
        <TitleStyled>Opting Out Of Cookies</TitleStyled>
        <TextStyled>
          First Party Cookies. If you would rather we didn't use cookies when
          you visit us, see below for information on how to configure your
          browser settings to reject cookies.
        </TextStyled>
        <TitleStyled>Browser-Level Cookie Controls</TitleStyled>
        <TextStyled style={{ marginBottom: 10 }}>
          Most browsers allow you to manage cookie settings. These settings can
          usually be found in the 'Settings', 'Options' or 'Preferences' menu of
          your browser. The links below are provided to help you find the
          settings for some common browsers.
        </TextStyled>
        <CookiesList>
          <LiStyled>
            <TextStyled>
              Manage cookie settings in{" "}
              <LinkStyled to="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en">
                Chrome{" "}
              </LinkStyled>
              and{" "}
              <LinkStyled to="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid&hl=en">
                Chrome Android{" "}
              </LinkStyled>
              and{" "}
              <LinkStyled to="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DiOS&hl=en">
                Chrome iOS{" "}
              </LinkStyled>
            </TextStyled>
          </LiStyled>
          <LiStyled>
            <TextStyled>
              Manage cookie settings in{" "}
              <LinkStyled to="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectlocale=en-US&redirectslug=enable-and-disable-cookies-website-preferences">
                Firefox{" "}
              </LinkStyled>
            </TextStyled>
          </LiStyled>
          <LiStyled>
            <TextStyled>
              Manage cookie settings in{" "}
              <LinkStyled to="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">
                Internet Explorer{" "}
              </LinkStyled>
            </TextStyled>
          </LiStyled>
          <LiStyled>
            <TextStyled>
              Manage cookie settings in{" "}
              <LinkStyled to="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd">
                Microsoft Edge{" "}
              </LinkStyled>
            </TextStyled>
          </LiStyled>
          <LiStyled>
            <TextStyled>
              Manage cookie settings in{" "}
              <LinkStyled to="https://support.apple.com/en-gb/guide/safari/sfri11471/mac">
                Safari{" "}
              </LinkStyled>
              and{" "}
              <LinkStyled to="https://support.apple.com/en-gb/HT201265">
                Safari iOS{" "}
              </LinkStyled>
            </TextStyled>
          </LiStyled>
        </CookiesList>
      </Container>
      <Footer />
    </>
  );
};

export default Cookies;
