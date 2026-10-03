import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "./NavBar";
import NumLayout from "../Layouts/NumLayout";

import car from "../../assets/cht.png";

import {
  MdArrowOutward,
  MdEmail,
  MdPhone,
  MdPlace,
  MdSchedule,
} from "react-icons/md";

// ==============================
// SHARED RESPONSIVE TOKENS (same as Home)
// ==============================

const gutter =
  "pl-[max(clamp(1.25rem,5vw,7rem),env(safe-area-inset-left))] pr-[max(clamp(1.25rem,5vw,7rem),env(safe-area-inset-right))]";
const sectionY = "py-[clamp(4rem,9vw,7rem)]";
const eyebrow =
  "text-[0.7rem] font-medium tracking-[clamp(0.2em,1.2vw,0.35em)] text-green-500 sm:text-xs";
const h2 =
  "mt-3 font-sans text-[clamp(2.25rem,5.5vw,4rem)] font-light leading-[1.1] text-balance";
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500";
const calm = "motion-reduce:transition-none motion-reduce:transform-none";
const field =
  "mt-2 w-full rounded-md border border-gray-700 bg-black px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-green-500 focus:outline-none";

// ==============================
// DATA (placeholder details: replace with your real contact info)
// ==============================

const details = [
  {
    icon: MdPhone,
    label: "Phone",
    value: "+1 (555) 010-2030",
    href: "tel:+15550102030",
  },
  {
    icon: MdEmail,
    label: "Email",
    value: "hello@apexmotors.com",
    href: "mailto:hello@apexmotors.com",
  },
  {
    icon: MdPlace,
    label: "Head office",
    value: "12 Prestige Avenue, City, Country",
  },
  {
    icon: MdSchedule,
    label: "Hours",
    value: "Mon – Sat, 9:00 – 18:00",
  },
];

const showrooms = [
  { city: "Lagos", note: "By appointment" },
  { city: "London", note: "Mon – Sat" },
  { city: "Dubai", note: "Daily" },
  { city: "New York", note: "Mon – Sat" },
  { city: "Paris", note: "Tue – Sat" },
  { city: "Tokyo", note: "By appointment" },
];

const topics = ["General enquiry", "Buying a car", "Test drive", "Servicing", "Press"];

