import { Button } from "../button";
import styles from "../styles";

export type AlertActionsProps = {
  children: React.ReactElement<typeof Button> | React.ReactElement<typeof Button>[];
};

function AlertActions({ children }: AlertActionsProps) {
  return (
    <div className={`${styles["field-row"]}`} style={{justifyContent:"flex-end"}}>
      { children }
    </div>
  );
};

export default AlertActions;
