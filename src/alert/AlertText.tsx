import styles from "../styles";

export type AlertTextProps = {
  children: string;
};

const AlertText: React.FC<AlertTextProps> = ({ children }) => {
  return (
    <p className={styles["alert-text"]} style={{ paddingLeft: "10px" }}>
      {children}
    </p>
  );
};

export default AlertText;
