document.getElementById('contact-form').addEventListener('submit', function (e) {
 

    const appointmentMessage = document.querySelector('.appointment-message');
    let formFields = document.getElementsByClassName('form-field');
    let allFields = false;

    let appointment = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        service: document.getElementById('appointment-service').value,
        phone: document.getElementById('contact-phone').value,
        date: document.getElementById('contact-date').value,
        time: document.getElementById('contact-time').value,
        message: document.getElementById('contact-message').value,

    }

    /* walidacja formularza */
    for (let i = 0; i < formFields.length; i++) {
        if (formFields[i].value === '') {
            allFields = false;
            formFields[i].classList.add('error');
            
        } else {
            allFields = true;
            formFields[i].classList.remove('error');
        }

    }
    if (allFields) {
        createAppointment(appointment);

    } else {
        appointmentMessage.classList.add('error');
        appointmentMessage.textContent = 'wypełnij wymagane pola';
         e.preventDefault();
    }
    if (allFields) {
        appointmentMessage.classList.remove('error');
    }


})

document.getElementsByClassName('nav-link')[0].addEventListener('mouseenter', function () {
document.getElementsByClassName('dropmenu')[0].classList.toggle('open') ;
})
