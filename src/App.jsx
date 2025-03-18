import { Box, Heading, Flex } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <Flex direction="column" align="center" justify="center">
        <Heading as="h1" size="xl" mb={4} color="white">
          Code Editor <span className="blink" style={{ color: 'red' }}>_</span>
        </Heading>
      </Flex>
      <CodeEditor />
      <style>
        {`
          @keyframes blink {
            50% {
              opacity: 0;
            }
          }
          .blink {
            animation: blink 1s step-end infinite;
          }
        `}
      </style>
    </Box>
  );
}

export default App;
