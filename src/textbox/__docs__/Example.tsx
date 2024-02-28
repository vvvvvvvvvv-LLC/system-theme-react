import React, { FC } from "react";
import TextBox from "..";

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
        <TextBox
          label="A defaulted textbox"
          id="id1"
          defaultValue="a default value"
        />
        <br />
        <TextBox
          label="This has a placeholder"
          id="id2"
          placeholder="some placeholder!"
        />
        <br />
        <TextBox
          label="This one is disabled"
          id="id3"
          disabled
          placeholder="you can't change me"
        />
      </form>
    </div>
  );
};

export default Example;
