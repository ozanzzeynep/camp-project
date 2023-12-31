import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn() {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="/Picture1.jpeg" />
        <Dropdown pointing = "top left" text = "Zeynep">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
