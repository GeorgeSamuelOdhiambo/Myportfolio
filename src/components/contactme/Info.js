import React from "react";

function Info() {
  const textcolor = { color: "#e73131" };
  return (
    <div className="info">
      <h4>
        CONTACT IN<span style={textcolor}>FO</span>
      </h4>
      <div className="p-2">
        <h6>
          <i className="fa fa-map-marker"></i>
          <strong>Address:</strong> 458 , Bondo, Kenya
        </h6>
      </div>

      <div className="">
        <h6>
          <i className="fa fa-envelope"></i> <strong>Mail Me:</strong>{" "}
          georgeodhi98@gmail.com
        </h6>
      </div>

      <div className="p-2">
        <h6>
          <i className="fa fa-phone"></i> <strong>Phone:</strong> +254-110494133
        </h6>
      </div>

      <div className="pb-2">
        <h6>
          <i className="fa fa-wechat"></i> <strong>Sms:</strong> +254-796699782
        </h6>
      </div>
    </div>
  );
}

export default Info;
