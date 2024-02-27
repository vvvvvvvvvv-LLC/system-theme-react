import styles from "../styles";

export type AlertTextProps = {
  children: string;
};

function AlertText({ children }: AlertTextProps) {
  return (
    <p className={styles["alert-text"]} style={{ paddingLeft: "10px" }}>
      {children}
    </p>
  );
};

export default AlertText;
