import"./hoisted.d6V8J2CV.js";const e=document.getElementById("lead-form");e?.addEventListener("submit",async n=>{n.preventDefault(),new FormData(e);const t=e.querySelector('button[type="submit"]');t.textContent,t.textContent="Envoi en cours...",t.disabled=!0,await new Promise(o=>setTimeout(o,1e3)),e.innerHTML=`
      <div class="text-center py-4">
        <svg class="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <p class="text-lg font-semibold text-secondary-900">Merci pour votre inscription !</p>
        <p class="text-secondary-600 mt-2">Vous recevrez bientôt nos conseils.</p>
      </div>
    `});
