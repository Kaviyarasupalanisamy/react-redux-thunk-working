import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function navigation()
{
  return(<React.Fragment>
      <Link to="/home">Home</Link>
      {'\u00A0'}
      <Link to="/aboutus">Aboutus</Link>
      {'\u00A0'}
      <Link to="/product">Product</Link>
      {'\u00A0'}
      <Link to="/productreduxdescribe">ReduxwithThunk</Link>
      {'\u00A0'}
      <Link to="/arraymap">Array-Map - table</Link>
      </React.Fragment>
      );
}

export default navigation;