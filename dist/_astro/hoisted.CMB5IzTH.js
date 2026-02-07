import"./hoisted.d6V8J2CV.js";const e=document.getElementById("contact-form");e?.addEventListener("submit",async o=>{o.preventDefault();const t=e.querySelector('button[type="submit"]');t.textContent="Envoi en cours...",t.disabled=!0,await new Promise(s=>setTimeout(s,1500)),e.innerHTML=`
      <div class="text-center py-8">
        <svg class="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <h3 class="text-xl font-semibold text-secondary-900 mb-2">Message envoyé !</h3>
        <p class="text-secondary-600">Nous vous répondrons dans les meilleurs délais.</p>
      </div>
    `});
