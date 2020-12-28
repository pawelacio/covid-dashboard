
import {
  ToogleWrapperStyled,
  ToggleDot,
  ToggleInput,
  ToggleIcon
} from './ToggleStyled';

export const Toggle = ({
  value,
  onClick,
  disabled,
  icon
}) => {

return (
  <ToogleWrapperStyled onClick={() => onClick()} value={value} disabled={disabled}>
    <ToggleDot>
      { icon && (
        <ToggleIcon src={icon}/>
      )}
    </ToggleDot>
    <ToggleInput disabled={disabled} />
  </ToogleWrapperStyled>
)
}

export default Toggle;