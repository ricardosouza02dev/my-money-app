import React from "react";
import MenuItem from "./menuitem";
import MenuTree from "./menuTree";
import "./custom.css";

export default (props) => (
  <ul className="sidebar-menu" id="teste">
    <MenuItem path="#" label="Dashboard" icon="dashboard" />
    <MenuTree label="Cadastro" icon="edit">
      <MenuItem path="#billingCycles"  label='Ciclo de pagamentos' icon='usd'/>
    </MenuTree>
  </ul>
);
