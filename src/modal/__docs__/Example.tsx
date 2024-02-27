import React, { FC } from "react";
import Modal from "../index";
import { Button } from "../../button";
import styles from "../../styles";

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
      <Modal title={title}>
        <Modal.Content>
          This is some random content for the modal. It can be anything you want.
        </Modal.Content>
        <Modal.Actions>
          <Button>Cancel</Button>
          <Button>OK</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Example;
