import React, { useContext } from "react";
import { GameContext } from "../../context/GameContex";
import { ModalContext } from "../../context/ModalContext";

const Restart = () => {
  const { hideModal } = useContext(ModalContext);
  const { handleReset } = useContext(GameContext);
  return (
    <div className="restart">
      <h3 className="restart__title">Yeniden başlat?</h3>
      <div className="restart__btns">
        <button className="btn btn-sm" onClick={hideModal}>
          iptal
        </button>
        <button className="btn btn-yellow btn-sm" onClick={handleReset}>
          Evet, Yeniden başlat
        </button>
      </div>
    </div>
  );
};

export default Restart;
