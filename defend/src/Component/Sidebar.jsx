import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHome,AiFillCloud,AiOutlineCloud} from "react-icons/ai";

import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { TbReportAnalytics,TbManualGearbox } from "react-icons/tb";
import { LuComputer } from "react-icons/lu";
import { GrSettingsOption } from "react-icons/gr";
export const Sidebar = () => {
  return (
    <>
        <Stack backgroundColor={"#060613"} align={'start'} spacing={4} width={"16vw"} height={"100vh"} cursor={"pointer"} direction={"column"}>
            <VStack align={"start"}>
                <Accordion backgroundColor={"black"} width={"16vw"} defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <Heading as={"h2"} size={"sm"} fontWeight={"semibold"} color={"white"}>
                            <AccordionButton height={"7vh"}>
                                <HStack width={"16vw"}>
                                    <AiOutlineHome />
                                    <Heading paddingLeft={"1vw"} as='h2' size={"sm"} fontWeight={"semibold"} textAlign={"left"}>HOME</Heading>
                                </HStack>
                                
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel>
                            <Stack paddingBottom={"2vh"} gap={1} direction={"column"} align={"start"} > 
                                <HStack width={"100%"} height={"7vh"} color={"gray"} _hover={{backgroundColor:"#3385ff", color:"white"}}>
                                    <Heading paddingLeft={"1vw"} as={"h2"} size={"sm"} fontWeight={"semibold"} >Dashboard</Heading>
                                </HStack>
                                <HStack width={"100%"} height={"7vh"} color={"gray"} _hover={{backgroundColor:"#3385ff", color:"white"}}>
                                    <Heading paddingLeft={"1vw"} as={"h2"} size={"sm"} fontWeight={"semibold"} >Coverage</Heading>
                                </HStack>
                                <HStack width={"100%"} height={"7vh"} color={"gray"} _hover={{backgroundColor:"#3385ff", color:"white"}}>
                                    <Heading paddingLeft={"1vw"} as={"h2"} size={"sm"} fontWeight={"semibold"} >Current</Heading>
                                </HStack>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>
            </VStack>
            <VStack align={"start"}>
                <HStack width={"16vw"} height={"7vh"} color={"gray"} _hover={{backgroundColor:"#3385ff", color:"white"}} paddingLeft={"1vw"} >
                    <HiOutlineWrenchScrewdriver />
                    <Heading paddingLeft={"1vw"} as={"h4"} size={"sm"} fontWeight={"semibold"} textAlign={"left"}>ON-PREMISE</Heading>
                </HStack>
            </VStack>
            <VStack align={"start"}>
                <HStack width={"16vw"} height={"7vh"} color={"gray"} _hover={{backgroundColor:"#3385ff", color:"white"}} paddingLeft={"1vw"} >
                    <AiFillCloud />
                    <Heading paddingLeft={"1vw"} as={"h4"} size={"sm"} fontWeight={"semibold"}  textAlign={"left"}>SSPM</Heading>
                </HStack>
            </VStack>
            <VStack align={"start"}>
                <HStack width={"16vw"} height={"7vh"} color={"gray"} _hover={{backgroundColor:"#3385ff", color:"white"}} paddingLeft={"1vw"} >
                    <AiOutlineCloud />
                    <Heading paddingLeft={"1vw"} as={"h4"} size={"sm"} fontWeight={"semibold"} textAlign={"left"}>CSPM</Heading>
                </HStack>
            </VStack>
            <VStack align={"start"}>
                <HStack width={"16vw"} height={"7vh"} color={"gray"} _hover={{backgroundColor:"#3385ff", color:"white"}} paddingLeft={"1vw"} >
                    <LuComputer />
                    <Heading paddingLeft={"1vw"} as={"h4"} size={"sm"} fontWeight={"semibold"} textAlign={"left"}>FRAMEWORKS</Heading>
                </HStack>
            </VStack>
            <VStack align={"start"}>
                <HStack width={"16vw"} height={"7vh"} color={"gray"} _hover={{backgroundColor:"#3385ff", color:"white"}} paddingLeft={"1vw"} >
                    <TbReportAnalytics />
                    <Heading paddingLeft={"1vw"} as={"h4"} size={"sm"} fontWeight={"semibold"} textAlign={"left"}>REPORTS</Heading>
                </HStack>
            </VStack>
            <VStack align={"start"}>
                <HStack width={"16vw"} height={"7vh"} color={"gray"} _hover={{backgroundColor:"#3385ff", color:"white"}} paddingLeft={"1vw"} >
                    <TbManualGearbox />
                    <Heading paddingLeft={"1vw"} as={"h4"} size={"sm"} fontWeight={"semibold"}  textAlign={"left"}>SYSTEM</Heading>
                </HStack>
            </VStack>


        </Stack>
    </>
  )
}
