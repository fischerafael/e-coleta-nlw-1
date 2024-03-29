import { Image } from "@chakra-ui/image";
import { HStack, VStack } from "@chakra-ui/layout";
import { ReactElement } from "react";

interface Props {
  content: ReactElement;
  action?: ReactElement;
}

export const AppTemplate = ({ content, action }: Props) => {
  return (
    <VStack
      bg="gray.50"
      w="100vw"
      h="100vh"
      justify="flex-start"
      align="center"
      color="blue.900"
      px="4"
    >
      <HStack
        minH="20vh"
        w="full"
        maxW="container.md"
        align="center"
        justify="space-between"
      >
        <Image objectFit="contain" alt="Logo" src="/logo.svg" />

        {action}
      </HStack>

      <HStack
        w="full"
        h="full"
        maxW="container.md"
        align="center"
        justify="center"
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "white",
            borderRadius: "24px",
          },
        }}
      >
        {content}
      </HStack>
    </VStack>
  );
};
