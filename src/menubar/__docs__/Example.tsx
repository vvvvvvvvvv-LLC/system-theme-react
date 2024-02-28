import React, { FC } from "react";
import MenuBar from "..";

export type ExampleProps = {
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
      <MenuBar>
        <MenuBar.Item title="File">
          <MenuBar.Menu>
            <MenuBar.Item title="Open" />
            <MenuBar.Item title="Save" />
          </MenuBar.Menu>
        </MenuBar.Item>
      </MenuBar>
    </div>
  );
};

export default Example;
