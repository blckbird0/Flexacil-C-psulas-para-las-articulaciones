// Referral link (use exactly this)
const AFFILIATE_URL = "https://uh8f8d208auh.axdsz.pro/?rid=-7EBNQCgQAAHBOXAYABgEBEREKEQkKEQ1CEQ0SAAF_YWRjb21ibwEx";

function goToAffiliate(){
  window.open(AFFILIATE_URL, "_blank");
}

// Countdown: 5 hours 59 minutes 59 seconds, as styled on the site
let total = (5 * 3600) + (59 * 60) + 59;
const timerEl = document.getElementById("timer");

function formatTime(t){
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function tick(){
  if (!timerEl) return;
  timerEl.textContent = formatTime(total);
  if (total > 0) total--;
}
setInterval(tick, 1000);
tick();