var addMovie = function(fieldTitle, fieldYear) {
    document.getElementById('saved').innerHTML += '<p>' + fieldTitle.value + ' (' + fieldYear.value + ')</p>';

    fieldTitle.value = '';
    fieldYear.value = '';
    document.getElementById('summary').innerHTML = '';

    return false;
};

var showPreview = function(title, year) {
    document.getElementById('summary').innerHTML = title + ' (' + year + ')';
};
