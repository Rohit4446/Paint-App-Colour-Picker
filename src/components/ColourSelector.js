import React from "react";

const ColourSelector = (props) => {
  const { key, config, selectNextBackground } = props;
  const { background, label } = config;
  return (
    <button
      className={`btn-${key}`}
      onClick={() => selectNextBackground({ background: background })}
    >
      {label}
    </button>
  );
};
export default ColourSelector;
