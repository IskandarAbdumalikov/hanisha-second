import React from "react";
import "./result.scss";
import tomatoGirl from "../../assets/images/TomA.png"

const Result = () => {
  return (
    <div className="result container">
      <div className="result__text">
        <h2 className="result__heading">
          Seedra helps to grow fast and efficient
        </h2>
        <p className="result__paragraph">
          SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional
          instructions created by PhD Helga George
        </p>
        <p className="result__paragraph">
          Be sure of our quality - the freshest batches of this season. Non-GMO,
          Heirloom - our seeds were tested and have the best germination
          ratings.
        </p>
        <p className="result__paragraph">
          Your easy growing experience is our guarantee
        </p>
        <p className="result__paragraph">
          Spinach common culinary uses: salads, soups, smoothies, lasagne,
          pizza, pies, risotto, and more
        </p>
        <p className="result__paragraph">
          Proudly sourced in the USA - our garden seeds are grown, harvested,
          and packaged in the USA. We support local farmers and are happy to
          produce this American-made product
        </p>
      </div>
      <div className="result__image">
        <img src={tomatoGirl} alt="Happy gardener with tomatoes" />
      </div>
    </div>
  );
};

export default Result;
