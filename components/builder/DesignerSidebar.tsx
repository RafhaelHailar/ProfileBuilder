import React from "react";
import SideBarBtnElement from "./SideBarBtnElement";
import { BuilderElements } from "./BuilderElements";

function DesignerSidebar() {
  return (
    <aside className="w-[600px] max-w-[600px] flex flex-col flex-grow h-full bg-background">
      <SideBarBtnElement builderElement={BuilderElements.TextField} />
    </aside>
  );
}

export default DesignerSidebar;
