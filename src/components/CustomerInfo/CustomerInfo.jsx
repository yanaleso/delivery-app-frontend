import { InputWrapper, Label, Input, FormError } from './CustomerInfo.styled';
import { Box } from '../Box';

function CustomerInfo() {
  return (
    <Box>
      <InputWrapper>
        <Label>Name</Label>
        <Input type="text" name="name" />
        <FormError name="name" />
      </InputWrapper>
      <InputWrapper>
        <Label>Email</Label>
        <Input type="email" name="email" />
        <FormError name="email" />
      </InputWrapper>
      <InputWrapper>
        <Label>Phone</Label>
        <Input type="tel" name="number" />
        <FormError name="number" />
      </InputWrapper>
      <InputWrapper>
        <Label>Address</Label>
        <Input type="text" name="address" />
        <FormError name="address" />
      </InputWrapper>
    </Box>
  );
}

export default CustomerInfo;
