let loadDragon = function () {
  canvases.dragon = new spine.SpineCanvas(document.getElementById("dragonCanvas"), {
    app: new SpineObject("https://vega-spica.github.io/Personality-Sneak-Peek-Expanded/res/abaddon_01_m_adult_p/abaddon_01_m_adult_p", "idle")
  });
}

let loadAuraBack = function () {
  canvases.backAura = new spine.SpineCanvas(document.getElementById("Auraback"), {
    app: new SpineObject("https://vega-spica.github.io/Personality-Sneak-Peek-Expanded/res/aura/aura_back/aura_back", "aura_e_emart")
  })
}

let loadAuraFront = function () {
  canvases.frontAura = new spine.SpineCanvas(document.getElementById("Aurafront"), {
    app: new SpineObject("https://vega-spica.github.io/Personality-Sneak-Peek-Expanded/res/aura/aura_front/aura_front", "aura_e_emart")
  })
}

window.addEventListener("load", function() {
  loadDragon();
  loadAuraBack();
  loadAuraFront();
});