import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

export interface Kuliah {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  ustaz: string;
}
const kuliahList: Kuliah[] = [
  {
    id: "1",
    title: "Fathul Muin",
    description: "Bab Nikah",
    ustaz: "Ustaz Mahadi",
    thumbnail: "",
    videoUrl: "",
  },
  {
    id: "2",
    title: "Fathul Muin",
    description: "Bab Nikah",
    ustaz: "Ustaz Mahadi",
    thumbnail: "",
    videoUrl: "",
  },
];

export default function Home() {
  return (
    <Flex direction="column" paddingX={20} marginY={10}>
      <Heading display="flex" alignItems="center" gap={2}>
        Stream Kuliah
        <span>
          <Image src="/masjid.svg" alt="Logo" boxSize="40px" display="inline" />
        </span>
      </Heading>
      <Text fontSize="md">Kuliah kitab di hujung jari</Text>

      <Text fontSize="sm" marginTop={2}>
        Laman Web ini menyediakan kuliah kitab-kitab agama yang diambil dari
        pelbagai Ustaz yang bertauliah mengajar kitab-kitab turath. Rujuk{" "}
        <Link href="/senarai-ustaz">pautan ini</Link> untuk senarai Ustaz yang
        terlibat.
      </Text>

      <Flex alignItems="start" gap={4} mt={4} direction="column">
        <Flex gap={2}>
          <Button colorScheme="teal">Senarai Kuliah</Button>
          <Button colorScheme="teal">Senarai Ustaz</Button>
        </Flex>

        <Flex direction="column">
          <Card>
            <CardHeader>Ustaz Mahadi</CardHeader>
            <CardBody>
              <Image src="" />
            </CardBody>
          </Card>
        </Flex>

        <Heading fontSize="large" mt={4}>
          Serarai Kuliah
        </Heading>

        <Divider my={2} />

        <Flex direction="row" gap={4}>
          {kuliahList.map((kuliah) => (
            <Card key={kuliah.id} w={200} h={250}>
              <CardHeader fontWeight={600}>{kuliah.title}</CardHeader>
              <CardBody>
                <Image src={kuliah.thumbnail} />
                <Text>{kuliah.description}</Text>
                <Text>{kuliah.ustaz}</Text>
              </CardBody>
            </Card>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
