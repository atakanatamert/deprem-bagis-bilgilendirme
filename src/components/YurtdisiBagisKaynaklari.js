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
    title: "Youtube Fundraiser",
    text: "Turkiye Earthquake Relief Fund",
    logo: "/YoutubeLogo.png",
    link: "https://www.youtube.com/watch?v=qQAZNLGPdmI",
  },
  {
    id: 1,
    title: "SoftGiving",
    text: "HasanAbi For Turkey Syria Earthquakes Fund",
    logo: "/SoftgivingLogo.jpg",
    link: "https://events.softgiving.com/donate/HasanAbiForTurkeySyriaEarthquakesFund",
  },
  {
    id: 2,
    title: "Ahbap Crypto",
    text: "Cryptocurrency donations for Ahbap Foundation",
    logo: "/AhbapLogo.png",
    link: "https://crypto.ahbap.org/en",
  },
];

export default function YurtdisiBagisKaynaklari() {
  return (
    <Box p={4} pt={12}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>
          Yurtdışı Bağış Yapılabilecek Doğrulanmış Kaynaklar
          <br />
          Trusted Sources for Donations
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
              <HStack key={charity.id} align={"top"} justifyContent={"center"}>
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
