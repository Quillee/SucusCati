import React from 'react';
import IButtonProps from './IButtonProps';
import "../../resources/css/succ.css";


const SuccButton: React.StatelessComponent<IButtonProps> = ({ type, id, class_names, on_click, text }: IButtonProps) => 
  <React.Fragment>
    <button type={type} id={id || ""}
            onClick={on_click || undefined}
            className={class_names ? class_names.join(" ") : "succ-btn"}>
      {text}
    </button>
  </React.Fragment>

/**
 * A wrapper around SuccButton that doesn't need the btn-sm or succ-btn classNames
 * @param props : IButtonProps doesn't need succ-btn and btn-sm specified
 */
const SmallSuccButton: React.StatelessComponent<IButtonProps> = (props: IButtonProps) => {
  const default_props: IButtonProps = {
    type: props.type,
    text: props.text,
    class_names: ["succ-btn", "btn-sm"].concat(...props.class_names),
    on_click: props.on_click,
    id: props.id,
  };

  return (
    <SuccButton type={props.type} id={props.id} class_names={props.class_names} text={props.text} on_click={props.on_click}/>
  )
}

export default SuccButton;
