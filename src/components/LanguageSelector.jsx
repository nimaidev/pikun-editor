import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "blue.400";

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box ml={2} mb={4} w={200}>
      <Text mb={2} fontSize="lg" fontWeight="bold" color="teal.500">
        Select Language:
      </Text>
      <Menu isLazy>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="teal" variant="outline">
          {language}
        </MenuButton>
        <MenuList bg="#1a202c" borderColor="teal.500">
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              color={lang === language ? ACTIVE_COLOR : "white"}
              bg={lang === language ? "gray.700" : "transparent"}
              _hover={{
                color: ACTIVE_COLOR,
                bg: "gray.600",
              }}
              onClick={() => onSelect(lang)}
            >
              {lang}
              &nbsp;
              <Text as="span" color="gray.400" fontSize="sm">
                ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
