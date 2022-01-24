import {Input} from "@ya.praktikum/react-developer-burger-ui-components"

const CustomInput = ({icon, name, placeholder, value, onChange, disabled }) => {
  const [isDisabled, setDisabled] = React.useState(true)

  const onBlur = () => {
    setDisabled(true)
  }
  const onClick = () => {
    setDisabled(false)
  }

  return (
    <Input
      icon = {icon}
      name = {name}
      disabled = {disabled ?? isDisabled}
      type = {type}
      placeholder={placeholder}
      value = {value}
      onBlur = {onBlur}
      onIconClick = {onClick}
      onChange = {onChange}
    />
  )
  export default CustomInput
}