/**
 * Let AI Work - Main JavaScript
 * 기본 인터랙션 및 향후 확장을 위한 파일
 */

(function() {
    'use strict';

    // DOM이 로드된 후 실행
    document.addEventListener('DOMContentLoaded', function() {
        
        // Smooth Scroll for anchor links
        initSmoothScroll();
        
        // Add animation on scroll
        initScrollAnimations();
        
        // Project tabs functionality (if exists)
        initProjectTabs();
        
        // Framework details toggle
        initFrameworkToggle();
        
    });

    /**
     * Smooth Scroll for internal links
     */
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip empty hash
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Add animations when elements come into view
     */
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements with animation classes
        const animatedElements = document.querySelectorAll('.program-card, .framework-step, .mission-box, .main-project-card');
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    /**
     * Project tabs functionality
     */
    function initProjectTabs() {
        const tabButtons = document.querySelectorAll('.tag');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // You can add tab content switching logic here
                console.log('Tab switched:', this.textContent);
            });
        });
    }

    /**
     * Utility: Debounce function
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Framework details toggle functionality
     */
    function initFrameworkToggle() {
        const toggleBtn = document.getElementById('toggleDetails');
        const detailsSection = document.getElementById('frameworkDetails');
        
        if (!toggleBtn || !detailsSection) return;
        
        toggleBtn.addEventListener('click', function() {
            const isOpen = detailsSection.classList.contains('show');
            
            if (isOpen) {
                // Close
                detailsSection.classList.remove('show');
                detailsSection.style.display = 'none';
                toggleBtn.classList.remove('active');
                toggleBtn.querySelector('.toggle-text').textContent = '상세 내용 보기';
            } else {
                // Open
                detailsSection.style.display = 'block';
                setTimeout(() => {
                    detailsSection.classList.add('show');
                }, 10);
                toggleBtn.classList.add('active');
                toggleBtn.querySelector('.toggle-text').textContent = '상세 내용 닫기';
                
                // Smooth scroll to details
                setTimeout(() => {
                    detailsSection.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                }, 300);
            }
        });
    }

    /**
     * Add to global scope for potential external use
     */
    window.LetAIWork = {
        initSmoothScroll,
        initScrollAnimations,
        initProjectTabs,
        initFrameworkToggle,
        debounce
    };

})();
