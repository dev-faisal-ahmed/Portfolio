import { iconData } from './icon.data';

type TProps = {
  iconName: string;
};

export function IconPicker({ iconName }: TProps) {
  return iconData[iconName];
}
