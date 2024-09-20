export default function SimpleItem({ title, icon, children }) {
  return (
    <li
      className="p-2 m-1"
      style={{
        cursor: "pointer",
        border: "1px solid grey",
        borderRadius: 5,
        listStyle: "none",
      }}
    >
      <h3 style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{title}</span>
        <span>{icon}</span>
      </h3>
      {children}
    </li>
  );
}
