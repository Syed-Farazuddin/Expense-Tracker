import React, { useContext } from "react";
import { Container, Flex, Box } from "@chakra-ui/react";
import { GlobalContext } from "./context";
import Main from "./components/Main";

function App() {
  const { text } = useContext(GlobalContext);
  return (
    <Container bg={"#f8fafd"} maxW={"Container.3xl"} height={"100vh"} p={"0"}>
      <Flex height={"full"} flexDirection={"column"} flex={5}>
        <Box>
          <Main />
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
