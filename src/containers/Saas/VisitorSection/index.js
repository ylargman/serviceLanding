import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Card from 'common/components/Card';
import Image from 'common/components/Image';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import VisitorSectionWrapper, { SectionObject } from './visitor.style';

//import ImageOne from 'common/assets/image/saas/websiteVisitor.png';
import ImageOne from 'common/assets/image/saas/growth1031x770.png';
// import ImageOne from 'common/assets/image/saas/saasvisitor1.png';
// import ImageBg from 'common/assets/image/saas/green_bg80.png';
//import ImageBg from 'common/assets/image/saas/visitor_bg.png';
import ImageBg from 'common/assets/image/saas/green_bg.png';

const VisitorSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  btnStyle,
}) => {
  return (
    <VisitorSectionWrapper id="visitorSection">
      <SectionObject>
        <Card className="objectWrapper" {...imageWrapper}>
          <Zoom>
            <Image src={ImageBg} alt="BgImage" />
          </Zoom>
          <Card className="dashboardWrapper" {...imageWrapper}>
            <Fade left>
              <Image src={ImageOne} alt="VisitorDashboard1" />
            </Fade>
          </Card>
        </Card>
      </SectionObject>
      <Container>
        <Box {...textArea}>
          <FeatureBlock
            title={
              <Heading
                content={<span style={{whiteSpace: 'pre-line'}}>{`あなたの会社を
                成長させます`}</span>}
                {...title}
              />
            }
            description={
              <Text
                content="Altegaは、圧倒的なスピード、SEO、Webサイトの品質で、成長に必要な顧客を獲得します。Altegaを使えば、夢のようなサイトを簡単に手に入れることができます。 Altegaは、お客様がビジネスに集中できるように、ウェブサイトの技術的な悩みから解放します。"
                {...description}
              />
            }
            button={
              <a href="mailto:altega.games@gmail.com?subject=【問い合わせ】利用について">
                <Button title="問い合わせ" {...btnStyle} />
              </a>
            }
          />
        </Box>
      </Container>
    </VisitorSectionWrapper>
  );
};

VisitorSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

VisitorSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '45%'],
    ml: [0, 0, '58%'],
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  title: {
    fontSize: ['20px', '26px', '26px', '36px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.5',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#000',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'secondaryWithBg',
  },
};

export default VisitorSection;
