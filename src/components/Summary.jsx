import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import AddTransaction from "./AddTransaction";
function Summary({ onClose, isOpen }) {
  return (
    <Box
      p={"1"}
      bg={"white"}
      border={"1px solid"}
      borderColor={"grey.100"}
      display={"flex"}
      borderRadius={"10"}
      mt={"10"}
      overflow={"hidden"}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        w={"full"}
      >
        <Flex
          w={"full"}
          flex={"1"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          ml={"-20"}
          mr={"2"}
          //   px={"5"}
        >
          <Heading size={"md"} mb={"4"} color={"grey.600"}>
            Balance
          </Heading>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"grey.50"}
            w={"full"}
            h={"100px"}
            border={"1px solid"}
            borderColor={"grey.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"grey.700"}>$100</Heading>
              <Text color={"grey.600"}>Total income</Text>
            </Flex>
          </Flex>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"grey.50"}
            w={"full"}
            h={"100px"}
            border={"1px solid"}
            borderColor={"grey.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"grey.700"}>$100</Heading>
              <Text color={"grey.600"}>Total Expense</Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          flex={"1"}
          mt={"10"}
          ml={"-90px"}
          mr={"5"}
          w={"300px"}
          h={"300px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading>Chart</Heading>
        </Box>
      </Flex>
      <AddTransaction onClose={onClose} isOpen={isOpen} />
    </Box>
  );
}

export default Summary;
