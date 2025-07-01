import React, { useRef } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineData = [
  { year: "2012", text: "Company was founded with 5 cars." },
  { year: "2015", text: "Expanded to multiple districts." },
  { year: "2018", text: "Launched mobile booking app." },
  { year: "2021", text: "Reached 1 million customers." },
  { year: "2025", text: "Nationwide expansion with AI fleet." },
];

const Timeline = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const carY = useTransform(scrollYProgress, [0, 1], [0, 800]);

  return (
    <div
      ref={ref}
      className="relative w-full min-h-[120vh]  flex justify-center pt-20 pb-40 mr-5 ml-5"
    >

      {/* Road with dashed line centered using flex */}
      <div className="absolute top-0 w-20 h-full bg-gray-800 z-0 left-1/2 -translate-x-1/2 flex justify-center">
        {/* Dashed Line */}
        <div
          className="w-1 h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(white 0 10px, transparent 10px 20px)",
          }}
        ></div>
      </div>

      {/* Car perfectly centered on dashed line */}
      <motion.div
        className="absolute z-10"
        style={{
          y: carY,
          left: "47%",
          transform: "translateX(-50%)",
        }}
      >
        <div className="w-20 flex justify-center">
          <img
            src="https://www.redtaxi.co.in/images/car-image.webp"
            alt="Car"
            className="w-60 h-40 object-contain"
          />
        </div>
      </motion.div>

      {/* Timeline Cards */}
      <div className="flex flex-col space-y-24 z-10 w-full max-w-5xl px-4">
        {timelineData.map((item, index) => (
          <div
            key={item.year}
            className={`flex w-full items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full sm:w-1/2"
            >
              <Card elevation={4} className="!rounded-xl shadow-lg">
                <CardContent>
                  <Typography
                    variant="h6"
                    className="text-red-900 font-bold"
                  >
                    {item.year}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
