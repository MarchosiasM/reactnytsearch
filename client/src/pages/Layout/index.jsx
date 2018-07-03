import React from 'react';
import Button from '../../components/Button';


const Layout = () => (
  <div className="container-fluid">
    <div className="jumbotron">
      <h1 className="display-4" style={{ fontFamily: 'Cardo' }}>New York Times Article Index</h1>
    </div>
    <ul>
      <Button route="/" text="Home" />
      <Button route="/saved" text="Saved" />
      <Button route="/search" text="Search" />
    </ul>
  </div>

);

export default Layout;
