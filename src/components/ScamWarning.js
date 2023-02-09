import {
  Container,
  Stack,
  Heading,
  Link,
  Text,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";

export default function ScamWarning() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        flex={1}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 8, md: 12 }}
        align={"center"}
      >
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          align={"center"}
        >
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "red.400",
              zIndex: -1,
            }}
          >
            Aşağıda dolandırıcılık örnekleri mevcuttur,
          </Text>
          <br />
          <Text as={"span"} color={"red.400"}>
            ASLA İtibar Etmeyin!
          </Text>
        </Heading>
        <Heading
          color={"gray.500"}
          lineHeight={1.1}
          size={"lg"}
          align={"center"}
        >
          Below are some scam examples. Be aware and NEVER trust them!
        </Heading>
        <Heading
          color={"gray.100"}
          lineHeight={1.1}
          size={"lg"}
          align={"center"}
        >
          1 - Sahte ve Zararlı Web Siteleri (Fake/Scam Donation Sites)
        </Heading>{" "}
        <Heading
          color={"gray.100"}
          lineHeight={1.1}
          size={"md"}
          align={"center"}
        >
          Sahte ve zararlı siteler reklam kullanarak arama sonuçlarında yukarıya
          çıkabiliyorlar.
          <List mt={8} spacing={8}>
            <ListItem>
              Sahte/Zararlı site ihbarı için (Reporting scam websites):{" "}
              <Link
                href={"https://www.usom.gov.tr/ihbar"}
                color={"#00FF00"}
                isExternal
              >
                https://www.usom.gov.tr/ihbar
              </Link>{" "}
            </ListItem>
            <ListItem>
              Site ihbar durumunu sorgulamak için (Checking the site report
              status):{" "}
              <Link
                href={"https://www.usom.gov.tr/adres"}
                color={"#00FF00"}
                isExternal
              >
                https://www.usom.gov.tr/adres
              </Link>{" "}
            </ListItem>
          </List>
        </Heading>
        <Image
          rounded={"md"}
          alt={"SahteSite"}
          src={"/SahteSite.jpg"}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%", sm: "400px", lg: "500px" }}
        />
        <Stack
          direction={["column", "row"]}
          spacing={{ base: 8, md: 10 }}
          align={"center"}
        >
          <Image
            rounded={"md"}
            alt={"UsomIhbar"}
            src={"/UsomIhbar.png"}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
          <Image
            rounded={"md"}
            alt={"UsomSorgulama"}
            src={"/UsomSorgulama.png"}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Stack>
        <Heading
          color={"gray.100"}
          lineHeight={1.1}
          size={"lg"}
          align={"center"}
        >
          2 - Sahte Twitter Hesapları (Fake/Scam Twitter Sites)
        </Heading>
        <Stack
          direction={["column", "row"]}
          spacing={{ base: 8, md: 10 }}
          align={"center"}
        >
          <Image
            rounded={"md"}
            alt={"TwitterRealAccount"}
            src={"/TwitterGercek.jpg"}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
          <Image
            rounded={"md"}
            alt={"TwitterFakeAccount"}
            src={"/TwitterSahte.jpg"}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Stack>
        <Heading
          color={"gray.100"}
          lineHeight={1.1}
          size={"md"}
          align={"center"}
        >
          Sahte hesapları üç noktaya tıklayıp `Bildir` (Report) üzerinden
          şikayet edebilirsiniz.
        </Heading>
        <Heading
          color={"gray.100"}
          lineHeight={1.1}
          size={"md"}
          align={"center"}
        >
          You can report fake/scam accounts to Twitter by clicking on 3-Dots and
          then choosing `Report`
        </Heading>
        <Stack
          direction={["column", "row"]}
          spacing={{ base: 8, md: 10 }}
          align={"center"}
        >
          <Image
            rounded={"md"}
            alt={"TwitterReport-1"}
            src={"/TwitterIhbar-1.jpg"}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
          <Image
            rounded={"md"}
            alt={"TwitterReport-2"}
            src={"/TwitterIhbar-2.jpg"}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />{" "}
        </Stack>
      </Stack>
    </Container>
  );
}
