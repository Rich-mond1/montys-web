/* Monty's cookie consent (UK GDPR / PECR).
   Google Analytics only loads after the visitor clicks "Accept".
   To change the GA property, edit GA_ID. Choice is remembered in this browser. */
(function () {
  var GA_ID = "G-1YJ85YTW6M", KEY = "montys-cookie-consent";
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function loadGA() {
    if (window.__montysGA) return; window.__montysGA = true;
    var s = document.createElement("script"); s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID; document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag("js", new Date()); gtag("config", GA_ID, { anonymize_ip: true });
  }
  function banner() {
    var root = document.querySelector('a[href*="utility-pages/legal"]');
    var policy = root ? root.getAttribute("href").split("#")[0] : "utility-pages/legal/";
    var b = document.createElement("div");
    b.className = "montys-consent"; b.setAttribute("role", "dialog"); b.setAttribute("aria-label", "Cookie preferences");
    b.innerHTML = '<p>We use optional analytics cookies to understand how people use our website. ' +
      'You can accept or reject them. <a href="' + policy + '#cookies">Read our privacy policy</a>.</p>' +
      '<div class="montys-consent-actions"><button type="button" data-c="reject">Reject</button>' +
      '<button type="button" data-c="accept" class="is-primary">Accept</button></div>';
    var css = document.createElement("style");
    css.textContent = '.montys-consent{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:9999;max-width:560px;margin:0 auto;background:#F3EFE2;color:#2A1F1D;border:1.5px solid #E63D29;border-radius:18px;padding:16px 18px;box-shadow:0 18px 40px -18px rgba(0,0,0,.45);font:15px/1.45 "Source Sans 3",system-ui,sans-serif}' +
      '.montys-consent p{margin:0 0 12px}.montys-consent a{color:#E63D29;text-decoration:underline}' +
      '.montys-consent-actions{display:flex;gap:10px;justify-content:flex-end}' +
      '.montys-consent button{font:600 15px "Source Sans 3",system-ui,sans-serif;border-radius:999px;padding:9px 20px;border:1.5px solid #E63D29;background:transparent;color:#E63D29;cursor:pointer}' +
      '.montys-consent button.is-primary{background:#E63D29;color:#fff}';
    document.head.appendChild(css); document.body.appendChild(b);
    b.addEventListener("click", function (e) {
      var c = e.target.getAttribute && e.target.getAttribute("data-c"); if (!c) return;
      set(c); b.remove(); if (c === "accept") loadGA();
    });
  }
  var choice = get();
  if (choice === "accept") loadGA();
  else if (choice !== "reject") {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", banner); else banner();
  }
})();
