import React from "react";
import { Link } from "react-router-dom";

export default function AboutUsScreen() {
  return (
    <div>
      AboutUsScreen{" "}
      <Link className="to-blue-500" to={"/"}>
        HOme
      </Link>{" "}
    </div>
  );
}
