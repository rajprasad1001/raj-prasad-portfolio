import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

const experiences = [
  {
    company: "Tech OctaNet Services Pvt. Ltd.",
    role: "Frontend Developer Intern",
    duration: "Jan 2025 — Mar 2025",
    points: [
      "Developed responsive web applications.",
      "Worked with React.js and Tailwind CSS.",
      "Collaborated with the development team.",
    ],
  },
  {
    company: "Cherub IT Solutions",
    role: "Web Development Intern",
    duration: "Aug 2024 — Oct 2024",
    points: [
      "Built responsive web interfaces.",
      "Worked with HTML, CSS and JavaScript.",
      "Assisted with website development projects.",
    ],
  },
];

const ease = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-5 py-24 md:px-10 md:py-32"
    >
      {/* =====================================
          BACKGROUND GLOW
      ====================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.5,
          ease,
        }}
        className="pointer-events-none absolute left-[-15%] top-[25%] h-[400px] w-[400px] rounded-full bg-white/[0.025] blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-10%] bottom-[10%] h-[350px] w-[350px] rounded-full bg-white/[0.02] blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1400px]">

        {/* ===================================
            SECTION HEADER
        ==================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="mb-16 flex items-end justify-between"
        >
          <div>

            <div className="flex items-center gap-3">

              <motion.span
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 30,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  ease,
                }}
                className="h-px bg-white/40"
              />

              <p className="mono text-[9px] uppercase tracking-[0.3em] text-zinc-500">
                EXPERIENCE — 04
              </p>

            </div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease,
              }}
              className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl md:text-6xl"
            >
              Where I've worked.
            </motion.h2>

          </div>

          <motion.span
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mono hidden text-[9px] tracking-[0.2em] text-zinc-600 md:block"
          >
            WORK EXPERIENCE
          </motion.span>

        </motion.div>


        {/* ===================================
            TIMELINE
        ==================================== */}

        <div className="relative">

          {/* =================================
              MAIN TIMELINE LINE
          ================================== */}

          <motion.div
            initial={{
              scaleY: 0,
              originY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1.6,
              ease,
            }}
            className="absolute bottom-0 left-[14px] top-0 w-px bg-gradient-to-b from-white/40 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          {/* =================================
              EXPERIENCE CARDS
          ================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="space-y-14 md:space-y-20"
          >

            {experiences.map((experience, index) => {

              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={experience.company}
                  variants={cardVariants}
                  className="relative grid md:grid-cols-2 md:gap-16"
                >

                  {/* =================================
                      TIMELINE DOT
                  ================================== */}

                  <motion.div
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.25,
                      ease,
                    }}
                    className="absolute left-[14px] top-8 z-20 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2"
                  >

                    {/* OUTER GLOW */}

                    <motion.span
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute h-3 w-3 rounded-full bg-white"
                    />

                    {/* DOT */}

                    <span className="relative h-2 w-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.7)]" />

                  </motion.div>


                  {/* =================================
                      YEAR
                  ================================== */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isEven ? -50 : 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: 0.1,
                      ease,
                    }}
                    className={`hidden items-start md:flex ${
                      isEven
                        ? "justify-end pr-10"
                        : "order-2 justify-start pl-10"
                    }`}
                  >

                    <motion.div
                      whileHover={{
                        x: isEven ? -8 : 8,
                      }}
                      transition={{
                        duration: 0.35,
                        ease,
                      }}
                    >

                      <p className="mono text-[10px] tracking-[0.25em] text-zinc-600">
                        0{index + 1}
                      </p>

                      <p className="mt-2 text-5xl font-semibold tracking-[-0.07em] text-white/10 lg:text-7xl">
                        {experience.duration.slice(-4)}
                      </p>

                    </motion.div>

                  </motion.div>


                  {/* =================================
                      MOBILE YEAR
                  ================================== */}

                  <div className="mb-4 pl-10 md:hidden">

                    <p className="mono text-[9px] tracking-[0.25em] text-zinc-600">
                      0{index + 1} / {experience.duration.slice(-4)}
                    </p>

                  </div>


                  {/* =================================
                      EXPERIENCE CARD
                  ================================== */}

                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      duration: 0.4,
                      ease,
                    }}
                    className={`group relative ml-10 rounded-[28px] border border-white/10 bg-white/[0.018] p-7 backdrop-blur-sm transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.035] md:ml-0 md:p-10 ${
                      !isEven ? "order-1" : ""
                    }`}
                  >

                    {/* =================================
                        CARD SHINE
                    ================================== */}

                    <motion.div
                      initial={{
                        x: "-120%",
                      }}
                      whileHover={{
                        x: "120%",
                      }}
                      transition={{
                        duration: 0.8,
                        ease,
                      }}
                      className="pointer-events-none absolute inset-y-0 left-0 w-[35%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
                    />


                    {/* =================================
                        CARD TOP
                    ================================== */}

                    <div className="relative flex items-start justify-between gap-5">

                      <div className="flex gap-5">

                        {/* ICON */}

                        <motion.div
                          whileHover={{
                            rotate: -8,
                            scale: 1.08,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black"
                        >
                          <BriefcaseBusiness size={17} />
                        </motion.div>


                        {/* TITLE */}

                        <div>

                          <h3 className="text-lg font-semibold tracking-[-0.02em] text-white md:text-xl">
                            {experience.company}
                          </h3>

                          <p className="mt-1 text-sm text-zinc-400">
                            {experience.role}
                          </p>

                          <p className="mono mt-2 text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                            {experience.duration}
                          </p>

                        </div>

                      </div>


                      {/* ARROW */}

                      <motion.div
                        whileHover={{
                          rotate: 45,
                          scale: 1.15,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-600 transition-colors duration-300 group-hover:border-white/25 group-hover:text-white sm:flex"
                      >
                        <ArrowUpRight size={15} />
                      </motion.div>

                    </div>


                    {/* =================================
                        DIVIDER
                    ================================== */}

                    <motion.div
                      initial={{
                        scaleX: 0,
                        originX: 0,
                      }}
                      whileInView={{
                        scaleX: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.35,
                        ease,
                      }}
                      className="relative my-7 h-px bg-white/10"
                    />


                    {/* =================================
                        POINTS
                    ================================== */}

                    <ul className="relative space-y-4">

                      {experience.points.map((point, pointIndex) => (

                        <motion.li
                          key={point}
                          initial={{
                            opacity: 0,
                            x: -15,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                            amount: 0.4,
                          }}
                          transition={{
                            duration: 0.5,
                            delay: 0.45 + pointIndex * 0.1,
                            ease,
                          }}
                          className="group/point flex gap-3 text-sm leading-6 text-zinc-500 transition-colors duration-300 hover:text-zinc-200"
                        >

                          <motion.span
                            whileHover={{
                              x: 4,
                            }}
                            className="mt-[9px] h-px w-4 shrink-0 bg-zinc-700 transition-colors duration-300 group-hover/point:bg-white"
                          />

                          <span>
                            {point}
                          </span>

                        </motion.li>

                      ))}

                    </ul>


                    {/* =================================
                        BOTTOM CARD NUMBER
                    ================================== */}

                    <div className="relative mt-8 flex justify-end">

                      <span className="mono text-[8px] tracking-[0.2em] text-zinc-800 transition-colors duration-300 group-hover:text-zinc-600">
                        EXPERIENCE / 0{index + 1}
                      </span>

                    </div>

                  </motion.div>

                </motion.div>
              );
            })}

          </motion.div>

        </div>


        {/* ===================================
            BOTTOM LINE
        ==================================== */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease,
          }}
          className="mt-20 h-px origin-left bg-gradient-to-r from-white/20 via-white/5 to-transparent"
        />

      </div>
    </section>
  );
}