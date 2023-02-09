import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const Charities = [
  {
    id: 0,
    title: "Ahbap",
    text: "",
    logo: "/AhbapLogo.png",
    link: "https://ahbap.org",
  },
  {
    id: 1,
    title: "Afad",
    text: "",
    logo: "/AfadLogo.jpg",
    link: "https://www.afad.gov.tr/depremkampanyasi2",
  },
  {
    id: 2,
    title: "Akut",
    text: "",
    logo: "/AkutLogo.png",
    link: "https://www.akut.org.tr/bagis-yap",
  },
];

export default function YurticiBagisKaynaklari() {
  return (
    <Box p={4} pt={12}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>
          Yurtiçi Bağış Yapılabilecek Doğrulanmış Kaynaklar
        </Heading>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {Charities.map((charity) => (
            <LinkBox
              key={charity.id}
              borderWidth={3}
              borderRadius={10}
              padding={10}
              backgroundColor={"gray.800"}
              _hover={{ backgroundColor: "gray.900" }}
            >
              <LinkOverlay href={charity.link}></LinkOverlay>
              <HStack align={"top"} justifyContent={"center"}>
                <VStack align={"center"}>
                  <Box>
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      src={charity.logo}
                      alt={charity.title}
                    />
                  </Box>
                  <Box color={"green.400"}>
                    <Icon as={CheckIcon} />
                  </Box>
                  <Text fontWeight={600}>{charity.title}</Text>
                  <Text color={"gray.600"}>{charity.text}</Text>
                </VStack>
              </HStack>
            </LinkBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
