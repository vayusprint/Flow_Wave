import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";

const stats = [
  {
    value: "+25",
    title: "Years of Experience",
    desc: "Delivering high-quality industrial solutions backed by decades of proven expertise and innovation.",
  },
  {
    value: "+500",
    title: "Projects Completed",
    desc: "Delivering high-quality industrial solutions backed by decades of proven expertise and innovation.",
  },
  {
    value: "+100",
    title: "Global Clients",
    desc: "Building long-term partnerships with leading companies around the world.",
  },
  {
    value: "+150",
    title: "Skilled Engineers",
    desc: "A dedicated team of engineers and innovators driving industrial growth and precision.",
  },
];

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  const numericTarget = parseInt(target.replace("+", ""), 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

useEffect(() => {
  if (!started) return;

  let startTimestamp = null;
  const duration = 2000; // smooth but not too long

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const updateCount = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;

    const progress = Math.min((timestamp - startTimestamp) / duration, 1);

    const easedProgress = easeOutCubic(progress);

    setCount(Math.floor(easedProgress * numericTarget));

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      setCount(numericTarget); // ensure perfect end
    }
  };

  requestAnimationFrame(updateCount);
}, [numericTarget, started]);

  return (
    <span ref={ref}>
      +{count}
    </span>
  );
};

const AboutStatsSection = () => {
  return (
    <Container>
      <div className="w-full flex justify-center items-center mt-10">
        <div className="bg-white rounded-lg py-52 px-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
            {stats.map((item, i) => (
              <div key={i}>
                <h3 className="text-primary text-64 leading-64 font-semibold font-montserrat">
                  <Counter target={item.value} />
                </h3>

                <h4 className="font-montserrat text-32 leading-32 text-primaryHeading font-medium mt-32">
                  {item.title}
                </h4>

                <p className="text-muted_text text-16 leading-16 mt-2 font-montserrat font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutStatsSection;
