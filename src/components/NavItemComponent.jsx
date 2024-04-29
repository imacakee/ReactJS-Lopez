export default function NavItemComponent({ route }) {
  const itemStyle = { textDecoration: "none", color: "black", fontSize: 20 };

  return (
    <div className="d-flex px-2">
      <a style={itemStyle} href={route.path}>
        {route.title}
      </a>
    </div>
  );
}
