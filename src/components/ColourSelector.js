import React from "react";

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { key, background, label, classname } = config;
  // const tempFn = () => {
  //   console.log("background", background);
  //   selectNextBackground({ background: background });
  // };
  return (
    <button
      className={classname}
      onClick={() => selectNextBackground({ background: key })}
    >
      {label}
    </button>
  );
};
export default ColourSelector;
