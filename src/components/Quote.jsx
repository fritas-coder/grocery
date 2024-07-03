import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function Quote() {
  return (
    <>
      <div className="quote">
        <FaQuoteLeft className="quoteicone" />
        <div className="qtext">
          <small>
            "Fruits and legumes are nature's vibrant treasures, bursting with
            flavors that dance on your taste buds. They're like little bundles
            of sunshine, nourishing your body with vitamins, minerals, and
            fiber. From the juicy sweetness of berries to the crisp crunch of
            green beans, these gifts from the earth are a delicious way to fuel
            your body and embrace a healthier lifestyle. So, let's celebrate the
            colorful goodness of fruits and legumes and savor every bite!".
          </small>
        </div>
      </div>
      <div className="qauteur">
        <small>
          <em>
            <b>~fritas sodji</b>
          </em>
        </small>
      </div>
    </>
  );
}
