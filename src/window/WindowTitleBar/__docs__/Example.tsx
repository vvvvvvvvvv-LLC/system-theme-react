import React, { FC } from "react";
import TitleBar, { TitleBarProps } from "../index";
import styles from "../../../styles";

const Example: FC<TitleBarProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div className={`${styles["window"]}`} style={{ width: "30rem" }}>
        <TitleBar {...props} />
      </div>
    </div>
  );
};

export default Example;
