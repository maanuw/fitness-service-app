import React from "react";

import Button from "react-bootstrap/Button";

function TimeButton({time, change, select}) {
  return (
    <Button
      variant={select ? "success" : "primary"}
      onClick={() => change(time)}
    >
      {time}
    </Button>
  );
}

export default TimeButton;
