import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cars from "../../products/product.json";
import "./configure.css";

const paintOptions = [
  { name: "Obsidian Black", color: "#111318", price: 0 },
  { name: "Racing Blue", color: "#1749a5", price: 1500 },
  { name: "Polar Silver", color: "#c6cbd0", price: 1000 },
  { name: "AMG Red", color: "#b51f2a", price: 1800 },
  { name: "Pearl White", color: "#f2f1ed", price: 1200 },
  { name: "Emerald Green", color: "#164c3b", price: 2000 },
];

const wheelOptions = [
  { name: "Standard Alloy", price: 0 },
  { name: "AMG Performance", price: 2500 },
  { name: "Forged Black", price: 4000 },
];

const interiorOptions = [
  { name: "Black Leather", price: 0 },
  { name: "Red Nappa Leather", price: 2200 },
  { name: "Cream Leather", price: 1800 },
];

const money = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

const slugify = (value = "") =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const numericPrice = (value) => {
  const parsed = Number(String(value ?? "").replace(/[^0-9.]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
};

const normalizeImage = (image = "") => {
  if (!image) return "";

  if (/^(https?:\/\/|data:|blob:)/i.test(image)) {
    return image;
  }

  // Public-folder assets should be referenced from the site root.
  return `/${String(image)
    .replace(/^\/+/, "")
    .replace(/^public\//, "")}`;
};

function Configure() {
  const params = useParams();

  // Supports both /configure/:id and /configure/:carId
  const carId = params.carId ?? params.id;

  const car = useMemo(() => {
    const requestedId = String(carId ?? "").trim();

    if (!requestedId || !Array.isArray(Cars)) {
      return undefined;
    }

    // First, try an exact ID match.
    const matchedById = Cars.find(
      (item) => String(item.id ?? "").trim() === requestedId
    );

    if (matchedById) {
      return matchedById;
    }

    // If no ID matches, allow the URL to contain the vehicle name.
    return Cars.find(
      (item) => slugify(item.name) === slugify(requestedId)
    );
  }, [carId]);

  const [paint, setPaint] = useState(paintOptions[0]);
  const [wheels, setWheels] = useState(wheelOptions[0]);
  const [interior, setInterior] = useState(interiorOptions[0]);
  const [performance, setPerformance] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!car) {
    return (
      <main className="configure-not-found">
        <span className="configure-kicker">APEX MOTORS</span>

        <h1>Let&apos;s find your next car.</h1>

        <p>
          We couldn&apos;t find that model. Explore our collection to choose a
          vehicle.
        </p>

        <Link to="/models" className="configure-primary-btn">
          Explore Models →
        </Link>

        {/* Helpful during development */}
        {import.meta.env.DEV && (
          <p style={{ marginTop: "16px", fontSize: "12px", opacity: 0.6 }}>
            Requested vehicle ID: {carId || "No ID provided"}
          </p>
        )}
      </main>
    );
  }

  const basePrice = numericPrice(car.price);

  const total =
    basePrice +
    paint.price +
    wheels.price +
    interior.price +
    (performance ? 5000 : 0);

  const image = normalizeImage(car.image);

  const saveBuild = () => {
    const build = {
      vehicleId: car.id,
      vehicle: String(car.name ?? "Unnamed vehicle").trim(),
      category: car.category ?? "",
      image,
      basePrice,
      paint: paint.name,
      wheels: wheels.name,
      interior: interior.name,
      performancePackage: performance,
      total,
      currency: "USD",
      savedAt: new Date().toISOString(),
    };

    try {
      sessionStorage.setItem("apexCarBuild", JSON.stringify(build));
      setSaved(true);
    } catch {
      setSaved(false);

      window.alert(
        "Your browser couldn't save this configuration. Please check your browser storage settings."
      );
    }
  };

  const resetBuild = () => {
    setPaint(paintOptions[0]);
    setWheels(wheelOptions[0]);
    setInterior(interiorOptions[0]);
    setPerformance(false);
    setSaved(false);
  };

  return (
    <main className="configure-page">
      <header className="configure-topbar">
        <Link to="/models" className="configure-back">
          <span>←</span> All models
        </Link>

        <Link to="/" className="configure-logo">
          APEX<span>.</span>
        </Link>

        <span className="configure-progress">YOUR BUILD / 01</span>
      </header>

      <section className="configure-heading">
        <span className="configure-kicker">YOUR VISION. YOUR MACHINE.</span>

        <h1>
          Make it <span>yours.</span>
        </h1>

        <p>
          Every detail matters. Personalize{" "}
          {String(car.name ?? "your vehicle").trim()} to match your taste.
        </p>
      </section>

      <div className="configure-layout">
        <aside className="configure-preview">
          <div className="configure-image-wrap">
            {image ? (
              <img
                src={image}
                alt={car.name || "Vehicle"}
                className="configure-car-image"
                onError={(event) => {
                  event.currentTarget.style.opacity = "0.25";
                }}
              />
            ) : (
              <div className="configure-car-image" role="img" aria-label="Vehicle image unavailable">
                Image unavailable
              </div>
            )}

            <span className="configure-image-tag">
              <span className="configure-live-dot" />
              BESPOKE COLLECTION
            </span>

            <span className="configure-image-number">
              APEX / {String(car.id ?? "").padStart(2, "0")}
            </span>
          </div>

          <div className="configure-car-info">
            <span className="configure-label">
              {car.category || "PERFORMANCE COLLECTION"}
            </span>

            <h2>{String(car.name ?? "Unnamed vehicle").trim()}</h2>

            <div className="configure-base-price">
              <span>Starting from</span>
              <strong>{money(basePrice)}</strong>
            </div>
          </div>

          <div className="configure-spec-grid">
            <div>
              <span>POWER</span>
              <strong>{car.power || "—"}</strong>
            </div>

            <div>
              <span>TOP SPEED</span>
              <strong>{car.topspeed || "—"}</strong>
            </div>

            <div>
              <span>MODEL</span>
              <strong>#{car.id}</strong>
            </div>
          </div>

          <div className="configure-summary">
            <div className="configure-summary-heading">
              <h3>Your specification</h3>

              <button type="button" onClick={resetBuild}>
                Reset
              </button>
            </div>

            <p>
              <span>Exterior</span>
              <strong>{paint.name}</strong>
            </p>

            <p>
              <span>Wheels</span>
              <strong>{wheels.name}</strong>
            </p>

            <p>
              <span>Interior</span>
              <strong>{interior.name}</strong>
            </p>

            <p>
              <span>Performance</span>
              <strong>
                {performance ? "Package added" : "Standard"}
              </strong>
            </p>
          </div>
        </aside>

        <section className="configure-controls">
          {/* EXTERIOR */}
          <div className="configure-section">
            <div className="configure-section-heading">
              <div>
                <span className="configure-label">01 / EXTERIOR</span>
                <h2>Choose your colour</h2>
                <p>Set the tone before you hit the road.</p>
              </div>

              <span className="configure-selection">{paint.name}</span>
            </div>

            <div className="configure-paint-grid">
              {paintOptions.map((option) => (
                <button
                  type="button"
                  key={option.name}
                  className={`configure-paint ${
                    paint.name === option.name ? "selected" : ""
                  }`}
                  onClick={() => {
                    setPaint(option);
                    setSaved(false);
                  }}
                  aria-pressed={paint.name === option.name}
                >
                  <span
                    className="configure-swatch"
                    style={{ backgroundColor: option.color }}
                  >
                    {paint.name === option.name && <span>✓</span>}
                  </span>

                  <span className="configure-paint-name">
                    {option.name}
                  </span>

                  <small>
                    {option.price ? `+${money(option.price)}` : "Included"}
                  </small>
                </button>
              ))}
            </div>
          </div>

          {/* WHEELS */}
          <div className="configure-section">
            <div className="configure-section-heading">
              <div>
                <span className="configure-label">02 / WHEELS</span>
                <h2>Own the road</h2>
                <p>Find the perfect finish for your machine.</p>
              </div>
            </div>

            <div className="configure-option-list">
              {wheelOptions.map((option) => (
                <button
                  type="button"
                  key={option.name}
                  className={`configure-option ${
                    wheels.name === option.name ? "selected" : ""
                  }`}
                  onClick={() => {
                    setWheels(option);
                    setSaved(false);
                  }}
                  aria-pressed={wheels.name === option.name}
                >
                  <span className="configure-option-check">
                    {wheels.name === option.name ? "✓" : ""}
                  </span>

                  <span className="configure-option-name">
                    {option.name}
                  </span>

                  <strong>
                    {option.price ? `+${money(option.price)}` : "Included"}
                  </strong>
                </button>
              ))}
            </div>
          </div>

          {/* INTERIOR */}
          <div className="configure-section">
            <div className="configure-section-heading">
              <div>
                <span className="configure-label">03 / INTERIOR</span>
                <h2>Your personal sanctuary</h2>
                <p>Premium comfort, finished your way.</p>
              </div>
            </div>

            <div className="configure-option-list">
              {interiorOptions.map((option) => (
                <button
                  type="button"
                  key={option.name}
                  className={`configure-option ${
                    interior.name === option.name ? "selected" : ""
                  }`}
                  onClick={() => {
                    setInterior(option);
                    setSaved(false);
                  }}
                  aria-pressed={interior.name === option.name}
                >
                  <span className="configure-option-check">
                    {interior.name === option.name ? "✓" : ""}
                  </span>

                  <span className="configure-option-name">
                    {option.name}
                  </span>

                  <strong>
                    {option.price ? `+${money(option.price)}` : "Included"}
                  </strong>
                </button>
              ))}
            </div>
          </div>

          {/* PERFORMANCE */}
          <div className="configure-section">
            <div className="configure-section-heading">
              <div>
                <span className="configure-label">04 / PERFORMANCE</span>
                <h2>More than a drive</h2>
                <p>Add an extra touch of performance.</p>
              </div>
            </div>

            <button
              type="button"
              className={`configure-option configure-performance ${
                performance ? "selected" : ""
              }`}
              onClick={() => {
                setPerformance((current) => !current);
                setSaved(false);
              }}
              aria-pressed={performance}
            >
              <span className="configure-option-check">
                {performance ? "✓" : ""}
              </span>

              <span className="configure-performance-copy">
                <strong>Performance Package</strong>
                <small>
                  Enhanced driving-focused specification
                </small>
              </span>

              <strong>{performance ? "Added" : "+$5,000"}</strong>
            </button>
          </div>

          {/* CHECKOUT */}
          <div className="configure-checkout">
            <div className="configure-total">
              <span>YOUR BUILD TOTAL</span>
              <strong>{money(total)}</strong>
              <small>
                Estimated price · Final price subject to confirmation.
              </small>
            </div>

            <button
              type="button"
              className="configure-primary-btn"
              onClick={saveBuild}
            >
              {saved ? "Configuration Saved ✓" : "Save My Configuration →"}
            </button>

            <p className="configure-secure-note">
              Your build is saved for this browser session.
            </p>
          </div>

          {saved && (
            <div
              className="configure-success"
              role="status"
              aria-live="polite"
            >
              <span className="configure-success-icon">✓</span>

              <div>
                <h3>Your build is ready.</h3>

                <p>
                  Your {String(car.name ?? "vehicle").trim()} configuration
                  has been saved. Continue to contact us to discuss
                  availability and an official quote.
                </p>

                <Link to="/contact" className="configure-contact-link">
                  Contact the dealership →
                </Link>
              </div>
            </div>
          )}
        </section>
      </div>

      <footer className="configure-footer">
        <span>APEX MOTORS</span>
        <span>ENGINEERED FOR YOUR TASTE.</span>
      </footer>
    </main>
  );
}

export default Configure;
