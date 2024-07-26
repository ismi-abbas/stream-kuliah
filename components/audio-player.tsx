"use client";
import React, { useState, useRef, SVGProps } from "react";
import {
  Box,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";

const AudioPlayer = ({ src }: { src: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const handleSliderChange = (value: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Box margin="auto" border={2} borderWidth={2} w="full" maxWidth="800px">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      <VStack spacing={4}>
        <Slider
          aria-label="audio-progress"
          value={currentTime}
          max={duration}
          onChange={handleSliderChange}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <HStack width="full" justify="space-between">
          <Text>{formatTime(currentTime)}</Text>
          <Text>{formatTime(duration)}</Text>
        </HStack>

        <Button onClick={togglePlay} w={18}>
          {isPlaying ? <Fa6SolidCirclePause /> : <Fa6SolidPlay />}
        </Button>
        {/* Title */}
        <Text fontSize="sm" textAlign="center">
          {src || "Tajuk"}
        </Text>
      </VStack>
    </Box>
  );
};

export default AudioPlayer;

export function Fa6SolidPlay(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0.75em"
      height="1em"
      viewBox="0 0 384 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9S58.2 482 73 473l288-176c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41z"
      ></path>
    </svg>
  );
}

export function Fa6SolidCirclePause(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512m-32-320v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32m128 0v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32"
      ></path>
    </svg>
  );
}
