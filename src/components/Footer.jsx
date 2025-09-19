function Footer({ mode }) {
  return (
    <footer className={`bg-${mode} text-center`} data-bs-theme={mode}>
      <div className="container p-4">
        {/* Social media section */}
        <section className="mb-4">
          <a
            className="btn btn-outline btn-floating m-1"
            href="https://www.facebook.com/share/1E9qCxct89/"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>

          <a
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            className="btn btn-outline btn-floating m-1"
            href="https://github.com/dashboard"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>

        {/* Newsletter form */}

        {/* Text section */}
        <section className="mb-4">
          <p>
            the best place in the world to learn new recipes in my websitet .My
            website if full of recipes which you want to learn them ,so why are
            you still here?
          </p>
        </section>
      </div>

      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <a style={{ textDecoration: "none" }} className="text-reset fw-bold ">
          &copy; 2025 Hisham Nigm. All rights reserved.
        </a>
      </div>
      <marquee>
        <span>
          مرحبا بك في موقعي لي تتعلم وصفات المطبخ التي لم تشهادها علي موقعي التي
          لم تشهدها في حياتك فقط اضغط علي زر ارني وصفاتي
        </span>
      </marquee>
    </footer>
  );
}

export default Footer;
