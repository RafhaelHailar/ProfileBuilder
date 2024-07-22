import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import React, { useState } from "react";
import { SideBarBtnElementDragOverlay } from "./SideBarBtnElement";
import { BuilderElements, ElementsType } from "./BuilderElements";

function DragOverlayWrapper() {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);

  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragCancel: () => {
      setDraggedItem(null);
    },
    onDragEnd: () => {
      setDraggedItem(null);
    },
  });

  if (!draggedItem) return null;

  let node = <div>no dragged overlay</div>;
  const isSidebarBtnElement = draggedItem.data?.current?.isDesignerBtnElement;

  if (isSidebarBtnElement) {
    node = (
      <SideBarBtnElementDragOverlay
        builderElement={
          BuilderElements[draggedItem.data?.current?.type as ElementsType]
        }
      />
    );
  }

  return <DragOverlay>{node}</DragOverlay>;
}

export default DragOverlayWrapper;
