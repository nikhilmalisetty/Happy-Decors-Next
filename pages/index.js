import React from 'react'
import Head from 'next/head'

import Navbar3 from '../components/navbar3'
import Hero7 from '../components/hero7'
import Gallery7 from '../components/gallery7'
import CTA1 from '../components/cta1'
import Footer3 from '../components/footer3'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Happy Decors</title>
          <meta property="og:title" content="Happy Decors" />
        </Head>
        <Navbar3 rootClassName="navbar3-root-class-name"></Navbar3>
        <Hero7></Hero7>
        <Gallery7></Gallery7>
        <CTA1></CTA1>
        <Footer3></Footer3>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Home
