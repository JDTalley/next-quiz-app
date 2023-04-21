/* Module component contains all parts of lesson and quiz */
import React from "react";
import Chapter from "./chapter";

const Module = ({ id, name, sections }) => {
  const [section, setSection] = React.useState();

  return (
    <>
      <h1>{name}</h1>
      {sections.map((section) => {
        return <Chapter key={section.id} {...section} />;
      })}
    </>
  );
};

export default Module;
