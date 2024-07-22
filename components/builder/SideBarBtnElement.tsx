import React from "react";
import { BuilderElement } from "./BuilderElements";
import { Button } from "../ui/button";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

function SideBarBtnElement({
  builderElement,
}: {
  builderElement: BuilderElement;
}) {
  const { label, icon: Icon } = builderElement.designerBtnElement;

  const draggable = useDraggable({
    id: `designer-btn-${builderElement.type}`,
    data: {
      type: builderElement.type,
      isDesignerBtnElement: true,
    },
  });

  return (
    <Button
      ref={draggable.setNodeRef}
      variant={"outline"}
      className={cn(
        "flex flex-col gap-2 size-[80px]",
        draggable.isDragging && "ring-2 ring-primary"
      )}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon className="size-6 text-primary cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
}

export function SideBarBtnElementDragOverlay({
  builderElement,
}: {
  builderElement: BuilderElement;
}) {
  const { label, icon: Icon } = builderElement.designerBtnElement;

  return (
    <Button
      variant={"outline"}
      className="flex flex-col gap-2 size-[80px] cursor-grab"
    >
      <Icon className="size-6 text-primary cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
}

export default SideBarBtnElement;
