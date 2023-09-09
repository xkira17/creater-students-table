import {
  Box,
  Card,
  Heading,
  Button,
  Flex,
  DrawerHeader,
  DrawerCloseButton,
  Divider,
  DrawerBody,
  useDisclosure,
  Drawer,
  DrawerContent
} from "@chakra-ui/react";
import React, { useReducer } from "react";
import { reducer, initialState } from "./store/reducer";
import { StoreContext } from './store/store'
import StudentsTable from './components/StudentsTable'

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <Box
        w={{
          base: "100%",
          md: "90%",
          lg: "70%",
        }}
        mx={"auto"}
        my={20}
      >
        <Card p={4}>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Heading fontSize={"32px"}>Students</Heading>
            <Button onClick={onOpen}>Create student</Button>
          </Flex>
          <Divider my={6} />

          <StudentsTable />
          <Drawer isOpen={isOpen} onClose={onClose} placement="right">
            <DrawerContent>
              <DrawerHeader display={"flex"} alignItems={"center"}>
                Create student
                <DrawerCloseButton />
              </DrawerHeader>
              <Divider />
              <DrawerBody>body</DrawerBody>
            </DrawerContent>
          </Drawer>
        </Card>
      </Box>
    </StoreContext.Provider>
  );
};

export default App;
