import React from "react";
import { Flex, Heading, Button, useDisclosure } from "@chakra-ui/react";
import Summary from "./Summary";
import ExpenseView from "./ExpenseView";
function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      textAlign={"center"}
      flexDirection={"column"}
      pr={"5"}
      pl={"5"}
      bg={"blue.50"}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.500"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button bg={"blue.500"} onClick={onOpen} color={"black"}>
            Add new Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary onClose={onClose} isOpen={isOpen} />
      <Flex
        width={"full"}
        flexDirection={["column", "column", "column", "row", "row"]}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
      >
        <ExpenseView />
        <ExpenseView />
        <ExpenseView />
      </Flex>
    </Flex>
  );
}

export default Main;
