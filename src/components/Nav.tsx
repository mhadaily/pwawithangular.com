import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { StaticQuery, graphql } from 'gatsby';
import config from '../../config/SiteConfig';

export class Nav extends React.Component<{ id: string }, { isSticky: boolean; popUpOpen: boolean }> {
  public state = { isSticky: false, popUpOpen: false };
  public menuItems: { to: string; label: string }[] = [
    { to: 'Features', label: 'Features' },
    { to: 'Author', label: `Authors` },
    { to: 'Video', label: 'Video' },
    { to: 'Testimonials', label: 'Testimonial' },
    { to: 'Footer', label: 'Contact' },
  ];

  private stickyPoint = 90;

  constructor(props: { id: string }) {
    super(props);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  componentDidMount() {
    const navbarSticky = () => {
      if (window.pageYOffset >= this.stickyPoint) {
        this.setState({ isSticky: true });
      } else {
        this.setState({ isSticky: false });
      }
    };
    window.addEventListener('scroll', navbarSticky);
    navbarSticky();
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            ngPWALogo: file(relativePath: { eq: "assets/angular-pwa-logo.png" }) {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={(data: any) => (
          <nav id={this.props.id} className={`st-nav navbar main-nav navigation fixed-top ${this.state.isSticky ? 'navbar-sticky' : ''}`}>
            <div className="container">
              <ul className="st-nav-menu nav navbar-nav">
                <li className="st-nav-section nav-item">
                  <a onClick={this.scrollToTop} className="navbar-brand">
                    <img src={data.ngPWALogo.childImageSharp.fluid.src} alt="PWA With Angular" className="logo  logo-sticky" />
                  </a>
                </li>
                <li className="st-nav-section st-nav-primary nav-item">
                  {this.menuItems.map((menu, i) => {
                    return (
                      <Link
                        activeClass="active"
                        to={menu.to}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-90}
                        className="st-root-link nav-link"
                        key={i}
                      >
                        {menu.label}
                      </Link>
                    );
                  })}
                </li>
                <li
                  className={`st-nav-section st-nav-mobile nav-item ${this.state.popUpOpen ? 'st-popup-active' : ''}`}
                  onClick={() => {
                    this.setState({ popUpOpen: !this.state.popUpOpen });
                  }}
                >
                  <button className="st-root-link navbar-toggler" type="button">
                    <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" />
                  </button>
                  <div className="st-popup">
                    <div className="st-popup-container">
                      <a
                        className="st-popup-close-button"
                        onClick={() => {
                          this.setState({ popUpOpen: !this.state.popUpOpen });
                        }}
                      >
                        Close
                      </a>
                      <div className="st-dropdown-content-group">
                        {/* <h4 className="text-uppercase regular">Pages</h4> */}
                        {this.menuItems.map((menu, i) => {
                          return (
                            <Link
                              activeClass="active"
                              to={menu.to}
                              spy={true}
                              smooth={true}
                              duration={500}
                              offset={-90}
                              className="st-root-link nav-link"
                              key={i}
                            >
                              {menu.label}
                            </Link>
                          );
                        })}
                      </div>
                      <div className="st-dropdown-content-group bg-6 b-t">
                        <a href={config.Amazon_Link}>Order The Book</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        )}
      />
    );
  }
}
