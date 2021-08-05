import {
  FormControl,
  Icon,
  IIconProps,
  IInputProps,
  Input as NBInput,
  Stack,
} from "native-base";
import React, { forwardRef } from "react";

interface IInput extends IInputProps {
  label?: string;
  hint?: string;
  error?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

const iconsProps: IIconProps = {
  size: "sm",
  m: 2,
};

const Input = forwardRef((props: IInput, ref) => {
  const { label, error, hint, leftIcon, rightIcon, ...baseInputProps } = props;

  return (
    <FormControl isInvalid={!!error}>
      <Stack mx={2}>
        <FormControl.Label>{label}</FormControl.Label>
        <NBInput
          {...baseInputProps}
          ref={ref}
          InputLeftElement={leftIcon && <Icon as={leftIcon} {...iconsProps} />}
          InputRightElement={
            rightIcon && <Icon as={rightIcon} {...iconsProps} />
          }
        />
        <FormControl.HelperText>{hint}</FormControl.HelperText>
        <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  );
});

export default Input;
