var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

document.addEventListener('DOMContentLoaded', function () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwl19x3EXHWQfQbcn0fA-h1G2D1RmsqZsmCFNhGxJ2_2ReC0mK5svFwIhChExP7TByJ/exec';
    const form = document.forms['submit-to-google-sheet'];
    const responseMessage = document.getElementById("msg");

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                console.log('Success!', response);
                responseMessage.innerHTML = "Message Sent Successfully";
                setTimeout(function () {
                    responseMessage.innerHTML = "";
                }, 5000);
                form.reset();
            })
            .catch(error => {
                console.error('Error!', error.message);
                responseMessage.innerHTML = "Error Sending Message";
            });
    });
});

