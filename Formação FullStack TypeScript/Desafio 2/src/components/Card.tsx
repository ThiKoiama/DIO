import { Center, Input, Box } from "@chakra-ui/react";
import { welcome } from "../services/welcome";
import { Button } from "./Button/Button";

export const Card = () => {
  return (
    <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
      <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Center>
          <Button onClick={welcome} />
        </Center>
      </Box>
    </Box>
  );
};
