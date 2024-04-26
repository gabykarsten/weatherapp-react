import React from "react";
import { Audio } from "react-loader-spinner";
import axios from "axios";

export default function Weather() {
  return (
    <Audio
      height="80"
      width="100"
      radius="9"
      color="white"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
