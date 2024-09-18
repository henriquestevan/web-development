const questions = [
    {
        question: "Em que dia o Corinthians foi fundado?",
        answers: ["1º de setembro de 1912", "1º de setembro de 1910", "1º de outubro de 1910", "1º de outubro de 1912"],
        correctAnswer: 1
    },
    {
        question: "Qual foi o primeiro título importante conquistado pelo Corinthians?",
        answers: ["Campeonato Paulista de 1912", "Campeonato Paulista de 1913", "Campeonato Paulista de 1914", "Campeonato Paulista de 1915"],
        correctAnswer: 2
    },
    {
        question: "Quem é o maior artilheiro da história do Corinthians?",
        answers: [
            "Marcelinho Carioca",
            "Sócrates",
            "Ronaldo Fenômeno",
            "Cláudio Christóvam de Pinho"
        ],
        correctAnswer: 3
    },
    {
        question: "Qual o jogador com mais titulos com a camisa do Corinthians?",
        answers: ["Cássio", "Danilo", "Marcelinho Carioca","Fagner"],
        correctAnswer: 0
    },
    {
        question: "Quem é o jogador com mais gols na Neo Química Arena?",
        answers: ["Paolo Guerrero", "Róger Guedes", "Ángel Romero", "Elias"],
        correctAnswer: 2
    },
    {
        question: "Apenas dois clubes no mundo possuem mais títulos do Mundial de Clubes da FIFA do que o Corinthians, que clubes são esses?",
        answers: [
            "Real Madrid e Bayern de Munique",
            "Real Madrid e Barcelona",
            "Real Madrid e Liverpool",
            "Real Madrid e Milan"
        ],
        correctAnswer: 1
    }
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `Você acertou ${score} perguntas sde ${questions.length}`;
}

window.onload = loadQuestions;