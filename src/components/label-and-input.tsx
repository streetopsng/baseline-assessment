
import { Field, FieldLabel } from './ui/field'
import { Input } from './ui/input'

const LabelAndInput = ({label,inputType}:{label:string,inputType:string}) => {
  return (
    <Field>
    <FieldLabel htmlFor={inputType}>{label}</FieldLabel>
    <Input
      id={inputType}
      type={inputType}
    //   placeholder="m@example.com"
    //   required
    />
  </Field>
  )
}

export default LabelAndInput