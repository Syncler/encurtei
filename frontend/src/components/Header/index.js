import React  from 'react';
import { Logo, HeaderContainer } from './styles';

import Icon from '../../assets/icone.png';

function Header(props) {

  return (
    <>
      <HeaderContainer>
        <Logo src={Icon} alt="Encurtei - Encurtador de URL" />
        <h1>Encurtei</h1>
        <p>{props.children}</p>
      </HeaderContainer>
    </>
    )
}

export default Header;