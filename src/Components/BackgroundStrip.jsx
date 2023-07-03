// import React from "react";
// import "./BackgroundStrip.css";

// function BackgroundStrip() {
//   return <div className="background-strip"></div>;
// }

// export default BackgroundStrip;
import React from "react";

const BackgroundStrip = () => {
  const css = `
  .background-strip {
    position: fixed;
    top: 0;
    left: 100px;
    width: 50px;
    height: 100%;
    background-color: grey;
    z-index: -1;
  }
  @media (max-width: 630px) {
    .background-strip {
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 100%;
      background-color: grey;
      z-index: -1;
    }
  }
    `;

  return <style>{css}</style>;
};

export default BackgroundStrip;
