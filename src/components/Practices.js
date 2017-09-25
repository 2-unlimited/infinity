import React from "react";
import "./Practices.css";
import Practice from "./Practice";
import PracticeComponent from "./PracticeComponent";

function Practices() {
  const practices = [
    new Practice("WHOLE TEAM", "include everyone always", "flaticon-person"),
    new Practice("PERFORMANCE", "is always on our mind", "flaticon-clock"),
    new Practice("HELP", "when needed", "flaticon-people-2"),
    new Practice("QUALITY", "be a good scout", "flaticon-cleaner"),
    new Practice(
      "DONT BLAME",
      "but give constructive feedback",
      "flaticon-people-1"
    ),
    new Practice("TEST", "all the things", "flaticon-flasks"),
    new Practice(
      "APPLY XP",
      "pairing, TDD, continuous everything",
      "flaticon-extreme-snowboard-silhouette"
    ),
    new Practice(
      "KNOWLEDGE SHARING",
      "is important",
      "flaticon-home-delivery-service"
    ),
    new Practice("DO", "what you are afraid to do", "flaticon-people"),
    new Practice(
      "FOLLOW UP",
      "on actions",
      "flaticon-compass-with-white-needles"
    )
  ].map(p => <PracticeComponent key={p.title} practice={p} />);
  return <div className="practices">{practices}</div>;
}

export default Practices;
