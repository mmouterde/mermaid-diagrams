(function () {
    $("pre.code:contains('graph '):visible",).waitUntilExists(function () {
        let elems = $("pre.code:contains('graph '):visible");
        elems.each((index, elem) => {
            const code = elem.textContent;
            elem.insertAdjacentHTML('afterend', `<div class="mermaid">${code}</div>`);
            elem.style.display = 'none';
        });
        window.mermaid.init();
    }, true);
}());
