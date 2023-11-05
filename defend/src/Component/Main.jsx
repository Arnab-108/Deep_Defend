import { Box, Stack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from 'react'

export const Main = () => {
  return (
    <>
        <Box width={"100%"} height={"100vh"} backgroundColor={"black"}>
            <Stack width={"60%"} height={"70vh"} margin={"auto"} pt={"20vh"}>
                <Image src='https://media1.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif?cid=ecf05e47t6u5g2lm9ioajm443jpaibbjpugyksrqw78339pk&ep=v1_gifs_search&rid=giphy.gif&ct=g'
                boxSize={"100%"}
                objectFit={"cover"} 
                 />
            </Stack>
            
        </Box>
    </>
  )
}
