document.addEventListener("DOMContentLoaded", function () {
    const navbarDocsLink = document.querySelector('.navbar__item[href="/"]');

    if (navbarDocsLink && window.location.hostname === "blog.coderabbit.ai") {
        navbarDocsLink.setAttribute("href", "https://docs.coderabbit.ai");
    }
});
