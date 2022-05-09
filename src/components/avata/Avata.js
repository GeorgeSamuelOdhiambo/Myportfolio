import React from "react";

function Avata(props) {
  return (
    <div className="card bg-white bg-opacity-50 border-primary m-3" style={{ "border-radius": "30px" }}>
      <div className="border-primary mb-3 m-1">
        <img
          class="rounded-circle shadow-1-strong mb-4"
          src="https://db5pap001files.storage.live.com/y4mn4vg6FotKmcugs5jHcDWbkuN1CuQL1DMlkxt2nl2D8CY6F8klUBFbYmGdeKXpzjIIDZByl9EDgnNPLZ0t8JGPAPsrN_41pZ9C6yZEbRiSrZfwMgXJQejHW8IJD9sj2fOf0emzr5xVPeKkfeCTmlvtA8AuaQlEXzLzcc8Wi812pE5vygYJ8oeSzOkIgiSb2lgLE_G5Q2h_AtCrHELFLR0HQ?encodeFailures=1&width=540&height=540"
          alt="avatar"
          style={{ width: "100px" }}
        />
        <div class="row d-flex justify-content-center">
          <div class="col">
            <h5 class="mb-3">Maria Kate</h5>
            <p>Photographer</p>
            <p class="">
              <i class="fas fa-quote-left pe-2"></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et
              deleniti nesciunt sint eligendi reprehenderit reiciendis,
              quibusdam illo, beatae quia fugit consequatur laudantium velit
              magnam error. Consectetur distinctio fugit doloremque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avata;