function Contact() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: topics[0],
    message: "",
  });

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send `form` to your backend or email service here
    setSubmitted(true);
  };

  return (
    <main className="min-h-dvh overflow-x-clip bg-black text-white">
      <NavBar />

      {/* HERO */}
      <section
        className={`relative flex min-h-[max(24rem,min(70svh,44rem))] items-center justify-center overflow-hidden border-green-500 sm:border-l-4 ${gutter} py-16`}
      >
        <img
          src={car}
          alt="Apex Motors"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[60%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/90" />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <span className="mb-4 text-[0.65rem] font-medium tracking-[clamp(0.15em,1.8vw,0.45em)] text-green-500 sm:text-sm">
            CONTACT
          </span>
          <h1 className="text-[clamp(2.5rem,9vw,5.5rem)] font-semibold leading-[1.05] tracking-[clamp(0.03em,0.8vw,0.08em)] text-balance">
            Let's Talk Cars
          </h1>
          <div className="mt-[clamp(1.5rem,3vw,2.5rem)] h-px w-[clamp(4rem,10vw,7rem)] bg-green-500" />
          <p className="mt-6 max-w-[60ch] text-sm leading-7 text-gray-300 text-pretty sm:text-base sm:leading-8">
            Questions about a model, a viewing or an order? Send us a message
            and a specialist will reply within 24 hours.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-gray-800 bg-gray-900">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-gray-800 sm:grid-cols-4">
          {[
            ["24h", "RESPONSE TIME"],
            ["12", "GLOBAL SHOWROOMS"],
            ["6", "DAYS A WEEK"],
            ["98%", "CLIENT SATISFACTION"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="bg-gray-900 px-4 py-[clamp(1.5rem,3vw,2rem)] sm:px-8"
            >
              <NumLayout number={number} id={label} />
            </div>
          ))}
        </div>
      </section>

      {/* FORM + DETAILS */}
      <section className={`bg-black ${gutter} ${sectionY}`}>
        <div className="mx-auto grid max-w-7xl gap-[clamp(2.5rem,6vw,4rem)] lg:grid-cols-[1.1fr_0.9fr]">
          {/* FORM */}
          <div>
            <p className={eyebrow}>SEND A MESSAGE</p>
            <h2 className={h2}>
              How Can We <span className="text-gray-500">Help?</span>
            </h2>

            {submitted ? (
              <div
                role="status"
                className="mt-10 rounded-xl border border-green-500/40 bg-gray-900 p-8"
              >
                <h3 className="text-xl font-light">Message sent</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Thanks, {form.name || "there"}. We'll reply to {form.email}{" "}
                  within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", topic: topics[0], message: "" });
                  }}
                  className={`mt-6 min-h-11 rounded-md border border-gray-700 px-6 py-2 text-sm text-gray-300 transition-colors duration-300 hover:border-green-500 hover:text-white ${focusRing} ${calm}`}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-5 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-900 to-black p-[clamp(1.25rem,3vw,2rem)]"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm text-gray-300">
                      Full name
                    </label>
                    <input
                      id="name"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={update("name")}
                      className={field}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm text-gray-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={update("email")}
                      className={field}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="topic" className="text-sm text-gray-300">
                    Topic
                  </label>
                  <select
                    id="topic"
                    value={form.topic}
                    onChange={update("topic")}
                    className={field}
                  >
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    className={`${field} resize-y`}
                    placeholder="Tell us which model or service you're interested in"
                  />
                </div>

                <button
                  type="submit"
                  className={`group flex min-h-12 w-full items-center justify-center gap-3 rounded-md border border-white/70 bg-white px-7 py-3 text-sm font-medium text-black transition-all duration-300 hover:border-green-500 hover:bg-green-500 sm:w-auto ${focusRing} ${calm}`}
                >
                  Send Message
                  <MdArrowOutward
                    size={18}
                    className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${calm}`}
                  />
                </button>
              </form>
            )}
          </div>

          {/* DETAILS */}
          <div className="lg:border-l lg:border-gray-800 lg:pl-10">
            <p className={eyebrow}>DIRECT</p>
            <h2 className="mt-3 text-[clamp(1.5rem,3vw,2rem)] font-light">
              Reach us directly
            </h2>

            <ul className="mt-8 space-y-6">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-800 bg-gray-900 text-green-500">
                    <Icon size={22} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className={`mt-1 block break-words text-sm text-gray-200 transition-colors duration-300 hover:text-green-500 sm:text-base ${focusRing}`}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-gray-200 sm:text-base">
                        {value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-gray-800 pt-8">
              <p className="text-sm text-gray-300">Showrooms</p>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
                {showrooms.map(({ city, note }) => (
                  <li key={city}>
                    <p className="text-sm text-white">{city}</p>
                    <p className="text-xs text-gray-500">{note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className={`bg-gray-900 ${gutter} py-[clamp(3rem,7vw,5rem)]`}>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-light">
            Prefer to browse first?
          </h2>
          <button
            type="button"
            onClick={() => navigate("/shop")}
            className={`group mt-6 flex min-h-12 w-full max-w-xs items-center justify-center gap-3 rounded-md border border-gray-700 px-7 py-3 text-sm text-gray-300 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-black sm:w-auto ${focusRing} ${calm}`}
          >
            View Full Collection
            <MdArrowOutward
              size={18}
              className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${calm}`}
            />
          </button>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent pb-[env(safe-area-inset-bottom)]" />
    </main>
  );
}

export default Contact;
