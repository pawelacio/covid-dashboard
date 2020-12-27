
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
  <ToogleWrapperStyled onClick={() => onClick()} value={value}>
    <ToggleDot>
      { icon && (
        <ToggleIcon src={icon}/>
      )}
    </ToggleDot>
    <ToggleInput />
  </ToogleWrapperStyled>
)
}

export default Toggle;