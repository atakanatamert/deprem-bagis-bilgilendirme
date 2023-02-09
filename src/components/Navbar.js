import { InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={8}>
        <Flex h={32} alignItems={"center"} justifyContent={"center"}>
          <HStack align={"center"}>
            <InfoIcon boxSize={10} mx={"3"} color={"white.100"} />
            <Heading align={"center"}>Deprem Bağış Bilgilendirme</Heading>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
