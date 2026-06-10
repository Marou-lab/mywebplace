/* ==========================================================================
   MyWebPlace — Script principal
   - Menu mobile
   - Header au scroll
   - Animations d'apparition (reveal)
   - Accordéon FAQ
   - Filtres des réalisations
   - Validation du formulaire de contact
   - Année automatique du footer
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  /* ----- Menu mobile -------------------------------------------------- */
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      toggle.classList.toggle("open");
      navLinks.classList.toggle("open");
      const expanded = toggle.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded);
    });

    // Fermer le menu après un clic sur un vrai lien de navigation (mobile),
    // mais pas sur le bouton "Services" qui sert à déplier le sous-menu.
    navLinks.querySelectorAll("a:not(.nav-dropdown-toggle)").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.classList.remove("open");
        navLinks.classList.remove("open");
      });
    });
  }

  /* ----- Menu déroulant Services (mobile : clic pour déplier) -------- */
  document.querySelectorAll(".nav-dropdown-toggle").forEach(function (tgl) {
    tgl.addEventListener("click", function (e) {
      if (window.matchMedia("(max-width: 768px)").matches) {
        e.preventDefault();
        var parent = tgl.closest(".has-dropdown");
        if (parent) parent.classList.toggle("open");
      }
    });
  });

  /* ----- Header : ombre au scroll ------------------------------------ */
  const header = document.querySelector(".header");
  if (header) {
    const onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ----- Animations d'apparition au scroll --------------------------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  /* ----- Accordéon FAQ ----------------------------------------------- */
  document.querySelectorAll(".faq-question").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const item = btn.closest(".faq-item");
      const answer = item.querySelector(".faq-answer");
      const isOpen = item.classList.contains("open");

      // Refermer les autres
      document.querySelectorAll(".faq-item.open").forEach(function (other) {
        if (other !== item) {
          other.classList.remove("open");
          other.querySelector(".faq-answer").style.maxHeight = null;
        }
      });

      item.classList.toggle("open");
      answer.style.maxHeight = isOpen ? null : answer.scrollHeight + "px";
    });
  });

  /* ----- Filtres des réalisations ------------------------------------ */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project");
  if (filterBtns.length && projects.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
        const filter = btn.dataset.filter;

        projects.forEach(function (proj) {
          const match = filter === "all" || proj.dataset.category === filter;
          proj.style.display = match ? "" : "none";
        });
      });
    });
  }

  /* ----- Validation du formulaire de contact ------------------------- */
  const form = document.querySelector("#contact-form");
  if (form) {
    const feedback = form.querySelector(".form-feedback");

    const showError = function (group, on) {
      group.classList.toggle("invalid", on);
    };

    const validateField = function (field) {
      const group = field.closest(".form-group");
      if (!group) return true;
      let valid = true;

      if (field.hasAttribute("required") && !field.value.trim()) {
        valid = false;
      } else if (field.type === "email" && field.value.trim()) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        valid = re.test(field.value.trim());
      }
      showError(group, !valid);
      return valid;
    };

    form.querySelectorAll(".form-control").forEach(function (field) {
      field.addEventListener("blur", function () {
        validateField(field);
      });
      field.addEventListener("input", function () {
        if (field.closest(".form-group").classList.contains("invalid")) {
          validateField(field);
        }
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let allValid = true;

      form.querySelectorAll(".form-control[required], input[type=email]").forEach(
        function (field) {
          if (!validateField(field)) allValid = false;
        }
      );

      if (allValid) {
        if (feedback) {
          feedback.classList.add("show");
          feedback.textContent =
            "✓ Merci ! Votre message a bien été pris en compte. Nous vous recontactons sous 24 h ouvrées.";
        }
        form.reset();
        if (feedback) {
          feedback.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else if (feedback) {
        feedback.classList.remove("show");
      }
    });
  }

  /* ----- Année automatique du footer --------------------------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
