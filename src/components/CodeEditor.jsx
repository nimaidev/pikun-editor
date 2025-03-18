import { useRef, useState } from "react";
import { Box, HStack, VStack, Heading } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("c");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box p={4} bg="gray.800" minH="100vh">
      <VStack spacing={8}>
        <HStack spacing={4} w="full">
          <Box w="50%" bg="gray.700" p={4} borderRadius="md" boxShadow="md">
            <LanguageSelector language={language} onSelect={onSelect} />
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },
              }}
              height="75vh"
              theme="vs-dark"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </Box>
          <Box w="50%" bg="gray.700" p={4} borderRadius="md" boxShadow="md">
            <Output editorRef={editorRef} language={language} />
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CodeEditor;
