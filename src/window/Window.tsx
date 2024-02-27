import React from "react";
import styles from "../styles";
import TitleBar from "./WindowTitleBar";
import DetailsBar from "./WindowDetailsBar";
import Pane from "./WindowPane";

export type WindowProps = {
  children: [
    React.ReactElement<typeof TitleBar>,
    React.ReactElement<typeof DetailsBar>,
    React.ReactElement<typeof Pane>,
  ] | [
    React.ReactElement<typeof TitleBar>,
    React.ReactElement<typeof Pane>,
  ],
};

const Window: React.FC<WindowProps> = ({ children }) => {
  const details = children.filter((child) => child?.type === DetailsBar);

  return (
    <div className={`${styles["window"]}`}>
      {children.filter((child) => child?.type === TitleBar)}
      {details.length ? details : <div className={`${styles["separator"]}`}/>}
      {children.filter((child) => child?.type === Pane)}
    </div>
  );
};

export default Window;
