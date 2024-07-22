"use client";

import React from "react";
import Designer from "./Designer";
import { DndContext } from "@dnd-kit/core";
import DragOverlayWrapper from "./DragOverlayWrapper";

function ProfileBuilder() {
  return (
    <DndContext>
      <main className="w-full flex flex-col">
        <nav className="py-2">Builder Navbar</nav>
        <div className="flex w-full flex-grow bg-accent bg-[url(/texture.svg)]">
          <Designer />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
}

export default ProfileBuilder;
