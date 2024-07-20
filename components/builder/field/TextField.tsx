"use client";
import React from "react";
import { ElementsType, BuilderElement } from "../BuilderElements";
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
  designerComponent: () => <div>Designer Component</div>,
  builderComponent: () => <div>Builder Component</div>,
  propertiesComponent: () => <div>Properties Component</div>,
};
