import React from "react";
import DesignerSidebar from "./DesignerSidebar";

function Designer() {
  return (
    <div className="flex w-full h-full">
      <DesignerSidebar />
      <div className="p-4 w-full">
        <div className="bg-background m-auto w-full h-full max-w-[920px] rounded-xl flex flex-col flex-grow items-center justify-start flex-1">
          <p className="text-3xl text-muted-foreground flex flex-grow items-center font-bold">
            Drop here
          </p>
        </div>
      </div>
    </div>
  );
}

export default Designer;
