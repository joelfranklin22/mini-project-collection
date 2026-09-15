document.getElementById('contact-form').addEventListener('btn-1',function(event){
    event.preventDefault();
    var data = new FormData(event.target);
    fetch("https://formspree.io/f/mnqebebk", {
        method: 'POST', body: data,
    }).then(response => {
        if (response.ok) {
            alert('Success');
        }
        else {
            alert('Error');
        }
    });
    document.getElementById('contact-form').reset();
});