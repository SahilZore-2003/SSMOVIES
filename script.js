const button = document.querySelector('#button');

const disableButton = () => {
    button.disabled = true;
};

button.addEventListener('click', disableButton);