import {
    Box,
    Button,
    ButtonGroup,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { StoreContext } from '../store/store'

const StudentsTable = () => {
    const { state, dispatch } = useContext(StoreContext);

    const onDelete = (id) => {
        dispatch({ type: "DELETE_STUDENT", payload: id });
    };

    return (
        <Box>
            <Table variant={"striped"} size={"md"}>
                <Thead>
                    <Tr>
                        <Th>Full Name</Th>
                        <Th>Address</Th>
                        <Th>Phone</Th>
                        <Th>Email</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {state.student?.map((item) => (
                        <Tr key={item.id}>
                            <Td>{item.fullName}</Td>
                            <Td>{item.address}</Td>
                            <Td>{item.phone}</Td>
                            <Td>{item.email}</Td>
                            <Td>
                                <ButtonGroup isAttached variant={"outline"}>
                                    <Button colorScheme="green">Update</Button>
                                    <Button onClick={() => onDelete(item.id)} colorScheme="red">
                                        Delete
                                    </Button>
                                </ButtonGroup>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default StudentsTable;
