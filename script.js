document.addEventListener('DOMContentLoaded', function () {
    const passwordGeneratorForm = document.getElementById('password-generator-form');
    const passwordDisplay = document.getElementById('password-display');
    const passwordField = document.getElementById('password');
    const copyButton = document.getElementById('copy-button');

    passwordGeneratorForm.addEventListener('submit', function (e) {
        e.preventDefault();
    });

    const generatePassword = () => {
        const length = parseInt(document.getElementById('password-length').value);
        const includeUppercase = document.getElementById('include-uppercase').checked;
        const includeLowercase = document.getElementById('include-lowercase').checked;
        const includeNumbers = document.getElementById('include-numbers').checked;
        const includeSymbols = document.getElementById('include-symbols').checked;

        const charset = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberCharset = '0123456789';
        const symbolCharset = '!@#$%^&*()_+';

        let validCharset = charset;
        if (includeUppercase) validCharset += uppercaseCharset;
        if (includeLowercase) validCharset += charset;
        if (includeNumbers) validCharset += numberCharset;
        if (includeSymbols) validCharset += symbolCharset;

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * validCharset.length);
            password += validCharset.charAt(randomIndex);
        }

        passwordField.value = password;
        passwordDisplay.style.display = 'block';
    };

    copyButton.addEventListener('click', function () {
        passwordField.select();
        document.execCommand('copy');
    });

    document.getElementById('generate-button').addEventListener('click', generatePassword);
});