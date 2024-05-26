import React from 'react'

import PropTypes from 'prop-types'

const Hero7 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="hero7-max-width thq-section-max-width">
          <div className="hero7-content">
            <h1 className="hero7-text thq-heading-1">{props.heading1}</h1>
            <p className="hero7-text1 thq-body-large">{props.content1}</p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero7-max-width {
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .hero7-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 1000px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero7-text {
            text-align: center;
          }
          .hero7-text1 {
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

Hero7.defaultProps = {
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  action1: 'Main action',
  heading1: 'Catchy and engaging hero headline here',
  action2: 'Secondary action',
}

Hero7.propTypes = {
  content1: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
  action2: PropTypes.string,
}

export default Hero7
