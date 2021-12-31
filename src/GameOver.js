import React from "react";

export default function GameOver(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8">
          <button className="btn btn-outline-secondary m-3" onClick={()=>props.onRetry()} type="reset">
            Retry
          </button>
          <button
            className="btn btn-outline-secondary m-3"
            onClick={() => props.changeStatus(false)}
            type="submit"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}
