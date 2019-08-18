import React from 'react';
import { ReactComponent as Logo } from '../../logo.svg';
import { FooterDiv, OnChainBranding } from './styled';

export default function Footer() {
  return (
    <FooterDiv>
      <OnChainBranding>Le Prix Du Bitcoin est propuslé par: </OnChainBranding>
      <Logo
        className="App-logo"
        onClick={() => window.open('http://www.onchainjobs.io', '_blank')}
      />
    </FooterDiv>
  );
}
