import {
  Mail,
  FileText,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-5 md:px-10 py-24 md:py-32"
    >

      <div className="max-w-[1400px] mx-auto">

        <div className="border border-white/10 rounded-[30px] p-7 md:p-14">

          <p className="mono text-xs tracking-[0.3em] text-zinc-500">
            GET IN TOUCH
          </p>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 mt-10">

            <div>

              <h2 className="text-5xl md:text-8xl font-bold tracking-[-0.07em] leading-[0.85]">
                LET'S
                <br />
                <span className="text-zinc-600">
                  WORK
                </span>
                <br />
                TOGETHER.
              </h2>

            </div>


            <div className="space-y-3">

              <a
                href="mailto:your-email@gmail.com"
                className="group flex items-center justify-between border border-white/10 rounded-2xl p-5 hover:bg-white hover:text-black transition"
              >

                <div className="flex items-center gap-4">

                  <Mail size={20} />

                  <div>

                    <p className="text-xs text-zinc-500 group-hover:text-black/50">
                      EMAIL
                    </p>

                    <p className="text-sm mt-1">
                      rajprasad10012002@gmail.com
                    </p>

                  </div>

                </div>

                <ArrowUpRight size={18} />

              </a>


              <a
                href="https://linkedin.com/in/raj-prasad-48732718"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border border-white/10 rounded-2xl p-5 hover:bg-white hover:text-black transition"
              >

                <div className="flex items-center gap-4">

                  <FaLinkedin size={20} />

                  <div>

                    <p className="text-xs text-zinc-500 group-hover:text-black/50">
                      LINKEDIN
                    </p>

                    <p className="text-sm mt-1">
                      Raj Prasad
                    </p>

                  </div>

                </div>

                <ArrowUpRight size={18} />

              </a>


              <a
                href="https://github.com/rajprasad1001"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border border-white/10 rounded-2xl p-5 hover:bg-white hover:text-black transition"
              >

                <div className="flex items-center gap-4">

                  <FaGithub size={20} />

                  <div>

                    <p className="text-xs text-zinc-500 group-hover:text-black/50">
                      GITHUB
                    </p>

                    <p className="text-sm mt-1">
                      rajprasad1001
                    </p>

                  </div>

                </div>

                <ArrowUpRight size={18} />

              </a>


              <a
                href="/Raj_Prasad_Web_Developer_Resume.pdf"
                download
                className="group flex items-center justify-between border border-white/10 rounded-2xl p-5 hover:bg-white hover:text-black transition"
              >

                <div className="flex items-center gap-4">

                  <FileText size={20} />

                  <div>

                    <p className="text-xs text-zinc-500 group-hover:text-black/50">
                      RESUME
                    </p>

                    <p className="text-sm mt-1">
                      Download CV
                    </p>

                  </div>

                </div>

                <ArrowUpRight size={18} />

              </a>

            </div>

          </div>

        </div>


        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between gap-4 mt-8 text-xs text-zinc-600 mono">

          <span>
            © 2026 RAJ PRASAD
          </span>

          <span>
            BUILT WITH REACT
          </span>

        </footer>

      </div>

    </section>
  );
}