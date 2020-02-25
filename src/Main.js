import React, { useState, useEffect } from "react";
import * as qs from "query-string";
import GreenBar from "./components/GreenBar";
import WhiteBar from "./components/WhiteBar";
import Content from "./components/Content";

import constants from "./constants";

function Main(props) {
  const { location } = props;
  const parsed = qs.parse(location.search);
  const brandName = parsed.brand;

  const [brandScheme, setBrandScheme] = useState({});

  useEffect(() => selectBrandScheme(brandName), []);

  const selectBrandScheme = brand => {
    if (brand) {
      const result = constants.brandSchemes.filter(
        scheme => scheme.brand === brand
      );
      if (result && result.length === 1) setBrandScheme(result[0]);
    } else {
      setBrandScheme(constants.brandSchemes[0]);
    }
  };

  const onClickChangeTheme = () => {
    const num = Math.floor(Math.random() * 4);
    setBrandScheme(constants.brandSchemes[num]);
  };

  return (
    <div className="Main">
      <GreenBar
        brandScheme={brandScheme}
        onClickChangeTheme={onClickChangeTheme}
      />
      <WhiteBar parsed={parsed} brandScheme={brandScheme} />
      <Content brandScheme={brandScheme} />
    </div>
  );
}

export default Main;
