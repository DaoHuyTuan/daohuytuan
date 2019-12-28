import React from "react";
import Label from "../../atoms/Label/index";
import { listMenu } from "./menu";
import Link from "next/link";
class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        {listMenu.map((item, index) => {
          return (
            <Link href={item.url} passHref key={item.id}>
              <Label>{item.name}</Label>
            </Link>
          );
        })}
      </div>
    );
  }
}
export default Menu;
