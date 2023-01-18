import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import { ResetCSS } from 'common/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'containers/SaasModern/sassModern.style';

//import BannerSection from 'containers/Saas/BannerSection';
import BannerSection from 'containers/SaasModern/Banner';
import Banner from 'containers/CryptoModern/Banner';
import Navbar from 'containers/SaasModern/Navbar';
import WorkingProcessSection from 'containers/SaasModern/WorkingProcess';
import PricingSection from 'containers/SaasModern/Pricing';
import PartnerSection from 'containers/SaasModern/Partner';
import FaqSection from 'containers/SaasModern/Faq';
import TrialSection from 'containers/SaasModern/Trial';
import InfoSection from 'containers/SaasModern/Info';
import FeatureSection from 'containers/SaasModern/Feature';
import UpdateScreen from 'containers/SaasModern/UpdateScreen';
import TestimonialSection from 'containers/SaasModern/Testimonial';
import VisitorSection from 'containers/Saas/VisitorSection';
import Footer from 'containers/SaasModern/Footer';
import SEO from 'components/seo';
import CustomerTracking from 'containers/SassMinimal/CustomerTracking';

export default () => {
  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <SEO title="Altega | 最先端のウェブサイトを日本向けにアレンジ" />

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <FeatureSection />
          <VisitorSection />
          {/* <InfoSection /> */}
          <PartnerSection />
          {/* <CustomerTracking /> */}
          {/* <WorkingProcessSection /> */}
          {/* <WorkingProcessSection /> */}
          
          {/* <UpdateScreen />
          <PricingSection />
          <TestimonialSection />
          <FaqSection />
          <TrialSection /> */}
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
