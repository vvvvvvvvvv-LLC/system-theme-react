import styles from "../styles";

export type AlertIconProps = {
  children: React.ReactNode;
};

const AlertIcon: React.FC<AlertIconProps> = ({ children }) => {
  return <div className={styles["outer-border"]}>{children}</div>;
};

export default AlertIcon;
