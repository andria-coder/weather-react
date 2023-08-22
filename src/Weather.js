import React from "react";

import { InfinitySpin } from 'react-loader-spinner'
;
export default function Weather(){

  return (
    <div className="Weather">
      <h1>"Hello from Weather"</h1>
      <InfinitySpin
        width='200'
        color="#4fa94d"
      />
    </div>
  )
}
