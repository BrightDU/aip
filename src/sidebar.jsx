import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import strings from './translations';
import { Link } from 'react-router-dom';
import { If, Then } from 'react-if'


export default function TemporaryDrawer(props) {
  const {changeLanguage} = props
  const [state, setState] = useState({
    left: false,
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      {/* <Divider /> */}
      <div style={{ justifyContent: strings.direction, display: 'flex' }} className="collapse sidebar-collapse" id="navbarResponsive">
        <div style={{ alignItems: 'end' }}>
          {/* <ul className="navbar-nav ms-auto my-2 my-lg-0" style={{ textAlign: strings.direction }}>
            <li className="nav-item"><Link className="nav-link navItem" to="/">{strings.homepage}</Link></li>
            <li className="nav-item"><a className="nav-link navItem" href="#pricing">{strings.pricing}</a></li>
            <li className="nav-item"><a className="nav-link navItem" href="#contact">{strings.contactUs}</a></li>
            <li className="nav-item"><a className="nav-link navItem" target="_" href={`./terms-and-conditions-${strings.getLanguage()}.pdf`}>{strings.termsAndConditions}</a></li>
            <li className="nav-item"><a className="nav-link navItem" target="_" href={`/faq`}>{strings.faq}</a></li>
            <li className="nav-item navItem"><button onClick={() => window.location = '/demo'} style={{ marginTop: '-5px' }} type="button" className="btn btn-success">{strings.demo}</button></li>
          </ul> */}
          <nav>
            <ul className="navbar-nav" id="navbar-nav" style={{ textAlign: strings.direction, padding: '1rem'}}>
              <li className="nav-item">
                <Link className='nav-link' to="/#">
                  {strings.homepage}
                </Link>
                {/* <a className="nav-link" href="" id="navbarDropdownMenuLink"  aria-haspopup="true" aria-expanded="false">
                                    </a> */}
                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li>
                                                <a className="dropdown-item" href="/theme-one">Homepage-1</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/theme-two">Homepage-2</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/theme-three">Homepage-3</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/theme-four">Homepage-4</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/theme-five">Homepage-5</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/theme-six">Homepage-6</a>
                                            </li>
                                        </ul> */}
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/faq">{strings.About}</a>
              </li>

              <If condition={window.location.pathname === '/'}>
                <Then>
                  <li className="nav-item">
                    <a className="nav-link scroll" href="#pricing">{strings.pricing}</a>
                  </li>
                </Then>
              </If>
              <li className="nav-item">
                <a className="nav-link" href="/faq">{strings.faq}</a>
              </li>
              {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Pages
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li>
                                                    <a className="dropdown-item" href="/pricing">{strings.pricing}</a>
                                                </li>
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#" data-toggle="dropdown">Inner Pages<span className="badge badge-pill badge-warning ml-2">New</span></a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="/download-page">Download</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/subscribe-page">Newsletter</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/thank-you">Thank you</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/coming-soon">Coming Soon</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/error-page">404</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#" data-toggle="dropdown">Blog Pages</a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="/blog-two-column">Blog- 2 Column</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/blog-three-column">Blog- 3 Column</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/blog-left-sidebar">Blog- Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/blog-right-sidebar">Blog- Right Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#" data-toggle="dropdown">Blog Details</a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="/blog-details-left-sidebar">Blog Details- Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/blog-details-right-sidebar">Blog Details- Right Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#" data-toggle="dropdown">Accounts<span className="badge badge-pill badge-warning ml-2">New</span></a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="/login">Login</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/signup">Signup</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/forgot">Reset Password</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/reviews">Reviews</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/faq">FAQ</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/contact-page">Contact</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item disabled" href="/#">More Coming Soon</a>
                                        </li>
                                    </ul>
                                </li> */}
              <li className="nav-item">
                <a target="_blank" className="nav-link" href={`/terms-and-conditions-${strings.getLanguage()}.pdf`}>{strings.termsAndConditions}</a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link scroll" href="#contact">{strings.contactUs}</a>
              </li>
              <li>

              <li className="nav-item">
                <a className="nav-link" href="/faq">{strings.Tutorial}</a>
              </li>
                {/* <div className="navbar2" style={{ textAlign: 'end' }}>
                                          </div> */}
                  <Divider />
                <span className="navbar-text" style={{ padding: '10px' }}>
                  <button type="button" className="btn btn-secondary" value={strings[strings.getLanguage()]} onClick={(e) => {
                    changeLanguage(e.target.value)
                  }}>{strings[strings.getLanguage()]}</button>
                </span>

              </li>
            </ul>
          </nav>
        </div>

      </div>

    </Box>
  );

  return (
    <div className="navItem">
      {[strings.direction].map((anchor) => (
        <React.Fragment key={anchor}>
        <IconButton
  color="inherit"
  aria-label="open drawer"
  onClick={toggleDrawer(anchor, true)}
  edge="start"
  sx={{
    mr: 0, // Remove right margin
    ml: -10, // Remove left margin
    ...(state.opened && { display: 'none' }),
    color: 'white' // Set the icon color to white
  }}
>
  <MenuIcon sx={{ color: 'white' }} />
</IconButton>


          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}

          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
