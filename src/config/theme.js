import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const mobileBreakpointsMap = {
  base: true,
  md: true,
  lg: true,
  xl: false,
};

export const ThemeMode = {
  Light: "light",
  Dark: "dark",
};

// Theme Config
const config = {
  initialColorMode: ThemeMode.Dark,
  useSystemColorMode: false,
};

const colors = {
  primary: {
    main: "#00a76f",
  },
  black: "#121212",
};

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("gray.100", "#121212")(props),
    },
  }),
};

const textVariants = {
  emphasis: (props) => ({
    color: mode("primary.main", "primary.main")(props),
  }),
  description: (props) => ({
    color: mode("gray.800", "gray.400")(props),
  }),
  accent: (props) => ({
    color: mode("black.400", "primary.main")(props),
  }),
  accentAlternative: (props) => ({
    color: mode("#595959", "#A6A6A6")(props),
  }),
};

const theme = extendTheme({
  config,
  fonts: {
    body: "Poppins",
  },
  colors,
  styles,
  components: {
    Link: {
      baseStyle: (props) => ({
        color: mode("primary.main", "primary.main")(props),
      }),
      variants: {
        ...textVariants,
        description: (props) => ({
          color: mode("gray.800", "gray.400")(props),
          _hover: {
            color: mode("primary.main", "primary.main")(props),
            textDecoration: "none",
          },
        }),
      },
    },
    Text: {
      variants: textVariants,
    },
    Heading: {
      variants: textVariants,
    },
    Button: {
      variants: {
        outline: (props) => ({
          borderColor: mode("black.400", "primary.main")(props),
        }),
        outlineAlternative: (props) => ({
          borderWidth: "1px",
          borderRadius: 0,
          borderColor: mode("#595959", "whiteAlpha.500")(props),
          _hover: {
            backgroundColor: mode(
              "rgba(49, 151, 149, 0.06)",
              "rgba(157, 236, 249, 0.06)"
            )(props),
          },
        }),
      },
    },
    Icon: {
      variants: {
        accent: (props) => ({
          borderColor: mode("gray.800", "gray.400")(props),
        }),
      },
    },
    Divider: {
      variants: {
        solid: (props) => ({
          borderColor: mode("gray.800", "gray.400")(props),
          marginLeft: "auto",
          marginRight: "auto",
        }),
      },
    },
  },
});
export default theme;
