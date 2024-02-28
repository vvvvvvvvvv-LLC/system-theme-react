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
        <MenuBar.Item>
          File
          <MenuBar.Menu>
            <MenuBar.Item ><a href="#menu">Open</a></MenuBar.Item>
            <MenuBar.Item ><a href="#menu">Save</a></MenuBar.Item>
            <MenuBar.Item ><a href="#menu">Another</a></MenuBar.Item>
            <MenuBar.Item divider><a href="#menu">Option</a></MenuBar.Item>
            <MenuBar.Item ><a href="#menu">These</a></MenuBar.Item>
            <MenuBar.Item ><a href="#menu">Are</a></MenuBar.Item>
            <MenuBar.Item ><a href="#menu">Separate</a></MenuBar.Item>
          </MenuBar.Menu>
        </MenuBar.Item>
      </MenuBar>
    </div>
  );
};

// const Example = () => {
//   return (
//     <ul role="menu-bar">
//       <li role="menu-item" tabindex="0" aria-haspopup="true">
//         File
//         <ul role="menu">
//           <li role="menu-item"><a href="#menu">Action</a></li>
//           <li role="menu-item"><a href="#menu">Another Action</a></li>
//           <li role="menu-item" class="divider"><a href="#menu">Something else here</a></li>
//           <li role="menu-item"><a href="https://twitter.com/sakofchit">sakun's twitter</a></li>
//         </ul>
//       </li>
//       <li role="menu-item" tabindex="0" aria-haspopup="true">
//         Edit
//         <ul role="menu">
//           <li role="menu-item"><a href="#menu">Action</a></li>
//           <li role="menu-item"><a href="#menu">Another Action</a></li>
//           <li role="menu-item" class="divider"><a href="#menu">Something else here</a></li>
//           <li role="menu-item"><a href="https://sakun.co">sakun's projects</a></li>
//         </ul>
//       </li>
//       <li role="menu-item" tabindex="0" aria-haspopup="true">
//         View
//         <ul role="menu">
//           <li role="menu-item"><a href="#menu">Action</a></li>
//           <li role="menu-item"><a href="#menu">Another Action</a></li>
//           <li role="menu-item"><a href="#menu">Something else here</a></li>
//         </ul>
//       </li>
//       <li role="menu-item" tabindex="0" aria-haspopup="true">
//         Special
//         <ul role="menu">
//           <li role="menu-item"><a href="#menu">You</a></li>
//           <li role="menu-item"><a href="#menu">Get the</a></li>
//           <li role="menu-item"><a href="#menu">Idea</a></li>
//         </ul>
//       </li>
//     </ul>
//   );
// }

export default Example;
