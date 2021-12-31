import "./App.css";
import ShowCards from "./ShowCards";
import React, { useState, useEffect } from "react";

function App() {
  const [username, setUser] = useState("");
  const handleUsername = (e) => {
    setUser(e.target.value);
  };

  const [userchoice, setChoice] = useState("");
  const handleChoice = (e) => {
    setChoice(e.target.value);
  };

  const [displayCardDiv, setupCards] = useState(false);

  const changeStatus = (status) => {
    setupCards(status);
  };

  const submit = (e) => {
    e.preventDefault();
    if (
      displayCardDiv === false &&
      username &&
      userchoice &&
      userchoice >= 1 &&
      userchoice <= 9
    ) {
      setupCards(true);
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mb-3 text-center">
              <h3>Pick a Number</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-4">Enter Your Name: </div>
            <div className="col-6">
              <div className="input-group mb-3">
                <input
                  type="text"
                  value={username.value}
                  onChange={(e) => handleUsername(e)}
                  placeholder="Enter Your Name"
                ></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">Enter A Number Between 1 and 9: </div>
            <div className="col-6">
              <div className="input-group mb-3">
                <input
                  type="text"
                  value={userchoice.value}
                  onChange={(e) => handleChoice(e)}
                  placeholder="Enter A Number"
                ></input>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="submit">
                  Start
                </button>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-10">
              {displayCardDiv && (
                <ShowCards
                  choice={userchoice}
                  changeStatus={changeStatus}
                />
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default App;
