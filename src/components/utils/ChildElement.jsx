import React from "react";

function ChildElement({childrenProp, stateObj}) {
  if (!isNaN(childrenProp.length)) {
    let childrenList = [];
    let i = 0;

    childrenProp.map(child =>
      childrenList =  [
        ...childrenList,
        React.cloneElement(child, {props: {...stateObj, key: i++}})
      ]
    )

    return childrenList.map(childElmt => childElmt);
  }
  else if (childrenProp) {
    return React.cloneElement(childrenProp, {props: stateObj});
  }
  else {
    return null;
  }
}

export default ChildElement;