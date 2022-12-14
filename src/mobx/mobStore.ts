import { makeAutoObservable } from "mobx";

export class ColourSelector {
  colourOneMobx = "rgb(220, 136, 220)";
  colourTwoMobx = "rgb(21, 99, 209)";
  colourThreeMobx = "rgb(50, 28, 105)";

  constructor() {
    makeAutoObservable(this);
  }

  setColourOneMobx(colour: string) {
    this.colourOneMobx = colour;
  }
  setColourTwoMobx(colour: string) {
    this.colourTwoMobx = colour;
  }
  setColourThreeMobx(colour: string) {
    this.colourThreeMobx = colour;
  }
}

export const colourSelector = new ColourSelector();
