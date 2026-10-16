// Mobile menu toggle functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Pricing switch functionality (Monthly / Annual)
function setBilling(plan) {
    const monthlyBtn = document.getElementById('monthly-btn');
    const annualBtn = document.getElementById('annual-btn');
    const priceElements = document.querySelectorAll('.price-val');

    if (plan === 'monthly') {
        monthlyBtn.classList.add('bg-indigo-600', 'text-white', 'shadow-sm');
        monthlyBtn.classList.remove('text-slate-600');
        annualBtn.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm');
        annualBtn.classList.add('text-slate-600');

        priceElements.forEach(el => {
            el.textContent = '$' + el.getAttribute('data-monthly');
        });
    } else {
        annualBtn.classList.add('bg-indigo-600', 'text-white', 'shadow-sm');
        annualBtn.classList.remove('text-slate-600');
        monthlyBtn.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm');
        monthlyBtn.classList.add('text-slate-600');

        priceElements.forEach(el => {
            el.textContent = '$' + el.getAttribute('data-annual');
        });
    }
}

// Interactive FAQ Accordion with ARIA attributes toggle
const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector('svg');
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

        // Toggle state
        toggle.setAttribute('aria-expanded', !isExpanded);
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
    });
});
