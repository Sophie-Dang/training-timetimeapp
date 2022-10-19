import React from "react";

function PageTransition({isAnimated}) {
  return (
    <>
      { isAnimated === true ?
        <div className="page-transition" onAnimationEnd={() => console.log('ended')}></div>
        :
        ''
      }
    </>
  )
}

export default PageTransition;