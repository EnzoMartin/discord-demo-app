import React from 'react';
import {NavLink} from 'react-router-dom';
import Constants from '../constants';

function Tab({ id, name, index }){
  return (
    <li>
      <NavLink exact activeClassName={Constants.SELECTED_CLASS_NAME} to={Constants.ROUTE_MODAL_DETAIL.replace(':id', id)} className="tab" tabIndex={index}>
        {id}
      </NavLink>
      <button className="btn delete">delete</button>
    </li>
  );
}

export default Tab;
