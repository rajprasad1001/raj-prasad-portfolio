import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (name) => {
    setActive(name);
    setMobileOpen(false);
  };

  return (
    <>
      {/* =========================================
          DESKTOP / MAIN NAVBAR
      ========================================== */}

      <motion.nav
        initial={{
          opacity: 0,
          y: -25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 right-0 top-0 z-50 px-5 py-5 sm:px-8 md:px-10 lg:px-14"
      >
        <div className="mx-auto flex max-w-[1700px] items-center justify-between">

          {/* =====================================
              LOGO
          ====================================== */}

          <motion.a
            href="#home"
            onClick={() => handleNavClick("Home")}
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              duration: 0.2,
            }}
            className="relative z-50 text-xl font-black tracking-[-0.06em]"
          >
            RP
            <span className="text-zinc-500">
              .
            </span>
          </motion.a>

          {/* =====================================
              DESKTOP NAVIGATION
          ====================================== */}

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/45 p-1 backdrop-blur-xl md:flex">

            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                whileTap={{
                  scale: 0.96,
                }}
                className="relative rounded-full px-5 py-2 text-[11px] font-medium transition-colors duration-300"
              >

                {/* Active pill */}
                {active === item.name && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                {/* Text */}
                <span
                  className={`relative z-10 ${
                    active === item.name
                      ? "text-black"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  {item.name}
                </span>

              </motion.a>
            ))}

          </div>

          {/* =====================================
              RIGHT SIDE
          ====================================== */}

          <div className="flex items-center gap-2">

            {/* GitHub */}
            <motion.a
              href="https://github.com/rajprasad1001"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              whileHover={{
                y: -2,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.92,
              }}
              transition={{
                duration: 0.2,
              }}
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-colors duration-300 hover:border-white/25 hover:bg-white hover:text-black sm:flex"
            >
              <FaGithub size={15} />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/raj-prasad-48732718"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              whileHover={{
                y: -2,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.92,
              }}
              transition={{
                duration: 0.2,
              }}
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-colors duration-300 hover:border-white/25 hover:bg-white hover:text-black sm:flex"
            >
              <FaLinkedin size={15} />
            </motion.a>

            

            {/* Mobile menu */}
            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors duration-300 hover:bg-white hover:text-black md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>

                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <X size={17} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <Menu size={17} />
                  </motion.div>
                )}

              </AnimatePresence>
            </motion.button>

          </div>

        </div>
      </motion.nav>

      {/* =========================================
          MOBILE MENU
      ========================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-x-4 top-[76px] z-40 overflow-hidden rounded-[24px] border border-white/10 bg-[#080808]/95 p-3 shadow-2xl backdrop-blur-2xl md:hidden"
          >

            <div className="flex flex-col">

              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.name)}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.35,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className={`group flex items-center justify-between rounded-2xl px-4 py-4 transition-colors duration-300 ${
                    active === item.name
                      ? "bg-white text-black"
                      : "text-zinc-500 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >

                  <span className="text-sm font-medium">
                    {item.name}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />

                </motion.a>
              ))}

            </div>

            {/* Mobile social links */}
            <div className="mt-2 flex items-center justify-between border-t border-white/10 px-4 py-4">

              <span className="mono text-[8px] uppercase tracking-[0.25em] text-zinc-700">
                Connect
              </span>

              <div className="flex items-center gap-2">

                <motion.a
                  href="https://github.com/rajprasad1001"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-zinc-500 hover:bg-white hover:text-black"
                >
                  <FaGithub size={14} />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/raj-prasad-48732718"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-zinc-500 hover:bg-white hover:text-black"
                >
                  <FaLinkedin size={14} />
                </motion.a>

              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}