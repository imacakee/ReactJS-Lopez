import { Link } from "react-router-dom";

export default function NavItemComponent({ route }) {
  const itemStyle = { textDecoration: "none", color: "black", fontSize: 20 };

  return (
    <div className="d-flex px-2">
      <Link style={itemStyle} to={route.path}>
        {route.title}
      </Link>
    </div>
  );
}
