import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input as ChakraInput, InputProps } from "@chakra-ui/input";

interface Props extends InputProps {
  label: string;
}

export const Input = ({ label, ...props }: Props) => {
  return (
    <FormControl w="full">
      <FormLabel fontSize="xs">{label}</FormLabel>
      <ChakraInput size="lg" bg="gray.50" {...props} />
    </FormControl>
  );
};
