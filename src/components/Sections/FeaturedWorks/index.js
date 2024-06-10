import { memo } from "react";
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import FeaturedCard from "./FeaturedCard";
import { fadeInUpSlower, galleryStagger } from "@/config/animations";
import { mobileBreakpointsMap } from "@/config/theme";

const MotionGrid = motion(Grid);
const MotionGridItem = motion(GridItem);

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap);
  return (
    <Stack
      width={{ base: "99%", lg: "60%", xl: "75%" }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: "small-caps",
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description">
        Check out some of the works I made at freelancing, company projects and
        even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="DIAMOND"
            description="DIAMOND Brand Products; Roof, Artificial wood, Board, Lightweight block, Service and Diamond Cafe with standard production will Complete your perfect home"
            src="./works/knacx/dbp.png"
            height={{ base: "130px", md: "225px", "2xl": "300px" }}
            ctaUrl="https://dbp.co.th/"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="TERMINUS"
            src="./works/freewillfx/terminus.png"
            description="TERMINUS - Fleet Management System, Knowing just the location of your fleet vehicles doesn't provide enough tangible business benefits."
            height={{ base: "130px", md: "225px", "2xl": "300px" }}
            ctaUrl="http://www.freewillfx.com/terminus-advance-fleet-management-system/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Fleetlink"
            description="FleetLink is a comprehensive platform offering Real-Time GPS Tracking, Driver and Vehicle Monitoring, and Dashboard Reporting."
            src="./works/freewillfx/fleetlink.png"
            height={{ base: "130px", md: "225px", "2xl": "300px" }}
            ctaUrl="https://fleetlink.cipcloud.net/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="Passenger"
            description="Cloudtime Passenger is a company website designed to monitor and check employee attendance. It offers tools for tracking when employees clock in and out, providing detailed attendance records and reports"
            src="./works/freewillfx/passenger.png"
            height={{ base: "130px", md: "225px", "2xl": "300px" }}
            ctaUrl="https://passenger.cloudtime.cloud/"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  );
};

export default memo(FeaturedWorksSection);
