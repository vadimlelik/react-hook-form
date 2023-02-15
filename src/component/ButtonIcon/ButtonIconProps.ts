const icons = {
  up: "up",
  menu: "menu",
  close: "close",
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps {
  icon: IconName;
}
