// Theme toggle functionality
(function() {
  function toggleTheme() {
    try {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      console.log('Toggling theme from', currentTheme, 'to', newTheme);
      
      // Set the new theme
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Trigger any theme change events
      window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: newTheme } }));
      
      console.log('Theme successfully changed to:', newTheme);
      return true;
    } catch (error) {
      console.error('Error toggling theme:', error);
      return false;
    }
  }

  function initTheme() {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    console.log('Initialized theme to:', savedTheme);
  }

  function attachThemeToggle() {
    const themeButtons = document.querySelectorAll('.navbar-theme-toggle');
    
    themeButtons.forEach(button => {
      if (!button.hasAttribute('data-theme-attached')) {
        button.setAttribute('data-theme-attached', 'true');
        button.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          console.log('Theme toggle button clicked');
          toggleTheme();
        });
        console.log('Attached theme toggle to button');
      }
    });
  }

  // Initialize on load
  document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    setTimeout(attachThemeToggle, 100);
    
    // Re-attach on DOM changes
    const observer = new MutationObserver(function() {
      setTimeout(attachThemeToggle, 50);
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });

  // Also try to attach immediately if DOM is already loaded
  if (document.readyState === 'loading') {
    // DOM not ready yet
  } else {
    initTheme();
    setTimeout(attachThemeToggle, 100);
  }

  // Make toggle function globally available
  window.toggleTheme = toggleTheme;
})();