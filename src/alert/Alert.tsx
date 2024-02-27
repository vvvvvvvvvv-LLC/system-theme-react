import React, { Children } from "react";
import AlertIcon from "./AlertIcon";
import AlertText from "./AlertText";
import styles from "../styles";
import AlertActions from "./AlertActions";

export type AlertProps = {
  children: [
    React.ReactElement<typeof AlertIcon>,
    React.ReactElement<typeof AlertText>,
    React.ReactElement<typeof AlertActions>
  ],
};

function Alert({ children }: AlertProps) {
  const outerClass = `${styles["alert-box"]} ${styles["outer-border"]} ${styles["scale-down"]}`;
  const innerClass = `${styles["inner-border"]}`;
  const contentsClass = `${styles["alert-contents"]}`;


  // figure out which of the children is the icon, text, and actions
  let icon = children.filter((child) => child.type === AlertIcon)[0];
  let text = children.filter((child) => child.type === AlertText)[0];
  let actions = children.filter((child) => child.type === AlertActions)[0];

  return (
    <div className={outerClass}>
      <div className={innerClass}>
        <div className={contentsClass} style={{paddingLeft: "30px", paddingRight: "20px"}}>
          <section className={`${styles["field-row"]}`} style={{ justifyContent: "flex-start" }}>
            {icon}
            {text}
          </section>
          <section className={`${styles["field-row"]}`} style={{ justifyContent: "flex-end" }}>
            {actions}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Alert;
