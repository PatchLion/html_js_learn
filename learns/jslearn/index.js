function $(expr, con) {
    return (con || document).querySelector(expr);
}

function $$(expr, con) {
    return [].slice.call((con || document).querySelectorAll(expr));
}

$$('a[data-property]').forEach((element, i) => {
    var property = element.getAttribute('data-property'),
        from = element.getAttribute('data-from'),
        to = element.getAttribute('data-to');

    console.log(property + ", " + from + ", " + to);
});