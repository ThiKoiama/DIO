import { Button, Text } from "@chakra-ui/react";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";

const ContaInfo = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <>
      <Text fontSize="3xl" fontWeight="bold">
        Informações da conta
      </Text>
      <Text fontSize="xl">Nome: {user?.name}</Text>
      <Text fontSize="xl">Email: {user?.email}</Text>
      <Button
        onClick={() => navigate("/conta/1")}
        backgroundColor="black"
        color="white"
      >
        VOLTAR
      </Button>
    </>
  );
};

export default ContaInfo;
