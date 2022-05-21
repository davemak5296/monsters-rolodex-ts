import { ChangeEventHandler } from "react";

type emptyObj = Record<string, never>;

type appState = {
  monsters: any[];
  searchTexts: string;
};

type cardListProps = {
  monsters: any[];
};

type searchBoxProps = {
  // monsters: any[];
  onChangeHandler: ChangeEventHandler;
};

type cardProps = {
  monster: {
    [key: string]: any;
  };
};

export type { emptyObj, appState, cardListProps, searchBoxProps, cardProps };
