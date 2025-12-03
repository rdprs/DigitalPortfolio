// This file is script.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons for all pages
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }

    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Mobile Menu Toggle
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icon
            const menuIconContainer = document.getElementById('menu-icon');
            if (menuIconContainer) {
                if (mobileMenu.classList.contains('hidden')) {
                    menuIconContainer.innerHTML = `<i data-lucide="menu"></i>`;
                } else {
                    menuIconContainer.innerHTML = `<i data-lucide="x"></i>`;
                }
                
                // Re-render icons after changing the HTML
                if (typeof lucide !== 'undefined' && lucide.createIcons) {
                    lucide.createIcons();
                }
            }
        });
    }
});