import create from "zustand";

export const useZustandStore = create((set) => ({
  colourOneZustand: "rgb(220, 136, 220)",
  colourTwoZustand: "rgb(21, 99, 209)",
  colourThreeZustand: "rgb(50, 28, 105)",
  setColourOneZustand: (colour: string) =>
    set(() => ({ colourOneZustand: colour })),
  setColourTwoZustand: (colour: string) =>
    set(() => ({ colourTwoZustand: colour })),
  setColourThreeZustand: (colour: string) =>
    set(() => ({ colourThreeZustand: colour })),
}));
