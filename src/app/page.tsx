"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import AudioPlayer from "../../components/audio-player";
import { useState } from "react";

export interface Kuliah {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  audioSrc: string;
  ustaz: string;
}
const kuliahList: Kuliah[] = [
  {
    id: "1",
    title: "Fathul Muin",
    description: "Bab Nikah Siri 1",
    ustaz: "Ustaz Mahadi",
    thumbnail: "",
    audioSrc:
      "Siri_1_Fathul_Muin Munakahat_Bab Nikah_Ustaz_Mahadi_Mohammad.m4a",
  },
  {
    id: "2",
    title: "Fathul Muin",
    description: "Bab Nikah Siri 2",
    ustaz: "Ustaz Mahadi",
    thumbnail: "",
    audioSrc:
      "Siri_2_Fathul_Muin Munakahat_Bab Nikah_Ustaz_Mahadi_Mohammad.m4a",
  },
];

export default function Home() {
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);
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
              <CardFooter>
                <Button
                  onClick={() => {
                    setCurrentAudio(kuliah.audioSrc);
                  }}
                  colorScheme="cyan"
                  textColor="white"
                >
                  Mainkan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </Flex>
      </Flex>

      <Flex border={2}>
        <AudioPlayer src={currentAudio ?? ""} />
      </Flex>
    </Flex>
  );
}
