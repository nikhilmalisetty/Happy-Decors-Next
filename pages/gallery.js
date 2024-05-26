import React from 'react'
import Head from 'next/head'

import Navbar3 from '../components/navbar3'
import Gallery10 from '../components/gallery10'
import Footer3 from '../components/footer3'

const Gallery = (props) => {
  return (
    <>
      <div className="gallery-container">
        <Head>
          <title>Gallery - Happy Decors</title>
          <meta property="og:title" content="Gallery - Happy Decors" />
        </Head>
        <Navbar3 rootClassName="navbar3-root-class-name3"></Navbar3>
        <Gallery10></Gallery10>
        <Footer3 rootClassName="footer3-root-class-name1"></Footer3>
      </div>
      <style jsx>
        {`
          .gallery-container {
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

export default Gallery
