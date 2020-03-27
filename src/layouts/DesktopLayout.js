import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { tabsData } from '../utils/constants';
import Footer from '../scaffolds/Footer';

const MainWrapper = styled.div`
  margin: 0 auto;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 5rem;
  padding-bottom: 7rem;
  max-width: 100rem;
`;

const BodyWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr 2fr;
  grid-column-gap: 3rem;
  margin-top: 10rem;
`;

const ChildWrapper = styled.div`
  max-width: 59rem;
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -3px;
`;

const Tab = styled(Link).attrs({
  activeClassName: 'active',
})`
  font-size: 1.4rem;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--textGray);
  border-bottom: none;
  margin-bottom: 1rem;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover,
  &.active {
    color: var(--textLink);
    border-bottom: none;
  }
`;

const DesktopLayout = ({ children }) => {
  return (
    <MainWrapper>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '95rem',
        }}
      >
        <h1
          style={{
            marginBottom: 0,
            marginTop: 0,
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
        <p
          style={{
            color: 'var(--textGray)',
            fontSize: '1rem',
            cursor: 'wait',
          }}
        >
          don't forget to dream
        </p>
      </div>
      <BodyWrapper>
        <Tabs>
          {tabsData.map(({ label, path }, index) => {
            return (
              <Tab to={path} key={path}>
                {label}
              </Tab>
            );
          })}
        </Tabs>
        <ChildWrapper>
          {children}
          <Footer />
        </ChildWrapper>
      </BodyWrapper>
    </MainWrapper>
  );
};

export default DesktopLayout;
