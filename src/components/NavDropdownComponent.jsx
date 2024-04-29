import { Dropdown } from "react-bootstrap";

export default function NavDropdownComponent({ route }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary">{route.title}</Dropdown.Toggle>

      <Dropdown.Menu>
        {route.items.map((item, i) => {
          return (
            <Dropdown.Item key={`nav-dropdown-item-${i}`} href={item.path}>
              {item.title}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
