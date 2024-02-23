import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  RadioGroup,
  Input,
  Radio,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
function AddTransaction({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form action="">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new Transaction</ModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeholder="Enter transaction description"
                name="description"
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeholder="Enter transaction Amount"
                name="amount"
                type="number"
              />
            </FormControl>
            <RadioGroup mt={"5"}>
              <Radio name="type" colorScheme="red" value="expense">
                Expense
              </Radio>
              <Radio name="type" colorScheme="blue" value="income">
                Income
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button mr={"4"} onClick={onClose}>
              Cancel
            </Button>
            <Button>Add</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}

export default AddTransaction;
