"use client";
import React from "react";
import {
  ElementsType,
  BuilderElement,
  BuilderElementInstance,
} from "../BuilderElements";
import { MdTextFields } from "react-icons/md";

const type: ElementsType = "TextField";

export const TextFieldBuilderElement: BuilderElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: "Text Field",
      helperText: "Helper Text",
      required: false,
      placeHolder: "Type here...",
    },
  }),
  designerBtnElement: {
    icon: MdTextFields,
    label: "Text Field",
  },
  designerComponent: DesignerComponent,
  builderComponent: () => <div>Builder Component</div>,
  propertiesComponent: () => <div>Properties Component</div>,
};

function DesignerComponent({
  elementInstance,
}: {
  elementInstance: BuilderElementInstance;
}) {
  return (
    <div className="text-primary">{elementInstance.extraAttributes?.label}</div>
  );
}
