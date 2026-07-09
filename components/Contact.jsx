// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaGithub,
//   FaLinkedin,
//   FaDownload,
// } from "react-icons/fa";
// import { profile } from ".././data/portfolioData";
// import Reveal from "./Reveal";

// export default function Contact() {
//   return (
//     <section id="contact" className="section-wrap">
//       <Reveal>
//         <div className="card relative overflow-hidden text-center !py-14 sm:!py-20">
//           <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
//           <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-accent2/10 blur-3xl" />

//           <p className="section-eyebrow justify-center">Contact</p>
//           <h2 className="text-2xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
//             Like what you see? Let&apos;s talk about your next hire.
//           </h2>
//           <p className="mt-4 max-w-xl mx-auto text-muted text-base sm:text-lg">
//             I&apos;m open to full-time roles and freelance opportunities.
//             Reach out and I&apos;ll get back to you within a day.
//           </p>

//           <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
//             <a href={`mailto:${profile.email}`} className="btn-primary">
//               <FaEnvelope /> Email Me
//             </a>
//             <a href={profile.resumeFile} download className="btn-secondary">
//               <FaDownload /> Download Resume
//             </a>
//           </div>

//           <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto text-left">
//             <a
//               href={`mailto:${profile.email}`}
//               className="pill !justify-start !py-3 !px-4"
//             >
//               <FaEnvelope className="text-accent" />
//               <span className="truncate">{profile.email}</span>
//             </a>
//             <a href={`tel:${profile.phone}`} className="pill !justify-start !py-3 !px-4">
//               <FaPhoneAlt className="text-accent" />
//               <span>{profile.phone}</span>
//             </a>
//             <span className="pill !justify-start !py-3 !px-4">
//               <FaMapMarkerAlt className="text-accent" />
//               <span>{profile.location}</span>
//             </span>
//           </div>

//           <div className="mt-8 flex items-center justify-center gap-3">
//             <a
//               href={profile.github}
//               target="_blank"
//               rel="noreferrer"
//               aria-label="GitHub"
//               className="icon-badge hover:text-accent hover:border-accent/50"
//             >
//               <FaGithub />
//             </a>
//             <a
//               href={profile.linkedin}
//               target="_blank"
//               rel="noreferrer"
//               aria-label="LinkedIn"
//               className="icon-badge hover:text-accent hover:border-accent/50"
//             >
//               <FaLinkedin />
//             </a>
//           </div>
//         </div>
//       </Reveal>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa";

import { profile } from ".././data/portfolioData";
import Reveal from "./Reveal";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
  
    setLoading(true);
    setStatus({
      type: "",
      message: "",
    });
  
    try {
      await emailjs.send(
        "service_23c6ocq",
        "template_22vwbsh",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "ie3zA7f2JOHKMX-cS"
      );
  
      setStatus({
        type: "success",
        message:
          "✅ Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.",
      });
  
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
  
      setTimeout(() => {
        setStatus({
          type: "",
          message: "",
        });
      }, 5000);
  
    } catch (err) {
      setStatus({
        type: "error",
        message:
          "❌ Something went wrong while sending your message. Please try again or contact me directly via email.",
      });
  
      setTimeout(() => {
        setStatus({
          type: "",
          message: "",
        });
      }, 5000);
    }
  
    setLoading(false);
  };

  return (
    <section id="contact" className="section-wrap">
      <Reveal>
        <div className="card relative overflow-hidden">

          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent2/10 blur-3xl" />

          <div className="relative z-10">

            <div className="text-center">

              <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-sm text-accent font-medium">
                🟢 Available for Full-Time & Freelance Opportunities
              </span>

              <p className="section-eyebrow justify-center mt-6">
                Get In Touch
              </p>

              <h2 className="text-4xl font-bold text-white mt-2">
                Let's Build Something Amazing Together
              </h2>

              <p className="mt-5 max-w-2xl mx-auto text-muted text-lg">
                I'm actively seeking Full-Time, Remote and Freelance
                opportunities. Whether you have an exciting project or are
                looking to hire a passionate Full Stack Developer, I'd love to
                hear from you.
              </p>

            </div>

            <div className="grid lg:grid-cols-2 gap-12 mt-14">

              {/* LEFT */}

              <form
                onSubmit={sendEmail}
                className="space-y-5"
              >
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-border bg-surface px-5 py-4 text-white outline-none focus:border-accent"
                />

                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-border bg-surface px-5 py-4 text-white outline-none focus:border-accent"
                />

                <input
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full rounded-xl border border-border bg-surface px-5 py-4 text-white outline-none focus:border-accent"
                />

                <textarea
                  rows={6}
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full rounded-xl border border-border bg-surface px-5 py-4 text-white outline-none resize-none focus:border-accent"
                />
                {status.message && (
  <div
    className={`rounded-xl border px-5 py-4 text-sm transition-all duration-300 ${
      status.type === "success"
        ? "border-green-500/40 bg-green-500/10 text-green-300"
        : "border-red-500/40 bg-red-500/10 text-red-300"
    }`}
  >
    {status.message}
  </div>
)}

                <button
                  disabled={loading}
                  className="btn-primary w-full justify-center"
                >
                  <FaPaperPlane />

                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>

              {/* RIGHT */}

              <div>

                <div className="space-y-4">

                  <a
                    href={`mailto:${profile.email}`}
                    className="pill !justify-start !py-4 !px-5"
                  >
                    <FaEnvelope className="text-accent text-lg" />
                    <div>
                      <p className="text-xs text-muted">Email</p>
                      <p>{profile.email}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${profile.phone}`}
                    className="pill !justify-start !py-4 !px-5"
                  >
                    <FaPhoneAlt className="text-accent text-lg" />
                    <div>
                      <p className="text-xs text-muted">Phone</p>
                      <p>{profile.phone}</p>
                    </div>
                  </a>

                  <div className="pill !justify-start !py-4 !px-5">
                    <FaMapMarkerAlt className="text-accent text-lg" />
                    <div>
                      <p className="text-xs text-muted">Location</p>
                      <p>{profile.location}</p>
                    </div>
                  </div>

                </div>

                <div className="mt-8 flex gap-4">

                  <a
                    href={profile.resumeFile}
                    download
                    className="btn-primary"
                  >
                    <FaDownload />
                    Resume
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </a>

                </div>

                <div className="mt-8 flex gap-4">

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-badge"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-badge"
                  >
                    <FaLinkedin />
                  </a>

                </div>

                <div className="mt-10 rounded-xl border border-accent/20 bg-accent/5 p-5">

                  <p className="text-accent font-semibold">
                    🟢 Available for Work
                  </p>

                  <p className="text-sm text-muted mt-2">
                    Currently open to Full-Time opportunities, Remote roles and
                    Freelance projects.
                  </p>

                  <p className="text-sm text-muted mt-3">
                    Usually responds within <strong>24 hours.</strong>
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </Reveal>
    </section>
  );
}