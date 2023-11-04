import logo from './logo.svg';
import './App.css';
import { Sidebar } from './Component/Sidebar';
import { Main } from './Component/Main';
import { Box, Stack } from '@chakra-ui/react';
import { SidebarRight } from './Component/SidebarRight';

function App() {
  return (
    <>
    <Stack bgColor={"black"} margin={"auto"} width={"100vw"} direction={"row"}>
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
      
    </>
  );
}

export default App;
