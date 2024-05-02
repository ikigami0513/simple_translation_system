function get_content(language) {
    fetch(`translates/${language}.json`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Error during fetching translation data.");
        }
        return response.json();
    })
    .then(data => {
        data.forEach((translation) => {
            document.getElementById(translation.id).innerHTML = translation.content
        })
    })
    .catch(error => {
        console.log(error);
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    get_content("fr");

    const languageSelector = document.getElementById("language-selector");
    languageSelector.addEventListener("change", function(event) {
        get_content(languageSelector.value);
    });
});