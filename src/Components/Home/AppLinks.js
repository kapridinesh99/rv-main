import React from "react";
import "./Home.css";

function AppLinks() {
  return (
    <article className="flex gap-l appLinks justify-center">
      <div className="flex column align-center gap-l">
        <h3>Download Real Value APP Today and Earn More</h3>
        <div className="flex gap-l svg-links">
          <img src="/AppStore.svg" className="cursor-pointer" alt="appStore" />
          <img
            src="/googlePlay.svg"
            className="cursor-pointer"
            alt="googlePlay"
          />
        </div>
      </div>
      <div>
        <img src="/appScreens.svg" alt="appScreens" />
      </div>
    </article>
  );
}

export default AppLinks;
