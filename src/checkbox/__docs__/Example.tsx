import React, { FC } from "react";
import CheckBox from "..";

export type ExampleProps = {};

const Example: FC<ExampleProps> = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
        width: "50rem",
      }}
    >
      <form>
        <CheckBox
          label="A defaulted textbox"
          id="id1"
          defaultChecked
        />
        <CheckBox
          label="This has a placeholder"
          id="id2"
        />
        <CheckBox
          label="This one is disabled"
          id="id3"
          disabled
        />
      </form>
    </div>
  );
};

export default Example;
