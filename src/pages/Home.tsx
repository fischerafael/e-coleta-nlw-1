import { HStack, Image, VStack, Text, Button } from "@chakra-ui/react";
import { FiLogIn } from "react-icons/fi";
import { AppTemplate } from "../components/Templates/AppTemplate";

export const Home = () => {
  return (
    <AppTemplate
      content={
        <>
          <VStack
            w="full"
            h="full"
            justify="center"
            align="flex-start"
            spacing="8"
          >
            <Text
              lineHeight="1.25"
              fontSize="5xl"
              fontWeight="bold"
              textAlign="left"
            >
              Your waste collection marketplace.
            </Text>

            <Text fontSize="lg" textAlign="left">
              We help people find collection points efficiently.
            </Text>

            <Button
              leftIcon={<FiLogIn />}
              w={["full", "full", "fit-content"]}
              colorScheme="green"
              size="lg"
              p="8"
            >
              Register a collection point
            </Button>
          </VStack>

          <VStack
            w="full"
            h="full"
            justify="center"
            display={["none", "none", "flex"]}
            p="4"
          >
            <Image src="/pessoas.svg" alt="Pessoas" />
          </VStack>
        </>
      }
    />
  );
};
