import React from "react";
import AlertIcon from "./AlertIcon";
import AlertText from "./AlertText";
import styles from "../styles";
import AlertActions from "./AlertActions";

export type AlertProps = {
  children: [
    React.ReactElement<typeof AlertIcon>,
    React.ReactElement<typeof AlertText>,
    React.ReactElement<typeof AlertActions>,
  ];
};

function Alert({ children }: AlertProps) {
  const outerClass = `${styles["alert-box"]} ${styles["outer-border"]} ${styles["scale-down"]}`;
  const innerClass = `${styles["inner-border"]}`;
  const contentsClass = `${styles["alert-contents"]}`;

  return (
    <div className={outerClass}>
      <div className={innerClass}>
        <div
          className={contentsClass}
          style={{ paddingLeft: "30px", paddingRight: "20px" }}
        >
          <section
            className={`${styles["field-row"]}`}
            style={{ justifyContent: "flex-start" }}
          >
            {children.filter((child) => child.type === AlertIcon)}
            {children.filter((child) => child.type === AlertText)}
          </section>
          <section
            className={`${styles["field-row"]}`}
            style={{ justifyContent: "flex-end" }}
          >
            {children.filter((child) => child.type === AlertActions)}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Alert;
