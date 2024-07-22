"use client";

import { createContext, ReactNode, useState } from "react";
import { BuilderElementInstance } from "../builder/BuilderElements";

interface DesignerContextType {
  elements: BuilderElementInstance[];
  addElement: (index: number, element: BuilderElementInstance) => void;
}

export const DesignerContext = createContext<DesignerContextType | null>(null);

export default function DesignerContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [elements, setElements] = useState<BuilderElementInstance[]>([]);

  const addElement = (index: number, element: BuilderElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  return (
    <DesignerContext.Provider value={{ elements, addElement }}>
      {children}
    </DesignerContext.Provider>
  );
}
