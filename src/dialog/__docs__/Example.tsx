import React, { FC } from "react";
import Dialog, { DialogProps } from "../index";

const Example: FC<DialogProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Dialog>
        <Dialog.Text>This is the first line, a header of sorts</Dialog.Text>
        <Dialog.Text>The following lines can be very long</Dialog.Text>
        <br/>
        <Dialog.Text>One more line after a break</Dialog.Text>
      </Dialog>
    </div>
  );
};

export default Example;
