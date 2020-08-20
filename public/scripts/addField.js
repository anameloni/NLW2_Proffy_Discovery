// Search for button 'addField"
document.querySelector("#add-time")
// Button onclick
.addEventListener('click', cloneField);


//Execute and action
function cloneField() {
    //Duplicate  field: define which field to duplicate
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    //Catch fields before displaying on the page
    fields = newFieldContainer.querySelectorAll('input');
    
    //Clear each field before displaying on the page
    fields.forEach(function(field) {
        //Catch field according with the index and clean it
        field.value = '';
    });

    //Display duplicated fields: Display where?
    document.querySelector('#schedule-items').appendChild(newFieldContainer);

}