import { ChakraProvider } from "@chakra-ui/react";
import { Card } from "./components/Card";
import { Layout } from "./components/Layout";
function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Card />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
