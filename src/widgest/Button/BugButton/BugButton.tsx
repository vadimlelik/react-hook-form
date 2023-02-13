import React from "react";

const BugButton = () => {
  const onThrow = () => {
    location.reload();
  };

  return <button onClick={onThrow}>Reload page</button>;
};

export default BugButton;
