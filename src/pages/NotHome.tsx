import { observer } from "mobx-react-lite";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store";
import { useZustandStore } from "../zustand/zustandStore";
import { colourSelector } from "../mobx/mobStore";

const NotHome = observer(() => {
  const colourOneRedux = useSelector(
    (state: RootState) => state.colourOneRedux
  );
  const colourTwoRedux = useSelector(
    (state: RootState) => state.colourTwoRedux
  );
  const colourThreeRedux = useSelector(
    (state: RootState) => state.colourThreeRedux
  );

  const { colourOneZustand, colourTwoZustand, colourThreeZustand } =
    useZustandStore((state: any) => state);

  const { colourOneMobx, colourTwoMobx, colourThreeMobx } = colourSelector;

  return (
    <>
      <div className="button-container">
        <Link to="/">
          <button className="button">Back To Home</button>
        </Link>
      </div>

      <div className="not-home-text">
        <h1>Redux</h1>
        <h2>Colour One: {colourOneRedux}</h2>
        <h2>Colour Two: {colourTwoRedux}</h2>
        <h2>Colour Three: {colourThreeRedux}</h2>
      </div>
      <div className="not-home-text">
        <h1>Zustand</h1>
        <h2>Colour One: {colourOneZustand}</h2>
        <h2>Colour Two: {colourTwoZustand}</h2>
        <h2>Colour Three: {colourThreeZustand}</h2>
      </div>
      <div className="not-home-text">
        <h1>Mobx</h1>
        <h2>Colour One: {colourOneMobx}</h2>
        <h2>Colour Two: {colourTwoMobx}</h2>
        <h2>Colour Three: {colourThreeMobx}</h2>
      </div>
    </>
  );
});

export default NotHome;
