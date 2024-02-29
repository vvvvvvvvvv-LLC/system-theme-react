import React, { FC } from "react";
import { Alert } from "../index";
import { Button } from "../../button";

export type ExampleProps = {};

const Example: FC<ExampleProps> = ({}) => {
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
        <Alert>
          <Alert.Icon>icon</Alert.Icon>
          <Alert.Text>
            This is some very long message. Maybe an error??
          </Alert.Text>
          <Alert.Actions>
            <Button>Cancel</Button>
            <Button primary>OK</Button>
          </Alert.Actions>
        </Alert>
      </div>
    </div>
  );
};

export default Example;
