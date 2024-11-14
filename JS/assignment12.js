document.getElementById('search-word').addEventListener('submit', function(event) {
    
    event.preventDefault();

    const word = document.getElementById('Inputword').value; 
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Word not found');
            }
            return  response.json();
        })
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            document.getElementById('result').innerHTML = `<p>${error.message}</p>`;
        });
});

function displayResults(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; 

    data.forEach(entry => {
        const word = entry.word;
        const phonetics = entry.phonetics.map(p => p.text).join(', ');
        resultDiv.innerHTML += `<h2>${word}</h2><p>Transcription: ${phonetics}</p>`;

        entry.meanings.forEach(meaning => {
            const partOfSpeech = meaning.partOfSpeech;
            const definitions = meaning.definitions.map(def => `<li>${def.definition}</li>`).join('');
            resultDiv.innerHTML += `<h3>${partOfSpeech}</h3><ul>${definitions}</ul>`;
        });
    });
}

