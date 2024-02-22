import React, { FC } from "react";
import Dialog from "../index";

export type ExampleProps = {
  line1: string;
  line2: string;
};

const Example: FC<ExampleProps> = ({ line1, line2 }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div style={{ width: "20rem" }}>
        <Dialog>
          <Dialog.Text>{line1}</Dialog.Text>
          <Dialog.Text>{line2}</Dialog.Text>
        </Dialog>
      </div>
    </div>
  );
};

export default Example;
