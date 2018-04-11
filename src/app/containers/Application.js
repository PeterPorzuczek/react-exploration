import React from "react";
import Navigation from "../../app/containers/Navigation";

import withScroll from "../../app/components/Scroll";

const NavigationWithScrollEvents = withScroll(Navigation, false);

const Application = ({ children }) => (
  <div className="App">
    <NavigationWithScrollEvents />
    {children}
  </div>
);

export default Application;
