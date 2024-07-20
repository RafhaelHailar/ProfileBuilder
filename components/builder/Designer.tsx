import DesignerSidebar from "./DesignerSidebar";
import { useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import { BuilderElementInstance } from "./BuilderElements";

function Designer() {
  const droppable = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });

  return (
    <div className="flex w-full h-full">
      <DesignerSidebar />
      <div className="p-4 w-full">
        <div
          ref={droppable.setNodeRef}
          className={cn(
            "bg-background m-auto w-full h-full max-w-[320px] rounded-xl flex flex-col flex-grow items-center justify-start flex-1",
            droppable.isOver && "ring-2 ring-primary/20"
          )}
        >
          {!droppable.isOver && (
            <p className="text-2xl text-muted-foreground flex flex-grow items-center font-bold">
              Drop here
            </p>
          )}
          {droppable.isOver && (
            <div className="p-4 w-full">
              <div className="h-[40px] rounded-md bg-primary/20"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Designer;
