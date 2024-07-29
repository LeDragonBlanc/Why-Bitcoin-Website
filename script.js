function checkAnswer(section, isCorrect) {
    const answerElement = document.getElementById(`${section}-answer`);
    if (isCorrect) {
        answerElement.textContent = "Bonne réponse !";
        answerElement.style.color = "green";
    } else {
        answerElement.textContent = "Mauvaise réponse, réessayez.";
        answerElement.style.color = "red";
    }
}
