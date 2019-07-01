import React from 'react';
import styled from 'styled-components';
import { Section } from 'react-scroll-section';
import { Heading } from 'rebass';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';
import LinkAnimated from './LinkAnimated';
import image from './Logo/hackney.png';

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;
  background: linear-gradient( rgba(0, 0, 0, 0), 80%, white ), url(${image});
  background-repeat: no-repeat;
  background-position: center center; 
`;

const DefaultBackground = () => <div />;

const Container = ({ id, children, Background = DefaultBackground }) => (
    <Section id={id} style={{ position: 'relative' }}>
        <Background />
        <SectionContainer>{children}</SectionContainer>
    </Section>
);

Container.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    Background: PropTypes.func,
};

const Header = ({ name, icon = '', label = '' }) => (
    <Slide left>
        <Heading color="secondaryDark" mb={4}>
            <LinkAnimated selected>
                {name}
                {icon && (
                    <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
            {icon}
          </span>
                )}
            </LinkAnimated>
        </Heading>
    </Slide>
);

Header.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    label: PropTypes.string,
};

export default {
    Container,
    Header,
};
