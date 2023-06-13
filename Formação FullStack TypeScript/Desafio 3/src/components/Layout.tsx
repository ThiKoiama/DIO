import { Box } from "@chakra-ui/react";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Box minHeight="100vh" backgroundColor="gray.300">
        {children}
      </Box>
    </>
  );
};
