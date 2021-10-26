import { Button } from "@chakra-ui/button";
import { HStack, Text, VStack } from "@chakra-ui/layout";
import { FiArrowLeft } from "react-icons/fi";
import { AppTemplate } from "../components/Templates/AppTemplate";

export const NewPoint = () => {
  return (
    <AppTemplate
      action={
        <Button variant="ghost" colorScheme="green" leftIcon={<FiArrowLeft />}>
          Go Back
        </Button>
      }
      content={
        <VStack w="full" h="full" overflowY="auto">
          <VStack
            as="form"
            maxW="container.sm"
            w="full"
            bg="white"
            shadow="sm"
            align="flex-start"
            p="8"
            spacing="8"
          >
            <Text fontSize="2xl" fontWeight="bold">
              Collection Point Register
            </Text>

            <Text fontSize="xl" fontWeight="bold">
              Data
            </Text>

            <Text fontSize="xl" fontWeight="bold">
              Address
            </Text>

            <HStack w="full" justify="space-between">
              <Text fontSize="xl" fontWeight="bold">
                Items
              </Text>

              <Text>Select one or more</Text>
            </HStack>
          </VStack>
        </VStack>
      }
    />
  );
};
