const questions = [
    { name: "Kung Pao Tavuk", country: "Çin" },
    { name: "Quiche Lorraine", country: "Fransa" },
    { name: "Tikka Masala", country: "Hindistan" },
    { name: "Margherita Pizza", country: "İtalya" },
    { name: "Sushi", country: "Japonya" },
    { name: "Tacos", country: "Meksika" },
    { name: "Mantı", country: "Türkiye" }
  ];
  
  const countries = ["Çin", "Fransa", "Hindistan", "İtalya", "Japonya", "Meksika", "Türkiye"];
  let currentQuestion = 0;
  let answers = [];
  
  function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("question").innerText = `${question.name} hangi ülkeye ait?`;
  
    const options = document.querySelectorAll("#options button");
    const shuffledCountries = [...countries]
      .filter(c => c !== question.country)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
  
    shuffledCountries.push(question.country);
    shuffledCountries.sort(() => 0.5 - Math.random());
  
    shuffledCountries.forEach((country, index) => {
      options[index].innerText = country;
      options[index].disabled = false;
      options[index].style.backgroundColor = "";
    });
  
    document.getElementById("nextButton").style.display = "none";
  }
  
  function selectOption(index) {
    const selectedOption = document.querySelectorAll("#options button")[index];
    const question = questions[currentQuestion];
  
    if (selectedOption.innerText === question.country) {
      selectedOption.style.backgroundColor = "green";
      answers.push({ question: question.name, selected: selectedOption.innerText, correct: true });
    } else {
      selectedOption.style.backgroundColor = "red";
      answers.push({ question: question.name, selected: selectedOption.innerText, correct: false, correctAnswer: question.country });
    }
  
    document.querySelectorAll("#options button").forEach(button => button.disabled = true);
    document.getElementById("nextButton").style.display = "inline-block";
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    document.getElementById("game").style.display = "none";
    document.getElementById("result").style.display = "block";
  
    const answerList = document.getElementById("answerList");
    answerList.innerHTML = "";
  
    answers.forEach((answer) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${answer.question}</strong> - Senin Cevabın: <span style="color: ${answer.correct ? 'green' : 'red'}">${answer.selected}</span>`;
      
      if (!answer.correct) {
        listItem.innerHTML += ` | Doğru Cevap: <span style="color: green">${answer.correctAnswer}</span>`;
      }
  
      answerList.appendChild(listItem);
    });
  }
  
  function restartGame() {
    currentQuestion = 0;
    answers = [];
    document.getElementById("game").style.display = "block";
    document.getElementById("result").style.display = "none";
    loadQuestion();
  }
  
  window.onload = loadQuestion;