import React from 'react'
import Head from 'next/head'

import Navbar3 from '../components/navbar3'
import Contact11 from '../components/contact11'
import Footer3 from '../components/footer3'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - Happy Decors</title>
          <meta property="og:title" content="Contact - Happy Decors" />
        </Head>
        <Navbar3 rootClassName="navbar3-root-class-name4"></Navbar3>
        <Contact11></Contact11>
        <Footer3 rootClassName="footer3-root-class-name"></Footer3>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Contact
