var input = document.getElementById('id_tags'),
    tagify = new Tagify(input, {
        whitelist : ['dataset', 'medicine', 'physics', 'universe', 'biology'],
        dropdown : {
            classname     : "color-blue",
            enabled       : 0,              // show the dropdown immediately on focus
            maxItems      : 10,
            position      : "text",         // place the dropdown near the typed text
            closeOnSelect : false,          // keep the dropdown open after selecting a suggestion
            highlightFirst: true
        }
    });

var input = document.getElementById('id_tags_view').innerText
input = input.replaceAll('value', '')
input = input.replaceAll('"', '')
input = input.replaceAll('[', '')
input = input.replaceAll(']', '')
input = input.replaceAll('{', '')
input = input.replaceAll('}', '')
input = input.replaceAll(':', '')
input = input.replaceAll(',', ', ')

document.getElementById('id_tags_view').innerText = input
