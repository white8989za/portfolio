import {
  Stack,
  Heading,
  Text,
  Button,
  useColorMode,
  Container,
  Link,
  Box,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  letterSpace,
  simpleOpacity,
  stagger,
  scaleUp,
} from "@/config/animations";
import { SocialMedias } from "@/config/sidebar";
import styles from "./styles.module.css";

const Sidebar = () => {
  const { colorMode } = useColorMode();
  const display = useBreakpointValue({ base: "none", xl: "block" });
  const surNameSize = useBreakpointValue({ base: "3xl", md: "4xl" });
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);
  const MotionStack = motion(Stack);
  const MotionButton = motion(Button);
  const MotionBox = motion(Box);

  return (
    <MotionBox
      initial="initial"
      animate="animate"
      position={{ xl: "fixed" }}
      maxWidth={{ xl: "34%" }}
      top={{ lg: 0 }}
    >
      <motion.div
        id="sidebarCircle"
        className={`${styles.sidebar} ${
          colorMode === "light" ? styles.dark : ""
        }`}
        variants={scaleUp}
        style={{ display: display }}
        animate={colorMode === "dark" ? "animate" : "lightMode"}
      ></motion.div>
      <Container
        padding={0}
        margin={0}
        height={{ xl: "100vh" }}
        display={{ xl: "flex" }}
        alignItems={{ xl: "center" }}
      >
        <MotionStack variants={stagger} spacing={6} w="100">
          <MotionText
            variants={fadeInUp}
            delay={1}
            variant="accent"
            fontWeight="light"
          >
            Ohh you found me?. Howdy! I am
          </MotionText>
          <MotionHeading
            as="h1"
            size="lg"
            paddingRight={{ lg: "20" }}
            textTransform="uppercase"
            variants={fadeInUp}
          >
            Warat Chum-in
          </MotionHeading>
          <MotionHeading
            as="h2"
            size={surNameSize}
            variant="emphasis"
            className={styles.marginTopForce}
            textTransform="uppercase"
            variants={letterSpace}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            White
          </MotionHeading>
          <MotionText
            colorScheme="gray"
            fontSize="smaller"
            className={styles.marginTopForce}
            variants={fadeInUp}
          >
            Or you could call me Dev.wise. That works too . . .
          </MotionText>

          <MotionHeading
            as="h3"
            size="md"
            variant="emphasis"
            className={styles.marginTopSmall}
            variants={fadeInUp}
          >
            Full Stack Developer
          </MotionHeading>

          <MotionText
            variant="description"
            fontSize="small"
            paddingRight={{ lg: "12" }}
            variants={fadeInUp}
            maxWidth={{ base: "100%", lg: "80%" }}
          >
            Hey! How nice of you to look at my personal site,
            <Text variant="emphasis" as="span">
              {" "}
              Thank you!
            </Text>
            <br />I am full stack developer that specializes at backend apis,
            front end integration, recently found myself studying UX too.
          </MotionText>
          <MotionButton
            size="lg"
            variant="outline"
            borderWidth="1px"
            borderRadius="0"
            fontWeight="normal"
            fontSize="sm"
            width="120px"
            variants={simpleOpacity}
            as={"a"}
            href="mailto:warat.c@outlook.co.th"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get in touch!
          </MotionButton>

          <MotionBox display="flex" variants={simpleOpacity}>
            {SocialMedias.map((socMedia) => (
              <Link
                variant="description"
                key={socMedia.label}
                aria-label={socMedia.label}
                rel="noreferrer"
                m={1}
                href={socMedia.href}
                target="_blank"
                _focus={{ boxShadow: "none" }}
              >
                <Icon w={6} h={6} as={socMedia.icon} color="currentColor" />
              </Link>
            ))}
          </MotionBox>
        </MotionStack>
      </Container>
    </MotionBox>
  );
};

export default Sidebar;
