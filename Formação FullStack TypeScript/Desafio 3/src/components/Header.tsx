import { Box, Button, Center, Flex, Spacer, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import { changeLocalStorage } from "../services/storage";
import { AppContext } from "./AppContext";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = async () => {
    const data: any = await api;
    changeLocalStorage({ login: false, user: data });
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Flex
      backgroundColor="gray.800"
      padding="5px"
      color="white"
      height="100px"
      justifyContent="flex-start"
      alignItems="center"
      fontWeight="bold"
    >
      <Box>
        <Center>
          <Text fontSize="3xl">Dio Bank</Text>
        </Center>
      </Box>
      {isLoggedIn && (
        <>
          <Spacer />
          <Button color="black" onClick={() => logout()}>
            Sair
          </Button>
        </>
      )}
    </Flex>
  );
};
