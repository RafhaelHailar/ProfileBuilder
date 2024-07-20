import { TextFieldBuilderElement } from "./field/TextField";

export type ElementsType = "TextField";

export interface BuilderElement {
  type: ElementsType;

  construct: (id: string) => BuilderElementInstance;

  designerBtnElement: {
    icon: React.ElementType;
    label: string;
  };

  designerComponent: React.FC;
  builderComponent: React.FC;
  propertiesComponent: React.FC;
}

export interface BuilderElementInstance {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
}

type BuilderElementsType = {
  [key in ElementsType]: BuilderElement;
};

export const BuilderElements: BuilderElementsType = {
  TextField: TextFieldBuilderElement,
};
