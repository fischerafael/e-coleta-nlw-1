import dynamic from "next/dynamic";
import { Button } from "@chakra-ui/button";
import { Flex, HStack, Text, VStack } from "@chakra-ui/layout";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../components/molecules/Input";

const Map = dynamic(() => import("../components/molecules/Map"), {
  ssr: false,
});

import { AppTemplate } from "../components/Templates/AppTemplate";
import { useGetCurrentPosition } from "../hooks/useGetCurrentPosition";

export const NewPoint = () => {
  const { coords } = useGetCurrentPosition();

  return (
    <AppTemplate
      action={
        <Button variant="ghost" colorScheme="green" leftIcon={<FiArrowLeft />}>
          Go Back
        </Button>
      }
      content={
        <VStack w="full" h="full">
          <VStack
            as="form"
            maxW="container.sm"
            w="full"
            bg="white"
            shadow="sm"
            align="flex-start"
            p="16"
            spacing="8"
          >
            <Text fontSize="2xl" fontWeight="bold">
              Collection Point Register
            </Text>

            <VStack w="full" align="flex-start" spacing="4">
              <Text fontSize="xl" fontWeight="bold">
                Data
              </Text>

              <Input label="Entity Name" />
              <Input label="Email" />
              <Input label="WhatsApp" />
            </VStack>

            <VStack w="full" align="flex-start" spacing="4">
              <Text fontSize="xl" fontWeight="bold">
                Address
              </Text>

              <Flex w="full" h="40vh">
                <Map latitude={coords.latitude} longitude={coords.longitude} />
              </Flex>

              <HStack w="full" spacing="8">
                <Input label="Number" />
                <Input label="City" />
              </HStack>

              <Input label="State" />
            </VStack>

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
