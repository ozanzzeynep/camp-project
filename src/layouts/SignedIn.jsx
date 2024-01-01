import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import Picture1 from './Picture1.jpeg';

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src={Picture1} />
        <Dropdown pointing = "top left" text = "Zeynep">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item  onClick = {signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
