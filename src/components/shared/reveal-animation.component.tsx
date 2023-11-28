import { motion } from "framer-motion";
import React, { useMemo } from "react";

interface RevealAnimationProps {
  children: JSX.Element;
  type: "top" | "down" | "right" | "left" | "opacity";
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({
  children,
  type,
}) => {
  const variant = useMemo(() => {
    let hidden = {},
      visible = {};
    switch (type) {
      case "top":
        hidden = { y: -75 };
        visible = { y: 0 };
        break;
      case "down":
        hidden = { y: 75 };
        visible = { y: 0 };
        break;
      case "right":
        hidden = { x: 75 };
        visible = { x: 0 };
        break;
      case "left":
        hidden = { x: -75 };
        visible = { x: 0 };
        break;
    }
    return {
      hidden,
      visible,
    };
  }, [type]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...variant.hidden },
        visible: { opacity: 1, ...variant.visible },
      }}
      transition={{
        duration: 0.5,
        delay: 0.3,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default RevealAnimation;
