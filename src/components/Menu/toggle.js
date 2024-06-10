import * as React from "react";
import { motion } from "framer-motion";
import { useColorMode } from "@chakra-ui/react";
import { ThemeMode } from "@/config/theme";

const Path = (props) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === ThemeMode.Dark;

  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={isDarkMode ? "hsl(240, 100%, 94%)" : "hsl(0, 0%, 7%)"}
      strokeLinecap="round"
      {...props}
    />
  );
};

export const MenuToggle = ({ toggle }) => (
  <button
    onClick={toggle}
    style={{
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <svg width="23" height="23" viewBox="0 0 23 18">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const MobileMenu = ({ isOpen, toggle, isDarkMode = false }) => (
  <motion.nav
    initial={false}
    animate={isOpen ? "open" : "closed"}
    style={{
      display: "flex",
      alignItems: "center",
    }}
  >
    <MenuToggle toggle={() => toggle()} />
  </motion.nav>
);

export default MobileMenu;
