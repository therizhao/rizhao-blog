import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Header } from './styled';
import Footer from '../scaffolds/Footer';
import { tabsData } from '../utils/constants';

const Tabs = styled.div`
  display: flex;
  margin-top: -20px;
  margin-bottom: -12px;
`;

const Tab = styled(Link).attrs({
  activeClassName: 'active',
})`
  font-size: 1.5rem;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--textGray);
  border-bottom: none;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover,
  &.active {
    color: var(--textLink);
    margin-bottom: -2px;
    border-bottom: 1px solid var(--textLink);
  }
`;

const IndexLayout = ({ children }) => (
  <>
    <Header>
      <h1
        style={{
          marginBottom: 0,
          marginTop: 0,
          fontFamily: 'Acumin Pro',
          fontSize: '2.4rem',
        }}
      >
        <Link
          style={{
            fontSize: 'inherit',
            borderBottom: 'none',
            textDecoration: 'none',
          }}
          to={'/'}
        >
          therizhao
        </Link>
      </h1>
    </Header>
    <Tabs>
      {tabsData.map(({ label, path }, index) => {
        return (
          <Tab to={path} key={path}>
            {label}
          </Tab>
        );
      })}
    </Tabs>
    <main style={{ marginTop: '4.5rem' }}>{children}</main>
    <Footer />
  </>
);

export default IndexLayout;
