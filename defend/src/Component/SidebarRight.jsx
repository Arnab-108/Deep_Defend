import { Box, Button, Card, CardBody, CardFooter, Checkbox, CheckboxGroup, Divider, HStack, Heading, Image, Radio, RadioGroup, Stack, Text, VStack, keyframes } from '@chakra-ui/react'
import React from 'react'
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { AiOutlineCloud } from "react-icons/ai";
import { data } from './data';
import { Scrollbar } from 'react-scrollbars-custom';
export const SidebarRight = () => {
    return (
        <>
            <Stack bgColor={"black"} direction={"column"} width={"24vw"} height={"100vh"} align={"start"} cursor={"pointer"}>
                <HStack mt={"3vh"} marginLeft={"6px"} height={"7vh"} gap={5} width={"100%"}>
                    <Text fontSize={"sm"} color={"gray"} _hover={{ color: "white", textDecoration: "underline", fontWeight: "semibold" }}>CONTROLS</Text>
                    <Divider orientation='vertical' />
                    <Text fontSize={"sm"} color={"gray"} _hover={{ color: "white", textDecoration: "underline", fontWeight: "semibold" }}>COVERAGE</Text>
                    <Divider orientation='vertical' />
                    <Text fontSize={"sm"} color={"gray"} _hover={{ color: "white", textDecoration: "underline", fontWeight: "semibold" }}>TOOLS</Text>
                    <Divider orientation='vertical' />
                    <Text fontSize={"sm"} color={"gray"} _hover={{ color: "white", textDecoration: "underline", fontWeight: "semibold" }}>TRENDS</Text>
                </HStack>
                <VStack mt={"3vh"}>
                    <Text fontSize={"sm"} color={"gray"}>TOOLS SCORE</Text>
                    <Box height={"8vh"} width={"4vw"} border={"5px dotted yellow"} borderRadius={"50%"}>
                        <Text fontWeight={"semibold"} color={"white"} textAlign={"center"} fontSize={"lg"} pt={"1.5vh"}>64</Text>
                    </Box>
                </VStack>
                <VStack mt={"3vh"}>
                    <HStack>
                        <Text fontSize={"sm"} color={"gray"}>TOOLS LIST</Text>
                        <RadioGroup>
                            <Stack gap={4} direction={"row"} paddingLeft={"4vw"}>
                                <Radio value='1' size='md' colorScheme='red'>
                                    <Text fontSize={"sm"} color={"white"}>Slow</Text>
                                </Radio>
                                <Radio value='2' size='md' colorScheme='green'>
                                    <Text fontSize={"sm"} color={"white"}>Regular</Text>
                                </Radio>
                                <Radio value='3' size='md' colorScheme='orange'>
                                    <Text fontSize={"sm"} color={"white"}>Fast</Text>
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </HStack>

                    <VStack overflow={"hidden"} height={"65vh"} mt={"4vh"}>
                        <Scrollbar style={{ width: 310, height: 400}}>
                            {
                                data?.map((el) => (
                                    <Stack mt={"2vh"} height={"20vh"} direction={"column"}>
                                        <HStack bgColor={"#303336"} pt={"1vh"} gap={5} width={"100%"} height={"14vh"}>
                                            <Image
                                                src={el.img}
                                                // width={"80px"}
                                                // height={"80px"}
                                                boxSize={"80px"}
                                                objectFit={"cover"}
                                            />
                                            <VStack width={"50%"} align={"start"}>
                                                <Heading color={"white"} as={"h4"} size={"sm"}>{el.name}</Heading>
                                                <Text color={"#bfbfbf"} fontWeight={"thin"} fontSize={"sm"}>local</Text>
                                            </VStack>
                                            <Box height={"6vh"} width={"3vw"} border={"2px dotted gray"} borderRadius={"50%"}>
                                                <Text fontWeight={"semibold"} color={"white"} textAlign={"center"} fontSize={"xs"} pt={"1.5vh"}>N/A</Text>
                                            </Box>
                                        </HStack>
                                        <HStack gap={5} color={"white"} height={"6vh"} align={"start"}>
                                            <HiOutlineWrenchScrewdriver size={"1.5em"} />
                                            <Divider orientation='vertical' />
                                            <AiOutlineCloud size={"1.5em"} />
                                        </HStack>
                                    </Stack>
                                ))
                            }
                        </Scrollbar>
                    </VStack>
                </VStack>
            </Stack>
        </>
    )
}
