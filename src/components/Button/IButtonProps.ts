
export default interface IButtonProps {
  class_names: string[];
  id: string | undefined;
  text: string | undefined;
  type: "button" | "reset" | "submit" | undefined;
  on_click: () => void | undefined;
}