import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { portfolioTheme } from 'common/theme/portfolio';
import { ResetCSS } from 'common/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'containers/Portfolio/portfolio.style';

import BannerSection from 'containers/Portfolio/Banner';
import Navbar from 'containers/Portfolio/Navbar';
import AwardsSection from 'containers/Portfolio/Awards';
import PortfolioShowcase from 'containers/Portfolio/PortfolioShowcase';
import ProcessSection from 'containers/Portfolio/Process';
import SkillSection from 'containers/Portfolio/Skill';
import CallToAction from 'containers/Portfolio/CallToAction';
import TestimonialSection from 'containers/Portfolio/Testimonial';
import ClientsSection from 'containers/Portfolio/Clients';
import ContactSection from 'containers/Portfolio/Contact';
import Footer from 'containers/Portfolio/Footer';
import Seo from 'components/seo';

const Portfolio = () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
        <Seo title="Portfolio | A react next landing page" />
        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <PortfolioShowcase />
          <AwardsSection />
          <ProcessSection />
          <SkillSection />
          <CallToAction />
          <TestimonialSection />
          <ClientsSection />
          <ContactSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Portfolio;
