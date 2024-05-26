import React from 'react'

import PropTypes from 'prop-types'

const Footer42 = (props) => {
  return (
    <>
      <div className="footer42-footer7 thq-section-padding">
        <div className="footer42-max-width thq-section-max-width">
          <div className="footer42-content">
            <div className="footer42-logo">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="footer42-logo1"
              />
            </div>
            <div className="footer42-links">
              <span className="thq-body-small">{props.link1}</span>
              <span className="thq-body-small">{props.link2}</span>
              <span className="thq-body-small">{props.link3}</span>
              <span className="thq-body-small">{props.link4}</span>
              <span className="thq-body-small">{props.link5}</span>
            </div>
          </div>
          <div className="footer42-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer42-row">
              <div className="footer42-container">
                <span className="thq-body-small">© 2024 TeleportHQ</span>
              </div>
              <div className="footer42-footer-links">
                <span className="footer42-text6 thq-body-small">
                  {props.privacyLink}
                </span>
                <span className="thq-body-small">{props.termsLink}</span>
                <span className="thq-body-small">{props.cookiesLink}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer42-footer7 {
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
          .footer42-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer42-content {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer42-logo {
            gap: 24px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer42-logo1 {
            height: 2rem;
          }
          .footer42-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
          }
          .footer42-credits {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer42-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer42-container {
            display: flex;
            align-items: flex-start;
          }
          .footer42-footer-links {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .footer42-text6 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
          }
          @media (max-width: 767px) {
            .footer42-row {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer42-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer42-links {
              flex-direction: column;
            }
            .footer42-footer-links {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer42.defaultProps = {
  privacyLink: 'Privacy Policy',
  link1: 'Link 1',
  link5: 'Link 5',
  link3: 'Link 3',
  image1Src: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  termsLink: 'Terms of Service',
  link2: 'Link 2',
  link4: 'Link 4',
  cookiesLink: 'Cookies Settings',
  image1Alt: 'Logo',
}

Footer42.propTypes = {
  privacyLink: PropTypes.string,
  link1: PropTypes.string,
  link5: PropTypes.string,
  link3: PropTypes.string,
  image1Src: PropTypes.string,
  termsLink: PropTypes.string,
  link2: PropTypes.string,
  link4: PropTypes.string,
  cookiesLink: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Footer42
