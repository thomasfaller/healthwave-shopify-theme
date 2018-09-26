// Apply "novalidate" to forms if javascript is enabled

const forms = document.querySelectorAll('.validate');
for (let i = 0; i < forms.length; i++) {
    forms[i].setAttribute('novalidate', true);
}
