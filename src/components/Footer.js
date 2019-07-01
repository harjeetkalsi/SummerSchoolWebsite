import React from 'react';
import styled from 'styled-components';
import { Text, Flex, Box } from 'rebass';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import ContentfulLogo from './Logo/Contenful.svg';
import GatsbyLogo from './Logo/Gatsby.svg';
import ConsentedLogo from './Logo/consented-logo-white.png'
import hackingEducationLogo from './Logo/hE-logo-white-croped.png'

const FooterContainer = styled.footer`
  padding: 1em;
  background: black;
  color: white;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RenponsiveLogo = styled.img`
  width: 100px;
  height: 25px;

  @media (min-width: 400px) {
    width: 200px;
    height: 150px;
  }
`;

const Logo = ({ url, logo, alt = '' }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <RenponsiveLogo src={logo} alt={alt} />
    </a>
  </Box>
);

Logo.propTypes = {
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

const Footer = () => (
  <FooterContainer>
    <Fade bottom>
      <span>
        <Text
          mb={2}
          pb={1}
          style={{
            textTransform: 'uppercase',
            borderBottom: 'white 3px solid',
            display: 'table',
          }}
        >
          Brought to you by
        </Text>
      </span>
      <Flex justifyContent="center" alignItems="center">
        <Logo
          url="https://www.consented.co.uk/"
          logo={ConsentedLogo}
          alt="Powered by Contentful"
        />
        <Text m={2} fontSize={4}>
          <span role="img" aria-label="heart">
            &
          </span>
        </Text>
        <Logo
          url="https://www.instagram.com/hackingeducation/?hl=en"
          logo={hackingEducationLogo}
          alt="Gatsby Logo"
        />
      </Flex>
    </Fade>
  </FooterContainer>
);

export default Footer;
