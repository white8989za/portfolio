import { memo, useState } from "react";
import { useColorMode, Image, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeMode, mobileBreakpointsMap } from "@/config/theme";
import { simpleOpacity } from "@/config/animations";
import styles from "./styles.module.css";

const Logo = () => {
  const { colorMode } = useColorMode();
  const [isLogoLoaded, setLogoLoaded] = useState(false);
  const MotionImage = motion(Image);
  const isMobile = useBreakpointValue(mobileBreakpointsMap);
  return (
    <AnimatePresence>
      <Link href="/" passHref>
        <Image objectFit="contain" />
        {colorMode === ThemeMode.Dark ? (
          <MotionImage
            className={!isMobile ? styles.logo : ""}
            boxSize={isMobile ? "50px" : "60px"}
            objectFit="contain"
            src="./logo.png"
            alt="Warat Chum-in Logo"
            fallbackSrc="./logo.png"
            variants={simpleOpacity}
            initial="initial"
            animate={isLogoLoaded && "animate"}
            onLoad={() => setLogoLoaded(true)}
            zIndex={2}
          />
        ) : (
          <MotionImage
            className={!isMobile ? styles.logo : ""}
            boxSize={isMobile ? "50px" : "60px"}
            objectFit="contain"
            src="./logo_light.png"
            fallbackSrc="./logo_light.png"
            alt="Warat Chum-in Logo"
            variants={simpleOpacity}
            initial="initial"
            animate={isLogoLoaded && "animate"}
            onLoad={() => setLogoLoaded(true)}
            zIndex={2}
          />
        )}
      </Link>
    </AnimatePresence>
  );
};

export default memo(Logo);
