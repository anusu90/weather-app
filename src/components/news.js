import React, { useState } from "react";

const News = ({ data }) => {
  const [hovered, setHovered] = useState(undefined);
  const img = ["thunder", "cloud", "sun"];
  return (
    <div id="news">
      <div className="news-info">
        <div>
          <h1>News</h1>
          <div className="news-cards">
            {data?.map((item) => {
              return (
                <div
                  className={img[item.query.custom_id]}
                  key={item.query.custom_id}
                  onMouseEnter={() => {
                    setHovered(item.query.custom_id);
                  }}
                  onMouseLeave={() => {
                    setHovered(undefined);
                  }}
                >
                  <p
                    style={{
                      opacity: hovered === item.query.custom_id ? 0 : 1,
                    }}
                  >
                    {item?.query?.current?.condition?.text} weather in{" "}
                    {item?.query?.location?.name}
                  </p>
                  {hovered === item.query.custom_id && (
                    <div className="view-more" style={{ position: "absolute" }}>
                      <button className="btn">Read more</button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="header-ft">
          <h1>weatherapp</h1>
        </div>
        <div className="list-items">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#cities">Cities</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default News;
