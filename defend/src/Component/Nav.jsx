import { Avatar, Box, Button, ButtonGroup, Flex, HStack, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

export const Nav = () => {
    return (
        <>
            <Flex bgColor={"black"} width={"100%"} height={"9vh"} alignItems='center' gap='2'>
                <HStack pl='2vw' gap={10}>
                    <Image
                        height={"50px"}
                        width={"100px"}
                        src='https://media.licdn.com/dms/image/C4D33AQG0VIKN4xrR2g/thumbnail-720-1280/0/1635206201996?e=2147483647&v=beta&t=i7eAdoCC3RK1oJ3_vQNRY8OO3DZixCPw6IfNkUkuLvE'

                    />
                    <Heading as={"h2"} fontWeight={"medium"} size='md' color={"white"}>Cyber Defense Status</Heading>
                </HStack>
                <Spacer />
                <HStack pr={"2vw"} gap={"2vw"}>
                    <HStack>
                        <Avatar bgColor={"black"} size='md' name='Ryan Florence' src='data:image/png;base64,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' />
                        <Text fontSize={"xs"} fontWeight={"semibold"} color={"white"}>START CALCULATIONS</Text>
                    </HStack>
                    <Avatar size={"md"} src='https://bit.ly/code-beast' />
                </HStack>
            </Flex>
        </>
    )
}
