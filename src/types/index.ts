import { MouseEventHandler, Dispatch, SetStateAction } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchBarProps {
  setManufacturer: Dispatch<SetStateAction<string>>;
  setModel: Dispatch<SetStateAction<string>>;
}

export interface SearchManufacturerProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  model: string;
  fuel: string;
  year: number;
  limit: number;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  options: OptionProps[];
  setFilter: Dispatch<SetStateAction<any>>;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: Dispatch<SetStateAction<number>>;
}
