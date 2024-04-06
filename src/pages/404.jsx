import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Common/Layout';
import Section from '../components/Common/Section';
import Button from '../components/Common/Button';

const FourOhFour = ({ location, data }) => {
  const { settings } = data;

  return (
    <Layout location={location} settings={settings}>
      <Section>
        <div>
          <h2>404 Not found</h2>
          <Button size="xl" to="/">
            Go back home
          </Button>
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
