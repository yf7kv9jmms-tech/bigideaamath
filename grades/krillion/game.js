(() => {
    const prompts = window.KRILLION_PROMPTS;
    const tiers = { 4: "Plankton", 8: "Too clever", 16: "Schooler", 32: "Rare", 64: "Deep cut", 100: "One in a krillion" };
    const totalRounds = 7;
    const roundSeconds = 25;
    const byId = (id) => document.getElementById(id);
    const panel = byId("divePanel");
    const introState = byId("introState");
    const playState = byId("playState");
    const endState = byId("endState");
    const statusRow = byId("statusRow");
    const answerInput = byId("answerInput");
    const timerDisplay = byId("timer");
    const feedback = byId("feedback");
    const rounds = [];
    let roundIndex = 0;
    let score = 0;
    let timeLeft = roundSeconds;
    let timerId = null;
    let transitionId = null;
    let acceptingAnswer = false;
    let results = [];

    function shuffle(items) {
        const shuffled = [...items];
        for (let index = shuffled.length - 1; index > 0; index -= 1) {
            const swapIndex = Math.floor(Math.random() * (index + 1));
            [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
        }
        return shuffled;
    }

    function normalize(answer) {
        return answer.trim().toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "").replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, " ");
    }

    function startDive() {
        clearInterval(timerId);
        clearTimeout(transitionId);
        rounds.splice(0, rounds.length, ...shuffle(prompts).slice(0, totalRounds));
        roundIndex = 0;
        score = 0;
        results = [];
        panel.classList.remove("intro");
        introState.classList.add("hidden");
        endState.classList.add("hidden");
        playState.classList.remove("hidden");
        statusRow.classList.remove("hidden");
        updateStats();
        showRound();
    }

    function showRound() {
        if (roundIndex >= totalRounds) {
            finishDive();
            return;
        }
        const prompt = rounds[roundIndex];
        byId("roundCount").textContent = `${String(roundIndex + 1).padStart(2, "0")} / 07`;
        byId("promptCategory").textContent = prompt.category;
        byId("promptText").textContent = prompt.text;
        byId("progress").replaceChildren(...rounds.map((_, index) => {
            const segment = document.createElement("span");
            segment.className = index < roundIndex ? "done" : index === roundIndex ? "current" : "";
            return segment;
        }));
        feedback.textContent = "";
        answerInput.value = "";
        answerInput.disabled = false;
        byId("submitButton").disabled = false;
        acceptingAnswer = true;
        timeLeft = roundSeconds;
        updateTimer();
        clearInterval(timerId);
        timerId = setInterval(() => {
            timeLeft -= 1;
            updateTimer();
            if (timeLeft <= 0) resolveAnswer("", true);
        }, 1000);
        answerInput.focus({ preventScroll: true });
    }

    function updateTimer() {
        timerDisplay.textContent = String(timeLeft).padStart(2, "0");
        timerDisplay.classList.toggle("urgent", timeLeft <= 5);
    }

    function resolveAnswer(rawAnswer, timedOut = false) {
        if (!acceptingAnswer) return;
        acceptingAnswer = false;
        clearInterval(timerId);
        answerInput.disabled = true;
        byId("submitButton").disabled = true;
        const prompt = rounds[roundIndex];
        const match = prompt.answers[normalize(rawAnswer)];
        const result = match
            ? { answer: match[0], points: match[1], tier: tiers[match[1]], prompt: prompt.category }
            : { answer: rawAnswer.trim() || "No answer", points: 0, tier: timedOut ? "Time expired" : "Not in the answer deck", prompt: prompt.category };
        results.push(result);
        score += result.points;

        const title = document.createElement("strong");
        const detail = document.createTextNode(result.points
            ? `${result.answer} carries you ${result.points * 10} metres deeper.`
            : timedOut ? "The current has closed this prompt." : "That answer isn't in the deck. The dive moves on.");
        title.textContent = result.points
            ? `${result.tier} · +${result.points} points`
            : timedOut ? "Air's up · 0 points" : "No score · 0 points";
        feedback.replaceChildren(title, detail);
        updateStats();
        transitionId = window.setTimeout(() => {
            roundIndex += 1;
            showRound();
        }, 1600);
    }

    function updateStats() {
        const depth = score * 10;
        byId("depthNumber").textContent = depth.toLocaleString();
        byId("scoreLabel").textContent = `· ${score} pts`;
        byId("depthMarker").style.top = `${Math.min(depth / 7000, 1) * 100}%`;
        const entries = results.slice(-4).reverse();
        const listItems = entries.map((result) => {
            const item = document.createElement("li");
            const answer = document.createElement("span");
            const points = document.createElement("span");
            answer.textContent = result.answer;
            points.textContent = `+${result.points}`;
            item.append(answer, points);
            return item;
        });
        if (listItems.length === 0) {
            const empty = document.createElement("li");
            empty.className = "log-empty";
            empty.textContent = "Your answers will surface here.";
            listItems.push(empty);
        }
        byId("logList").replaceChildren(...listItems);
    }

    function finishDive() {
        clearInterval(timerId);
        playState.classList.add("hidden");
        statusRow.classList.add("hidden");
        endState.classList.remove("hidden");
        const depth = score * 10;
        byId("endTitle").textContent = depth >= 7000 ? "You reached the trench floor." : depth >= 3500 ? "You made a deep descent." : "The deep is still out there.";
        byId("finalScore").replaceChildren(document.createTextNode(String(score)));
        const scoreDetail = document.createElement("span");
        scoreDetail.textContent = `points · ${depth.toLocaleString()} metres down`;
        byId("finalScore").append(scoreDetail);
        byId("summaryList").replaceChildren(...results.map((result) => {
            const item = document.createElement("li");
            const description = document.createElement("span");
            const points = document.createElement("strong");
            description.textContent = `${result.prompt} · ${result.answer}`;
            points.textContent = result.points ? `+${result.points} ${result.tier}` : "0 points";
            item.append(description, points);
            return item;
        }));
    }

    byId("startButton").addEventListener("click", startDive);
    byId("replayButton").addEventListener("click", startDive);
    byId("answerForm").addEventListener("submit", (event) => {
        event.preventDefault();
        if (answerInput.value.trim()) resolveAnswer(answerInput.value);
    });
})();