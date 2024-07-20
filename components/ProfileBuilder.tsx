import React from "react";
import Designer from "./Designer";
import { DndContext } from "@dnd-kit/core";

function ProfileBuilder() {
  return (
    <DndContext>
      <main className="w-full flex flex-col">
        <div className="flex w-full flex-grow bg-accent bg-[url(/texture.svg)]">
          <Designer />
        </div>
      </main>
    </DndContext>
  );
}

export default ProfileBuilder;
