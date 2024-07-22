"use client";
import React, { useRef, useState } from "react";
import {
  ElementsType,
  BuilderElement,
  BuilderElementInstance,
} from "../BuilderElements";
import { MdTextFields } from "react-icons/md";
import { cn } from "@/lib/utils";

const type: ElementsType = "TextField";

const extraAttributes = {
  label: "Text Field",
  helperText: "Helper Text",
  required: false,
  placeHolder: "Type here...",
};

export const TextFieldBuilderElement: BuilderElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: MdTextFields,
    label: "Text Field",
  },
  designerComponent: DesignerComponent,
  builderComponent: () => <div>Builder Component</div>,
  propertiesComponent: () => <div>Properties Component</div>,
};

interface CustomInstance extends BuilderElementInstance {
  extraAttributes: typeof extraAttributes;
}

function DesignerComponent({
  elementInstance,
}: {
  elementInstance: BuilderElementInstance;
}) {
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const element = elementInstance as CustomInstance;

  return (
    <div className="text-primary">
      <div
        onClick={() => setIsEditing(true)}
        className={cn("font-bold", isEditing && "hidden")}
      >
        {element.extraAttributes.label}
      </div>
    </div>
  );
}
