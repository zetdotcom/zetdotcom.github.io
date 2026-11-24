const lab = document.querySelector("#race-lab");
const order = document.querySelector("#response-order");
const guard = document.querySelector("#guard");
const advance = document.querySelector("#advance");
const trace = document.querySelector("#trace");
const stateLine = document.querySelector("#race-state");
const query = { A: "oak", B: "elm" };
let step, active, displayed, loading;

function resetRun() {
    step = 0;
    active = null;
    displayed = null;
    loading = false;
    trace.replaceChildren();
    stateLine.textContent = "Ready. No search has started.";
    advance.disabled = false;
}

function nextEvent() {
    let event;
    if (step < 2) {
        active = step === 0 ? "A" : "B";
        loading = true;
        event = active + " started searching for " + query[active] + ".";
    } else {
        const completed = order.value[step - 2];
        if (guard.checked && completed !== active) {
            event = completed + " returned and was ignored because " + active + " is active.";
        } else {
            displayed = completed;
            loading = false;
            event = completed + " returned and committed " + query[completed] + " to the screen.";
        }
    }
    step += 1;
    const state = "Input: " + query[active] + " · Results: " + (query[displayed] || "none yet")
        + " · Spinner: " + (loading ? "on" : "off");
    const row = document.createElement("li");
    row.textContent = event;
    const snapshot = document.createElement("small");
    snapshot.textContent = state;
    row.append(snapshot);
    trace.append(row);

    const finished = step === 4;
    advance.disabled = finished;
    const outcome = displayed === active ? "The final results match the input." : "The final results belong to the older request.";
    stateLine.textContent = "Event " + step + " of 4. " + event + " " + state + (finished ? ". " + outcome : ".");
}

advance.addEventListener("click", nextEvent);
document.querySelector("#restart").addEventListener("click", resetRun);
order.addEventListener("change", resetRun);
guard.addEventListener("change", resetRun);
resetRun();
lab.hidden = false;
