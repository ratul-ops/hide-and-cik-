let loveQuestions = {
  1: { q: "তুমি কি প্রথম দেখাতেই প্রেমে বিশ্বাস করো?", options: ["হ্যাঁ","না"], branch: { "হ্যাঁ": 2, "না": 3 } },
  2: { q: "তুমি কি সহজে অনুভূতি প্রকাশ করো?", options: ["হ্যাঁ","না"], branch: { "হ্যাঁ": 4, "না": 5 } },
  3: { q: "তুমি কি ধীরে ধীরে সম্পর্ক গড়তে পছন্দ করো?", options: ["হ্যাঁ","না"], branch: { "হ্যাঁ": 6, "না": 7 } },
  4: { result: "তুমি রোমান্টিক এবং খোলামেলা স্বভাবের।" },
  5: { result: "তুমি অনুভূতি লুকিয়ে রাখো, কিন্তু গভীরভাবে ভালোবাসো।" },
  6: { result: "তুমি ধৈর্যশীল এবং সম্পর্ককে সময় দাও।" },
  7: { result: "তুমি স্বাধীনচেতা, নিজের মতামতকে বেশি গুরুত্ব দাও।" }
};

function startLoveQuiz() {
  document.getElementById("loveQuiz").classList.remove("hidden");
  loadLoveQuestion(1);
}

function loadLoveQuestion(id) {
  let q = loveQuestions[id];
  const questionEl = document.getElementById("lQuestion");
  const optionsEl = document.getElementById("lOptions");

  if (q.result) {
    questionEl.innerText = q.result;
    optionsEl.innerHTML = "";
    return;
  }

  questionEl.innerText = q.q;
  optionsEl.innerHTML = "";

  q.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.classList.add("loveOption");
    btn.onclick = () => {
      let nextId = q.branch[opt];
      loadLoveQuestion(nextId);
    };
    optionsEl.appendChild(btn);
  });
}
