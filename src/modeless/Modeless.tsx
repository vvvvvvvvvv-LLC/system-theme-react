import React from "react";
import styles from "../styles";
import Window from "../window";

import ModelessContent from "./ModelessContent";
import ModelessActions from "./ModelessActions";

export type ModelessProps = {
  title: string;
  onClose?: () => void;
  children: [
    React.ReactElement<typeof ModelessContent>,
    React.ReactElement<typeof ModelessActions>,
  ];
};

const Modeless: React.FC<ModelessProps> = ({ title, onClose, children }) => {
  return (
    <div className={`${styles["window"]} ${styles["scale-down"]}`}>
      <Window.TitleBar title={title} onClose={onClose} />
      <div className={`${styles["separator"]}`} />
      <div className={`${styles["modeless-dialog"]}`}>
        {children.find((child) => child.type === ModelessContent)}
        {children.find((child) => child.type === ModelessActions)}
      </div>
    </div>
  );
};

export default Modeless;
