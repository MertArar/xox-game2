import React, { useContext } from "react";

import { GameContext } from "../../context/GameContex";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";

const Start = () => {
  const { activeUser, setActiveUser, handleStart } = useContext(GameContext);

  return (
    <div className="start">
      <div className="start__header">
        <Xicon />
        <Oicon />
      </div>
      <div className="card shadow-gray">
        <h1 className="text-lg">Oyuncu 1'in işaretini seç</h1>
        <div className="start__players">
          <span
            className={activeUser === "x" ? "start__players--active" : ""}
            onClick={() => setActiveUser("x")}
          >
            <Xicon color={activeUser === "x" ? "dark" : "light"} />
          </span>
          <span
            className={activeUser === "o" ? "start__players--active" : ""}
            onClick={() => setActiveUser("o")}
          >
            <Oicon color={activeUser === "o" ? "dark" : "light"} />
          </span>
        </div>
        <p className="text-light text-normal">hatırlatma: x önce başlar!</p>
      </div>
      <div className="start__btns">
        <button className="btn btn-yellow" onClick={() => handleStart("cpu")}>
          Yeni oyun (vs CPU)
        </button>
        <button className="btn btn-blue" onClick={() => handleStart("user")}>
          {" "}
          Yeni Oyun (vs Oyuncu)
        </button>
      </div>
    </div>
  );
};

export default Start;
