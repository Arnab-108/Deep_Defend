import { Box, Button, Card, CardBody, CardFooter, Checkbox, CheckboxGroup, Divider, HStack, Heading, Image, Radio, RadioGroup, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { AiOutlineCloud } from "react-icons/ai";

export const SidebarRight = () => {
    return (
        <>
            <Stack bgColor={"black"} direction={"column"} width={"24vw"} height={"100vh"} align={"start"} cursor={"pointer"}>
                <HStack marginLeft={"10px"} height={"7vh"} gap={5} width={"100%"}>
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
                <VStack mt={"5vh"}>
                    <HStack>
                        <Text fontSize={"sm"} color={"gray"}>TOOLS SCORE</Text>
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
                    <VStack>
                        
                    </VStack>
                </VStack>
            </Stack>
        </>
    )
}
