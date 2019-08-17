import React from 'react';
import { ReactComponent as Logo } from '../../logo.svg';

export default function Footer() {
  return (
    <div className="footer">
      <p className="propulsion">Le Prix Du Bitcoin est propuslé par: </p>
      <Logo
        className="App-logo"
        onClick={() => window.open('http://www.onchainjobs.io', '_blank')}
      />
    </div>
  );
}
