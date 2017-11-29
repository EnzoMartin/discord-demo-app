import React from 'react';
import {NavLink} from 'react-router-dom';

import Constants from '../constants';

function NavItem(props){
  return (
    <li>
      <NavLink exact activeClassName={Constants.SELECTED_CLASS_NAME} {...props} />
    </li>
  );
}

export default NavItem;
