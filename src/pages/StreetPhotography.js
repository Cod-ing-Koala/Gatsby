import React from 'react';
import{Link} from 'gatsby';
import Layout from '../components/layout'
import ImageStreet from '../components/StreetPhotographySection/index'
import SEO from '../components/seo'
import StreetSection from '../components/StreetPhotographySection/StreetSection'
import Navbar from '../components/Navbar';

const Street = () => (
  <Layout>
    <SEO title="Street" />
   
    <StreetSection/>

    <ImageStreet/>
   
  </Layout>
)

export default Street