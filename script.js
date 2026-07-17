let questions = [
  { q: "বাংলাদেশের রাজধানী কোনটি?", options: ["ঢাকা","চট্টগ্রাম","খুলনা","রাজশাহী"], ans: "ঢাকা", explain: "বাংলাদেশের রাজধানী হলো ঢাকা।" },
  { q: "মানবদেহে কতটি হাড় আছে?", options: ["200","206","210","250"], ans: "206", explain: "মানবদেহে মোট 206 টি হাড় থাকে।" },
  { q: "সূর্যের চারপাশে কোন গ্রহ ঘোরে?", options: ["চাঁদ","পৃথিবী","মঙ্গল","শুক্র"], ans: "পৃথিবী", explain: "সূর্যের চারপাশে পৃথিবীসহ সব গ্রহ ঘোরে।" }
];

let current = 0;
let score = 0;

function startNormalQuiz() {
  document.getElementById("normalQuiz").classList.remove("hidden");
}

const startBtn = document.getElementById("startBtn");
const quizBox = document.getElementById("quizBox");
const questionEl = document.getElementById("nQuestion");
const optionsEl = document.getElementById("nOptions");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("resultBox");
const scoreEl = document.getElementById("score");

startBtn.onclick = () => {
  startBtn.classList.add("hidden");
  quizBox.classList.remove("hidden");
  loadNormalQuestion();
};

function loadNormalQuestion() {
  let q = questions[current];
  questionEl.innerText = q.q;
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    let btn = document.createElement("div");
    btn.innerText = opt;
    btn.classList.add("option");
    btn.onclick = () => checkNormalAnswer(btn, q.ans, q.explain);
    optionsEl.appendChild(btn);
  });
}

function checkNormalAnswer(btn, correct, explain) {
  if (btn.innerText === correct) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    let exp = document.createElement("p");
    exp.innerText = "❌ ভুল! " + explain;
    exp.style.color = "yellow";
    optionsEl.appendChild(exp);
  }
  Array.from(optionsEl.children).forEach(opt => {
    if (opt.classList.contains("option")) opt.onclick = null;
  });
}

nextBtn.onclick = () => {
  current++;
  if (current < questions.length) {
    loadNormalQuestion();
  } else {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreEl.innerText = score + " / " + questions.length;
  }
};
