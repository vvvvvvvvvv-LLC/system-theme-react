import styles from "../styles";

export type AlertIconProps = {
  children: React.ReactNode;
};

function AlertIcon({ children }: AlertIconProps) {
  return (
    <div className={styles["outer-border"]}>
      { children }
    </div>
  );
};

export default AlertIcon;
