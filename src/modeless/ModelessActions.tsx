import React from "react";

import styles from "../styles";
import { Button } from "../button";

export type ModelessActionsProps = {
  children:
    | React.ReactElement<typeof Button>
    | React.ReactElement<typeof Button>[];
};

const ModelessActions: React.FC<ModelessActionsProps> = ({ children }) => {
  return (
    <div
      className={`${styles["field-row"]}`}
      style={{ justifyContent: "flex-end", margin: "15px"}}
    >
      {children}
    </div>
  );
};

export default ModelessActions;
