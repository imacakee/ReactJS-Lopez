import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function NavDropdownComponent({ route }) {
  const navigate = useNavigate();

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="secondary"
        style={{ backgroundColor: "#3a4a26" }}
      >
        {route.title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {route.items.map((item, i) => {
          return (
            <Dropdown.Item
              key={`nav-dropdown-item-${i}`}
              onClick={() => navigate(item.path)}
            >
              {item.title}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
