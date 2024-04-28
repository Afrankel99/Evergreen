import React from 'react';
import { graphql } from 'gatsby';
import classNames from 'classnames';
import Layout from '../components/Common/Layout';
import Section from '../components/Common/Section';
import Button from '../components/Common/Button';
import leafLeft from '../images/leafLeft.png';
import leafRight from '../images/leafRight.png';

import * as styles from './404.module.scss';

const FourOhFour = ({ location, data }) => {
  const { settings } = data;

  return (
    <Layout location={location} settings={settings}>
      <Section data-theme="light" sectionSpacing="m">
        <div className={styles.contentContainer}>
          <img src={leafLeft} className={classNames(styles.leaf, styles.left)} />

          <div className={styles.title}>
            <h1>404</h1>
            <h3>Not found</h3>
          </div>
          <Button title="Go back home" to="/">
            Go back home
          </Button>
          <img src={leafRight} className={classNames(styles.leaf, styles.right)} />
        </div>
      </Section>
    </Layout>
  );
};

export default FourOhFour;

export const query = graphql`
  query FourOhFourPage {
    settings: sanitySettings {
      ...NavbarFragment
      ...FooterFragment
    }
  }
`;
