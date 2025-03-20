import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import strings from './translations';
import { Link } from 'react-router-dom';
import { If, Then } from 'react-if';

export default function TemporaryDrawer(props) {
  const { changeLanguage } = props;
  const [state, setState] = useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{ direction: strings.direction, padding: '1rem' }}>
        <nav>
          <ul className="navbar-nav">
            {/* ✅ Home */}
            <li className="nav-item">
              <Link className="nav-link" to="/">{strings.homepage}</Link>
            </li>

            {/* ✅ Pricing (if homepage) */}
            <If condition={window.location.pathname === '/'}>
              <Then>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#pricing">{strings.pricing}</a>
                </li>
              </Then>
            </If>

            {/* ✅ FAQ */}
            <li className="nav-item">
              <a className="nav-link" href="/faq">{strings.faq}</a>
            </li>

            {/* ✅ Terms & Conditions */}
            <li className="nav-item">
              <a
                className="nav-link"
                href={`/#`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {strings.termsAndConditions}
              </a>
            </li>

            {/* ✅ Tutorial */}
            <li className="nav-item">
              <a className="nav-link" href="/tutorial">{strings.Tutorial}</a>
            </li>

           

            <Divider />

           {/* ✅ Sign In Button */}
<li className="nav-item" style={{ marginTop: '15px' }}>
  <a
    href="https://staging.aiprice.armsit.com/signin"
    target="_blank"
    rel="noopener noreferrer"
    className="btn"
    style={{
      width: '100%',
      background: 'none',
      border: '2px solid black',
      borderRadius: 0,
      padding: '10px',
      fontWeight: 'bold',
      color: 'black',
      cursor: 'pointer',
      textAlign: 'center',
      display: 'inline-block',
      textDecoration: 'none',
    }}
  >
    {strings.Signin}
  </a>
</li>

{/* ✅ Sign Up Button */}
<li className="nav-item" style={{ marginTop: '10px' }}>
  <a
    href="https://staging.aiprice.armsit.com/signup"
    target="_blank"
    rel="noopener noreferrer"
    className="btn"
    style={{
      width: '100%',
      background: 'linear-gradient(245.49deg, #00998A 15.66%, #71C6BE 84.34%)',
      border: 'none',
      borderRadius: 0,
      padding: '10px',
      fontWeight: 'bold',
      color: 'white',
      cursor: 'pointer',
      textAlign: 'center',
      display: 'inline-block',
      textDecoration: 'none',
    }}
  >
    {strings.SignUp}
  </a>
</li>


            {/* ✅ Language Switch Button */}
            <li className="nav-item" style={{ marginTop: '20px' }}>
              <button
                type="button"
                className="btn"
                style={{
                  width: '100%',
                  background: "#001E1C",
                  color: 'white', // Text color black
                  border: '2px solid black',
                  borderRadius: 0,
                  padding: '10px',
                  fontWeight: 'bold',
                  
                  cursor: 'pointer',
                }}
                onClick={() => {
                  const newLang = strings.getLanguage() === 'en' ? 'ar' : 'en';
                  changeLanguage(newLang);
                }}
              >
                {strings.getLanguage() === 'en' ? 'Arabic' : 'English'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </Box>
  );

  return (
    <div className="navItem">
      {[strings.direction].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            aria-label="open drawer"
            onClick={toggleDrawer(anchor, true)}
            edge="start"
            sx={{ ml: 0, color: 'black' }}
          >
            <MenuIcon sx={{ color: 'black' }} />
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
