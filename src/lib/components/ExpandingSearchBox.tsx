import React from "react";
import classNames from "classnames";

import "./expanding-search-box.scss";

type ExpandingSearchBoxProps = {
  className: string;
}
const ExpandingSearchBox = ({className}: ExpandingSearchBoxProps) => {
  return <div className={classNames("expanding-search-box", className)}></div>;
};

ExpandingSearchBox.displayName = "ExpandingSearchBox";
export default ExpandingSearchBox;
