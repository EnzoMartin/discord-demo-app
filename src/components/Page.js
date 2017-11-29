import React from 'react';
import '../styles/Page.css';

function Page({ children, id }){
  return (
    <div id={id} className="container page">
      {children}
    </div>
  );
}

export default Page;
