import React, { useState } from 'react';
import{Link} from 'gatsby';
import Layout from '../components/layout'
import ImagePortrait from '../components/PortraitsSection/index';
import SEO from '../components/seo'
import PortraitSection from '../components/PortraitsSection/PortraitSection';
import Navbar from '../components/Navbar';

const Portraits = () => (
 
  <Layout>
    <SEO title="Portraits" />
    
    <PortraitSection/>

    <ImagePortrait/>

    
  </Layout>
  )

export default Portraits
