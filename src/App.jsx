import { Container, Flex, Box } from "@chakra-ui/react";
import Main from "./components/Main";

function App() {
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
