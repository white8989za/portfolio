import { memo } from "react";
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiNestjs,
  SiLaravel,
  SiMongodb,
  SiGo,
} from "react-icons/si";
import { GiBoatFishing } from "react-icons/gi";
import { IoMdOpen } from "react-icons/io";

const Detail = ({ onOpen }) => {
  const emphasis = useColorModeValue("primary.main", "primary.main");
  const currentYear = new Date().getFullYear();
  const professionalYears = currentYear - 2019;

  return (
    <Stack
      width={{ base: "100%", lg: "70%" }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: "small-caps",
        }}
      >
        What i do.
      </Heading>
      <Text variant="description">
        As a proactive problem solver, I am dedicated to resolving challenges
        efficiently through strategic problem-solving methodologies. With more
        than {professionalYears} years of extensive experience in software
        development, I demonstrate proficiency in fostering effective
        communication, promoting teamwork, and facilitating collaboration.
        Moreover, I excel in systematically crafting comprehensive technical
        documentation.
        {"   "}
        <br /> <br />
        Here are a few technologies that float my boat{" "}
        <Icon as={GiBoatFishing} color={emphasis} />.
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            ReactJS - Typescript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiExpress} color={emphasis} fontSize="2em" />
            Express - NodeJS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiLaravel} color={emphasis} fontSize="2em" />
            Laravel - PHP
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiMysql} color={emphasis} fontSize="2em" />
            MySQL
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextdotjs} color={emphasis} fontSize="2em" />
            NextJS - Typescript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNestjs} color={emphasis} fontSize="2em" />
            NestJS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiGo} color={emphasis} fontSize="2em" />
            Golang
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiMongodb} color={emphasis} fontSize="2em" />
            MongoDB
          </ListItem>
        </List>
        <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            See my full arsenal <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  );
};

export default memo(Detail);
