import {
  Box,
  Image as ChkImage,
  SkeletonCircle,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { avatarAnimation } from "@/config/animations";

const AvatarImages = {
  DarkMode: "./white_avatar.png",
  LightMode: "./white_avatar.png",
};

const Avatar = () => {
  const MotionBox = motion(Box);
  const imgAvatar = useColorModeValue(
    AvatarImages.LightMode,
    AvatarImages.DarkMode
  );
  useEffect(() => {
    const images = [AvatarImages.DarkMode, AvatarImages.LightMode];
    const preloadedImages = images.map((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
      return img;
    });
    window.preloadedPictures = preloadedImages;
  }, []);

  return (
    <AnimatePresence>
      <MotionBox
        id="WiseAvatar"
        boxSize={{ base: 64, lg: "sm" }}
        padding={{ base: 8 }}
        marginBottom={{ base: 10, md: 0, lg: 0 }}
        initial="initial"
        animate={"animate"}
        variants={avatarAnimation}
        exit={{ opacity: 0 }}
      >
        <ChkImage
          src={imgAvatar}
          alt="Warat Chum-in Avatar"
          htmlWidth="250"
          htmlHeight="250"
          margin="auto"
          fallback={<SkeletonCircle height="100%" width="100%" />}
        />
        {/* <Text textAlign="center" fontSize="smaller" variant="description">
          Art by{" "}
          <Link
            href="https://twitter.com/kojiro_ai"
            target="_blank"
            aria-label="KojiroArt"
            rel="noreferrer"
          >
            KojiroArt
          </Link>
        </Text> */}
      </MotionBox>
    </AnimatePresence>
  );
};

export default Avatar;
