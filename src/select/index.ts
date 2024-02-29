import SelectParent from "./Select";
export type { SelectProps } from "./Select";

import Option from "./SelectOption";
export type { SelectOptionProps } from "./SelectOption";

type SelectNamespace = typeof SelectParent & {
  Option: typeof Option;
};

const Select = SelectParent as SelectNamespace;
Select.Option = Option;

export { Select };
