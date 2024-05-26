import React from 'react'

import PropTypes from 'prop-types'

const Gallery10 = (props) => {
  return (
    <>
      <div className="gallery10-gallery3 thq-section-padding">
        <div className="gallery10-max-width thq-section-max-width">
          <div className="gallery10-section-title">
            <h2 className="gallery10-text thq-heading-2">{props.heading1}</h2>
            <span className="gallery10-text1 thq-body-large">
              {props.content1}
            </span>
          </div>
          <div className="gallery10-container">
            <div className="gallery10-content">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery10-image1 thq-img-ratio-4-6"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery10-image2 thq-img-ratio-4-6"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery10-image6 thq-img-ratio-4-6"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="gallery10-image7 thq-img-ratio-4-6"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery10-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .gallery10-max-width {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery10-section-title {
            gap: 24px;
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery10-text {
            text-align: center;
          }
          .gallery10-text1 {
            text-align: center;
          }
          .gallery10-container {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .gallery10-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            height: 600px;
            display: flex;
            overflow: auto;
          }
          .gallery10-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery10-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery10-image6 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery10-image7 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          @media (max-width: 767px) {
            .gallery10-section-title {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .gallery10-content {
              height: 450px;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery10.defaultProps = {
  image4Alt: 'image',
  image1Alt: 'PlaceholderImage1302',
  image3Alt: 'image',
  image1Src:
    'https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image2Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMjc0NTExMHww&ixlib=rb-4.0.3&w=1400',
  image2Alt: 'image6',
  image3Src:
    'https://images.unsplash.com/photo-1617140237060-d09a58ba8edd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgzfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA5Mjg2MTV8MA&ixlib=rb-4.0.3&w=1400',
  heading1: 'Photo Gallery',
  image4Src:
    'https://images.unsplash.com/photo-1564089957880-517edea1afc5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA5Mjg2MTV8MA&ixlib=rb-4.0.3&w=1400',
}

Gallery10.propTypes = {
  image4Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Src: PropTypes.string,
  content1: PropTypes.string,
  image2Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Src: PropTypes.string,
  heading1: PropTypes.string,
  image4Src: PropTypes.string,
}

export default Gallery10
