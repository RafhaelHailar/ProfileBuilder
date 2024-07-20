"use client";
import React from "react";
import {
  ElementsType,
  BuilderElement,
  BuilderElementInstance,
} from "../BuilderElements";
import { MdTextFields } from "react-icons/md";

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
  const element = elementInstance as CustomInstance;
  return <div className="text-primary">{element.extraAttributes.label}</div>;
}
