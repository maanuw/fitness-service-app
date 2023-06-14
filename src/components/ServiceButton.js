import React from "react";

import Button from "react-bootstrap/Button";

function ServiceButton({ data, change, select }) {
  return (
    <Button variant={select ? "success" : "primary" } onClick={() => change(data)}>
      {data}
    </Button>
  );
}

export default ServiceButton;
