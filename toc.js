// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="reborn_003_Erster_Theil.html"><strong aria-hidden="true">1.</strong> reborn_003_Erster_Theil</a></li><li class="chapter-item expanded "><a href="reborn_004_Die_Reden_Zarathustras.html"><strong aria-hidden="true">2.</strong> reborn_004_Die_Reden_Zarathustras</a></li><li class="chapter-item expanded "><a href="reborn_005_Von_den_Lehrstühlen_der_Tugend.html"><strong aria-hidden="true">3.</strong> reborn_005_Von_den_Lehrstühlen_der_Tugend</a></li><li class="chapter-item expanded "><a href="reborn_006_Von_den_Hinterweltlern.html"><strong aria-hidden="true">4.</strong> reborn_006_Von_den_Hinterweltlern</a></li><li class="chapter-item expanded "><a href="reborn_007_Von_den_Verächtern_des_Leibes.html"><strong aria-hidden="true">5.</strong> reborn_007_Von_den_Verächtern_des_Leibes</a></li><li class="chapter-item expanded "><a href="reborn_008_Von_den_Freuden-_und_Leidenschaften.html"><strong aria-hidden="true">6.</strong> reborn_008_Von_den_Freuden-_und_Leidenschaften</a></li><li class="chapter-item expanded "><a href="reborn_009_Vom_bleichen_Verbrecher.html"><strong aria-hidden="true">7.</strong> reborn_009_Vom_bleichen_Verbrecher</a></li><li class="chapter-item expanded "><a href="reborn_010_Vom_Lesen_und_Schreiben.html"><strong aria-hidden="true">8.</strong> reborn_010_Vom_Lesen_und_Schreiben</a></li><li class="chapter-item expanded "><a href="reborn_011_Vom_Baum_am_Berge.html"><strong aria-hidden="true">9.</strong> reborn_011_Vom_Baum_am_Berge</a></li><li class="chapter-item expanded "><a href="reborn_012_Von_den_Predigern_des_Todes.html"><strong aria-hidden="true">10.</strong> reborn_012_Von_den_Predigern_des_Todes</a></li><li class="chapter-item expanded "><a href="reborn_013_Vom_Krieg_und_Kriegsvolke.html"><strong aria-hidden="true">11.</strong> reborn_013_Vom_Krieg_und_Kriegsvolke</a></li><li class="chapter-item expanded "><a href="reborn_014_Vom_neuen_Götzen.html"><strong aria-hidden="true">12.</strong> reborn_014_Vom_neuen_Götzen</a></li><li class="chapter-item expanded "><a href="reborn_015_Von_den_Fliegen_des_Marktes.html"><strong aria-hidden="true">13.</strong> reborn_015_Von_den_Fliegen_des_Marktes</a></li><li class="chapter-item expanded "><a href="reborn_016_Von_der_Keuschheit.html"><strong aria-hidden="true">14.</strong> reborn_016_Von_der_Keuschheit</a></li><li class="chapter-item expanded "><a href="reborn_017_Vom_Freunde.html"><strong aria-hidden="true">15.</strong> reborn_017_Vom_Freunde</a></li><li class="chapter-item expanded "><a href="reborn_018_Von_tausend_und_Einem_Ziele.html"><strong aria-hidden="true">16.</strong> reborn_018_Von_tausend_und_Einem_Ziele</a></li><li class="chapter-item expanded "><a href="reborn_019_Von_der_Nächstenliebe.html"><strong aria-hidden="true">17.</strong> reborn_019_Von_der_Nächstenliebe</a></li><li class="chapter-item expanded "><a href="reborn_020_Vom_Wege_des_Schaffenden.html"><strong aria-hidden="true">18.</strong> reborn_020_Vom_Wege_des_Schaffenden</a></li><li class="chapter-item expanded "><a href="reborn_021_Von_alten_und_jungen_Weiblein.html"><strong aria-hidden="true">19.</strong> reborn_021_Von_alten_und_jungen_Weiblein</a></li><li class="chapter-item expanded "><a href="reborn_022_Vom_Biss_der_Natter.html"><strong aria-hidden="true">20.</strong> reborn_022_Vom_Biss_der_Natter</a></li><li class="chapter-item expanded "><a href="reborn_023_Von_Kind_und_Ehe.html"><strong aria-hidden="true">21.</strong> reborn_023_Von_Kind_und_Ehe</a></li><li class="chapter-item expanded "><a href="reborn_024_Vom_freien_Tode.html"><strong aria-hidden="true">22.</strong> reborn_024_Vom_freien_Tode</a></li><li class="chapter-item expanded "><a href="reborn_025_Von_der_schenkenden_Tugend.html"><strong aria-hidden="true">23.</strong> reborn_025_Von_der_schenkenden_Tugend</a></li><li class="chapter-item expanded "><a href="reborn_026_Zweiter_Theil.html"><strong aria-hidden="true">24.</strong> reborn_026_Zweiter_Theil</a></li><li class="chapter-item expanded "><a href="reborn_027_Das_Kind_mit_dem_Spiegel.html"><strong aria-hidden="true">25.</strong> reborn_027_Das_Kind_mit_dem_Spiegel</a></li><li class="chapter-item expanded "><a href="reborn_028_Auf_den_glückseligen_Inseln.html"><strong aria-hidden="true">26.</strong> reborn_028_Auf_den_glückseligen_Inseln</a></li><li class="chapter-item expanded "><a href="reborn_029_Von_den_Mitleidigen.html"><strong aria-hidden="true">27.</strong> reborn_029_Von_den_Mitleidigen</a></li><li class="chapter-item expanded "><a href="reborn_030_Von_den_Priestern.html"><strong aria-hidden="true">28.</strong> reborn_030_Von_den_Priestern</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
