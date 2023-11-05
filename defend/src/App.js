import logo from './logo.svg';
import './App.css';
import { Sidebar } from './Component/Sidebar';
import { Main } from './Component/Main';
import { Box, Stack, VStack } from '@chakra-ui/react';
import { SidebarRight } from './Component/SidebarRight';
import { Nav } from './Component/Nav';
import { Scrollbar } from 'react-scrollbars-custom';
function App() {
  return (
    <>
      <Scrollbar style={{width:"100vw" , height:"100vh"}}>
        <Box width={"100%"}>
          <Nav />
        </Box>
        <Stack bgColor={"black"} margin={"auto"} width={"100%"} direction={"row"}>
          <Box height={"100%"} width={"15%"}>
            <Sidebar />
          </Box>
          <Box borderRight={"2px solid gray"} height={"100%"} width={"60%"}>
            <Main />
          </Box>
          <Box height={"100%"} width={"25%"}>
            <SidebarRight />
          </Box>
        </Stack>
      </Scrollbar>
    </>
  );
}

export default App;
