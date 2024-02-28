import React, { FC } from "react";
import RadioButton from "..";

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
        <RadioButton label="left" name="example" id="id1"/>
        <RadioButton label="middle" name="example" id="id2" defaultChecked/>
        <RadioButton label="right" name="example" id="id3"/>
        <br/>
        <RadioButton label="small" name="example-2" id="id4"/>
        <RadioButton label="medium" name="example-2" id="id5"/>
        <RadioButton label="large" name="example-2" id="id6" defaultChecked/>
      </form>
    </div>
  );
};

export default Example;
