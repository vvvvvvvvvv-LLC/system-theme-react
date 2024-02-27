import React, { FC } from "react";
import Modeless from "../index";
import { Button } from "../../button";

export type ExampleProps = {
  title: string;
};

const Example: FC<ExampleProps> = ({ title }) => {
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
      <Modeless title={title}>
        <Modeless.Content>
          This is some random content for the modal. It can be anything you
          want.
        </Modeless.Content>
        <Modeless.Actions>
          <Button>Cancel</Button>
          <Button>OK</Button>
        </Modeless.Actions>
      </Modeless>
    </div>
  );
};

export default Example;
