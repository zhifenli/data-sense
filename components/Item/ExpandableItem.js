import { useState } from "react";

export default function ExpandableItem({ title, children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li
      className="p-2 m-1"
      style={{
        cursor: "pointer",
        border: "1px solid grey",
        borderRadius: 5,
        listStyle: "none",
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <h3 style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{title}</span>
        <span>{expanded ? "-" : "+"}</span>
      </h3>
      {expanded ? children : null}
    </li>
  );
}
