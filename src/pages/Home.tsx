import React, { useState } from "react";
import { CirclePicker } from "react-color";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import {
  setColourOneAction,
  setColourThreeAction,
  setColourTwoAction,
} from "../actions/actions";
import { Link } from "react-router-dom";
import { useZustandStore } from "../zustand/zustandStore";
import { observer } from "mobx-react-lite";
import { colourSelector } from "../mobx/mobStore";

const Home = observer(() => {
  const [stateType, setStateType] = useState<string>("none");
  //hooks
  const [colourOne, setColourOne] = useState<string>("rgb(220, 136, 220)");
  const [colourTwo, setColourTwo] = useState<string>("rgb(21, 99, 209)");
  const [colourThree, setColourThree] = useState<string>("rgb(50, 28, 105)");

  // redux selectors
  const colourOneRedux = useSelector(
    (state: RootState) => state.colourOneRedux
  );
  const colourTwoRedux = useSelector(
    (state: RootState) => state.colourTwoRedux
  );
  const colourThreeRedux = useSelector(
    (state: RootState) => state.colourThreeRedux
  );
  const dispatch = useAppDispatch();

  //Zustand
  const colourOneZustand = useZustandStore(
    (state: any) => state.colourOneZustand
  );
  const colourTwoZustand = useZustandStore(
    (state: any) => state.colourTwoZustand
  );
  const colourThreeZustand = useZustandStore(
    (state: any) => state.colourThreeZustand
  );
  const { setColourOneZustand, setColourTwoZustand, setColourThreeZustand } =
    useZustandStore((state: any) => state);

  // determines text colours by state management tool used
  const determineBackground = () => {
    switch (stateType) {
      case "redux":
        return `linear-gradient( 47deg, ${colourOneRedux}, ${colourTwoRedux},${colourThreeRedux}, ${colourOneRedux})`;
      case "zustand":
        return `linear-gradient( 47deg, ${colourOneZustand}, ${colourTwoZustand},${colourThreeZustand}, ${colourOneZustand})`;
      case "mobx":
        return `linear-gradient( 47deg, ${colourSelector.colourOneMobx}, ${colourSelector.colourTwoMobx},${colourSelector.colourThreeMobx}, ${colourSelector.colourOneMobx})`;
      default:
        return `linear-gradient( 47deg, ${colourOne}, ${colourTwo},${colourThree}, ${colourOne})`;
    }
  };

  // changes the state type
  const changeStateType = () => {
    switch (stateType) {
      case "redux":
        return setStateType("zustand");
      case "zustand":
        return setStateType("mobx");
      case "mobx":
        return setStateType("none");
      default:
        return setStateType("redux");
    }
  };

  // determine which action to set the colour with based on number and state type
  const determineAction = (colour: string, number: number) => {
    switch (stateType) {
      case "redux":
        if (number === 1) {
          return dispatch(setColourOneAction(colour));
        } else if (number === 2) {
          return dispatch(setColourTwoAction(colour));
        } else {
          return dispatch(setColourThreeAction(colour));
        }
      case "zustand":
        if (number === 1) {
          return setColourOneZustand(colour);
        } else if (number === 2) {
          return setColourTwoZustand(colour);
        } else {
          return setColourThreeZustand(colour);
        }
      case "mobx":
        if (number === 1) {
          return colourSelector.setColourOneMobx(colour);
        } else if (number === 2) {
          return colourSelector.setColourTwoMobx(colour);
        } else {
          return colourSelector.setColourThreeMobx(colour);
        }
      default:
        if (number === 1) {
          return setColourOne(colour);
        } else if (number === 2) {
          return setColourTwo(colour);
        } else {
          return setColourThree(colour);
        }
    }
  };

  // determines selected colour being used
  const determineColour = (number: number) => {
    switch (stateType) {
      case "redux":
        if (number === 1) {
          return colourOneRedux;
        } else if (number === 2) {
          return colourTwoRedux;
        } else {
          return colourThreeRedux;
        }
      case "zustand":
        if (number === 1) {
          return colourOneZustand;
        } else if (number === 2) {
          return colourTwoZustand;
        } else {
          return colourThreeZustand;
        }
      case "mobx":
        if (number === 1) {
          return colourSelector.colourOneMobx;
        } else if (number === 2) {
          return colourSelector.colourTwoMobx;
        } else {
          return colourSelector.colourThreeMobx;
        }
      default:
        if (number === 1) {
          return colourOne;
        } else if (number === 2) {
          return colourTwo;
        } else {
          return colourThree;
        }
    }
  };

  return (
    <>
      <div className="button-container">
        <button className="button" onClick={() => changeStateType()}>
          State Type = {stateType}
        </button>
        <Link to="not-home">
          <button className="button">Other Page</button>
        </Link>
      </div>
      <h1
        className="text"
        style={{
          backgroundImage: determineBackground(),
          backgroundSize: "600%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Hello world!
      </h1>
      <div className="colour-container">
        <div className="colour-input">
          <h2>Colour One</h2>
          <CirclePicker
            color={determineColour(1)}
            onChangeComplete={(color) => determineAction(color.hex, 1)}
          />
        </div>

        <div className="colour-input">
          <h2>Colour Two</h2>
          <CirclePicker
            color={determineColour(2)}
            onChangeComplete={(color) => determineAction(color.hex, 2)}
          />
        </div>

        <div className="colour-input">
          <h2>Colour Three</h2>
          <CirclePicker
            color={determineColour(3)}
            onChangeComplete={(color) => determineAction(color.hex, 3)}
          />
        </div>
      </div>
    </>
  );
});

export default Home;
