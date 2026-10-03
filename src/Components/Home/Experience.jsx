import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "./NavBar";
import NumLayout from "../Layouts/NumLayout";
import IconLay from "../Layouts/iconLay";

import car from "../../assets/cht.png";

import {
  MdArrowOutward,
  MdKey,
  MdSportsScore,
  MdLocalShipping,
  MdBuild,
  MdStorefront,
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
// DATA (placeholder copy: replace with your real offerings)
// ==============================

const experiences = [
  {
    icon: MdStorefront,
    title: "Private Viewing",
    description:
      "See your chosen car alone, after hours, with a specialist on hand.",
  },
  {
    icon: MdKey,
    title: "Test Drive",
    description:
      "Take the wheel on roads picked to show what the car does best.",
  },
  {
    icon: MdSportsScore,
    title: "Track Day",
    description:
      "Drive at the limit on a closed circuit with a professional coach.",
  },
  {
    icon: MdLocalShipping,
    title: "Concierge Delivery",
    description:
      "Your car arrives prepared and handed over wherever you choose.",
  },
  {
    icon: MdBuild,
    title: "Ownership Care",
    description:
      "Servicing, storage and support for as long as you own the car.",
  },
];

const steps = [
  {
    title: "Tell us what you want",
    text: "Share the models you like and how you plan to use them.",
  },
  {
    title: "Visit privately",
    text: "We arrange a viewing at a showroom near you, at a time that suits you.",
  },
  {
    title: "Drive it",
    text: "Book a test drive or track session before you decide.",
  },
  {
    title: "Take delivery",
    text: "We handle paperwork, inspection and delivery to your door.",
  },
];

function Experience() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: experiences[0].title,
    date: "",
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
        className={`relative flex min-h-[max(26rem,min(80svh,50rem))] items-center justify-center overflow-hidden border-green-500 sm:border-l-4 ${gutter} py-16`}
      >
        <img
          src={car}
          alt="Apex Motors client experience"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[60%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/90" />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <span className="mb-4 text-[0.65rem] font-medium tracking-[clamp(0.15em,1.8vw,0.45em)] text-green-500 sm:text-sm">
            EXPERIENCE
          </span>
          <h1 className="text-[clamp(2.5rem,9vw,5.5rem)] font-semibold leading-[1.05] tracking-[clamp(0.03em,0.8vw,0.08em)] text-balance">
            More Than A Purchase
          </h1>
          <div className="mt-[clamp(1.5rem,3vw,2.5rem)] h-px w-[clamp(4rem,10vw,7rem)] bg-green-500" />
          <p className="mt-6 max-w-[60ch] text-sm leading-7 text-gray-300 text-pretty sm:text-base sm:leading-8">
            From the first private viewing to the day your car arrives, every
            step is planned around you.
          </p>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("book")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className={`group mt-8 inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-3 rounded-md border border-white/70 bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:border-green-500 hover:bg-green-500 sm:w-auto sm:max-w-none ${focusRing} ${calm}`}
          >
            Book An Experience
            <MdArrowOutward
              size={18}
              className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${calm}`}
            />
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-gray-800 bg-gray-900">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-gray-800 sm:grid-cols-4">
          {[
            ["12", "GLOBAL SHOWROOMS"],
            ["24h", "ENQUIRY RESPONSE"],
            ["98%", "CLIENT SATISFACTION"],
            ["100%", "PRE-DELIVERY INSPECTED"],
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

      {/* EXPERIENCES */}
      <section className={`bg-black ${gutter} ${sectionY}`}>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-[clamp(2.5rem,6vw,3.5rem)] max-w-2xl text-center">
            <p className={eyebrow}>WHAT WE OFFER</p>
            <h2 className={h2}>Made For Owners</h2>
            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
              Choose one experience or combine several.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {experiences.map(({ icon: Icon, title, description }) => (
              <IconLay
                key={title}
                icon={<Icon size={25} />}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS (a real sequence, so numbering is meaningful) */}
      <section className={`bg-gray-900 ${gutter} ${sectionY}`}>
        <div className="mx-auto max-w-5xl">
          <p className={eyebrow}>HOW IT WORKS</p>
          <h2 className={h2}>
            From First Call <span className="text-gray-500">To Keys</span>
          </h2>

          <ol className="mt-[clamp(2.5rem,6vw,3.5rem)] grid gap-px overflow-hidden rounded-xl border border-gray-800 bg-gray-800 sm:grid-cols-2">
            {steps.map(({ title, text }, i) => (
              <li key={title} className="bg-gray-900 p-[clamp(1.25rem,3vw,2rem)]">
                <p className="text-sm font-medium text-green-500">
                  Step {i + 1}
                </p>
                <h3 className="mt-2 text-xl font-light text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="book" className={`bg-black ${gutter} ${sectionY}`}>
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <p className={eyebrow}>BOOK</p>
            <h2 className={h2}>Request An Experience</h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-500 text-pretty">
              Tell us what you'd like and we'll reply within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div
              role="status"
              className="mt-10 rounded-xl border border-green-500/40 bg-gray-900 p-8 text-center"
            >
              <h3 className="text-xl font-light">Request received</h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Thanks, {form.name || "there"}. We'll email {form.email} to
                confirm your {form.type.toLowerCase()}.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className={`mt-6 min-h-11 rounded-md border border-gray-700 px-6 py-2 text-sm text-gray-300 transition-colors duration-300 hover:border-green-500 hover:text-white ${focusRing} ${calm}`}
              >
                Make another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-5 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-900 to-black p-[clamp(1.25rem,3vw,2rem)]"
            >
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

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="type" className="text-sm text-gray-300">
                    Experience
                  </label>
                  <select
                    id="type"
                    value={form.type}
                    onChange={update("type")}
                    className={field}
                  >
                    {experiences.map(({ title }) => (
                      <option key={title} value={title}>
                        {title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="text-sm text-gray-300">
                    Preferred date
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={form.date}
                    onChange={update("date")}
                    className={`${field} [color-scheme:dark]`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`group flex min-h-12 w-full items-center justify-center gap-3 rounded-md border border-white/70 bg-white px-7 py-3 text-sm font-medium text-black transition-all duration-300 hover:border-green-500 hover:bg-green-500 ${focusRing} ${calm}`}
              >
                Send Request
                <MdArrowOutward
                  size={18}
                  className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${calm}`}
                />
              </button>
            </form>
          )}

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => navigate("/shop")}
              className={`flex min-h-12 items-center justify-center rounded-md border border-gray-700 px-7 py-3 text-sm text-gray-300 transition-all duration-300 hover:border-green-500 hover:text-white ${focusRing} ${calm}`}
            >
              Browse The Collection
            </button>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent pb-[env(safe-area-inset-bottom)]" />
    </main>
  );
}

export default Experience;
