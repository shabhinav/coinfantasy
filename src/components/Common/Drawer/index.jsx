import * as React from "react";
import Drawer from "@mui/material/Drawer";

export default function TemporaryDrawer({
  state,
  setState,
  position,
  children,
}) {
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {[position].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {children}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
