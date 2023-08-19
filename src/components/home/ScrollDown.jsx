import React from "react";

const ScrollDown = () => {
  return (
    <div className="home_scroll">
      <a href="#work" className="home_scroll-button button--flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="40"
          viewBox="0 0 46 40"
          fill="none"
        >
          <path
            d="M23.0705 0C15.9678 0 10.0654 5.00875 10.0654 11.185V28.815C10.0654 34.9925 15.9664 40 23.0705 40C30.1746 40 35.9332 34.9913 35.9332 28.815V11.185C35.9332 5.00875 30.1732 0 23.0705 0ZM33.0597 28.815C33.0597 33.6038 28.579 37.5 23.0719 37.5C17.5649 37.5 12.9419 33.6038 12.9419 28.815V11.185C12.9419 6.39625 17.5649 2.5 23.0719 2.5C28.579 2.5 33.0597 6.39625 33.0597 11.185V28.815ZM23.0159 7.5C22.2224 7.5 21.5784 8.06 21.5784 8.75V15C21.5784 15.69 22.2224 16.25 23.0159 16.25C23.8094 16.25 24.4534 15.69 24.4534 15V8.75C24.4534 8.06 23.8094 7.5 23.0159 7.5Z"
            fill="var(--title-color)"
          />
        </svg>
        <span className="home_scroll-name">Scroll Down</span>
      </a>
    </div>
  );
};

export default ScrollDown;
