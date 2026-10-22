(() => {
  const torch = document.querySelector(".torch");
  const enabled = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
  if (!torch) return;

  let frame = 0;
  let x = 0;
  let y = 0;

  function hide() {
    cancelAnimationFrame(frame);
    frame = 0;
    torch.classList.remove("is-lit");
  }

  function move(event) {
    if (!enabled.matches || event.pointerType === "touch") return;
    x = event.clientX;
    y = event.clientY;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      torch.style.setProperty("--torch-x", `${x}px`);
      torch.style.setProperty("--torch-y", `${y}px`);
      torch.classList.add("is-lit");
      frame = 0;
    });
  }

  document.addEventListener("pointermove", move, { passive: true });
  document.documentElement.addEventListener("pointerleave", hide);
  window.addEventListener("blur", hide);
  enabled.addEventListener("change", hide);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) hide();
  });
})();
