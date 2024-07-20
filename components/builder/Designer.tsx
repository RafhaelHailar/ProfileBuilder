import DesignerSidebar from "./DesignerSidebar";
import { DragEndEvent, useDndMonitor, useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import {
  BuilderElementInstance,
  BuilderElements,
  ElementsType,
} from "./BuilderElements";
import useDesigner from "../hooks/useDesigner";
import { idGenerator } from "@/lib/idGenerator";

function Designer() {
  const { elements, addElement } = useDesigner();

  const droppable = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });

  useDndMonitor({
    onDragEnd: (event: DragEndEvent) => {
      const { active, over } = event;

      if (!active || !over) return;

      const isDesignerBtnElement = active.data?.current?.isDesignerBtnElement;

      if (isDesignerBtnElement) {
        const type = active.data?.current?.type;
        const newElement = BuilderElements[type as ElementsType].construct(
          idGenerator()
        );
        addElement(0, newElement);
        console.log("NEW ELEMENT", newElement);
      }

      console.log("DRAG END", event);
    },
  });

  return (
    <div className="flex w-full h-full">
      <DesignerSidebar />
      <div className="p-4 w-full">
        <div
          ref={droppable.setNodeRef}
          className={cn(
            "bg-background m-auto w-full h-full overflow-hidden max-h-[530px] max-w-[320px] rounded-xl flex flex-col flex-grow items-center justify-start flex-1",
            droppable.isOver && "ring-2 ring-primary/20"
          )}
        >
          {!droppable.isOver && elements.length === 0 && (
            <p className="text-2xl text-muted-foreground flex flex-grow items-center font-bold">
              Drop here
            </p>
          )}
          {droppable.isOver && (
            <div className="p-4 w-full">
              <div className="h-[40px] rounded-md bg-primary/20"></div>
            </div>
          )}
          {elements.length > 0 && (
            <div className="flex flex-col text-background w-full gap-2 p-4">
              {elements.map((element) => (
                <DesignerElementWrapper key={element.id} element={element} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DesignerElementWrapper({
  element,
}: {
  element: BuilderElementInstance;
}) {
  const DesignerElement = BuilderElements[element.type].designerComponent;
  return <DesignerElement elementInstance={element} />;
}

export default Designer;
