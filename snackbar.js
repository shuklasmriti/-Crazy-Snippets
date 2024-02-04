function showSnackbar(type) {
    var snackbar = document.getElementById("snackbar");

    switch (type) {
        case 'success':
            snackbar.style.backgroundColor = '#4CAF50'; 
            snackbar.innerHTML = 'Success!';
            break;
        case 'warning':
            snackbar.style.backgroundColor = '#ff9800'; 
                        snackbar.innerHTML = 'Warning!';
            break;
        case 'error':
            snackbar.style.backgroundColor = '#f44336'; 
            snackbar.innerHTML = 'Error!';
            break;
        default:
            break;
    }

    snackbar.style.display = 'block';

    setTimeout(function() {
        snackbar.style.display = 'none';
    }, 3000);
}
