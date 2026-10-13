import { motion } from "framer-motion";
import {
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers,
  Server,
  ArrowUpRight,
} from "lucide-react";

const technologies = [
  {
    name: "HTML",
    category: "WEB CORE",
    icon: Globe,
  },
  {
    name: "CSS",
    category: "WEB CORE",
    icon: Code2,
  },
  {
    name: "JavaScript",
    category: "LANGUAGE",
    icon: Code2,
  },
  {
    name: "React.js",
    category: "FRONTEND",
    icon: Layers,
  },
  {
    name: "Tailwind CSS",
    category: "UI",
    icon: Layers,
  },
  {
    name: "Node.js",
    category: "BACKEND",
    icon: Server,
  },
  {
    name: "MongoDB",
    category: "DATABASE",
    icon: Database,
  },
  {
    name: "MySQL",
    category: "DATABASE",
    icon: Database,
  },
  {
    name: "Git",
    category: "TOOLS",
    icon: GitBranch,
  },
  {
    name: "GitHub",
    category: "TOOLS",
    icon: GitBranch,
  },
  {
    name: "Redux Toolkit",
    category: "STATE",
    icon: Layers,
  },
  {
    name: "Appwrite",
    category: "BACKEND",
    icon: Server,
  },
];

const headerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden px-5 py-24 md:px-10 md:py-32"
    >
      {/* Ambient background glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute right-[-15%] top-[10%] h-[450px] w-[450px] rounded-full bg-white/[0.025] blur-[130px]"
      />

      <div className="mx-auto max-w-[1400px]">
        {/* Section heading */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mb-10 flex items-end justify-between"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-white/30" />

              <p className="mono text-[10px] tracking-[0.3em] text-zinc-500">
                TECH STACK & ECOSYSTEM
              </p>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-5 text-4xl font-semibold tracking-[-0.055em] md:text-6xl lg:text-[68px]"
            >
              Tools I use.
            </motion.h2>
          </div>

          <motion.div
            variants={fadeUp}
            className="hidden items-center gap-3 md:flex"
          >
            <span className="mono text-[9px] tracking-[0.2em] text-zinc-600">
              12 TECHNOLOGIES
            </span>

            <span className="h-px w-8 bg-zinc-800" />
          </motion.div>
        </motion.div>

        {/* Technology grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid grid-cols-2 border-l border-t border-white/10 md:grid-cols-3 lg:grid-cols-4"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
                className="group relative min-h-[190px] overflow-hidden border-b border-r border-white/10 p-6 transition-colors duration-500 hover:bg-white hover:text-black md:min-h-[220px] md:p-8 lg:p-9"
              >
                {/* Hover background sweep */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ originX: 0 }}
                  className="absolute inset-x-0 bottom-0 h-1 bg-black/10"
                />

                {/* Top row */}
                <div className="relative z-10 flex items-start justify-between">
                  <motion.div
                    whileHover={{
                      rotate: -8,
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors duration-500 group-hover:border-black/10"
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.5}
                      className="text-zinc-500 transition-colors duration-500 group-hover:text-black"
                    />
                  </motion.div>

                  <span className="mono text-[9px] text-zinc-700 transition-colors duration-500 group-hover:text-black/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Technology name */}
                <div className="relative z-10 mt-10">
                  <h3 className="text-[15px] font-semibold tracking-[-0.02em] md:text-lg">
                    {tech.name}
                  </h3>

                  <p className="mono mt-2 text-[8px] tracking-[0.18em] text-zinc-600 transition-colors duration-500 group-hover:text-black/45">
                    {tech.category}
                  </p>
                </div>

                {/* Arrow */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -8,
                    y: 8,
                  }}
                  whileHover={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="absolute bottom-7 right-7"
                >
                  <ArrowUpRight
                    size={16}
                    className="text-black"
                  />
                </motion.div>

                {/* Decorative number */}
                <span className="pointer-events-none absolute bottom-[-28px] left-[-8px] text-[100px] font-black leading-none tracking-[-0.08em] text-white/[0.02] transition-colors duration-500 group-hover:text-black/[0.035]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ originX: 0 }}
          className="mt-8 h-px w-full bg-white/[0.06]"
        />
      </div>
    </section>
  );
}