const line = "send(previousValue, nextValue)";
const open = line.indexOf("(");
const close = line.lastIndexOf(")");
const first = line.indexOf("previousValue");
const second = line.indexOf("nextValue");
const comma = line.indexOf(",");
const tokens = Array.from(line.matchAll(/\w+|[^\w\s]+/g));
const starts = tokens.map(token => token.index);
const ends = tokens.map(token => token.index + token[0].length - 1);
const drills = {
    word: { start: comma, target: second, task: "From the comma, land on the n in nextValue." },
    end: { start: first, target: comma - 1, task: "From the p in previousValue, land on the last e of the same word." },
    pair: { start: open, target: close, task: "Move from the opening parenthesis to its partner." },
    inside: { start: second, task: "Select everything between the parentheses, leaving the parentheses outside." }
};

const chooser = document.querySelector("#drill");
const buffer = document.querySelector("#buffer");
const feedback = document.querySelector("#command-result");
const keys = document.querySelector(".command-keys");
let cursor, selected;

function render(message) {
    const start = selected ? open + 1 : cursor;
    const end = selected ? close : cursor + 1;
    const mark = document.createElement("mark");
    mark.textContent = line.slice(start, end);
    buffer.replaceChildren(line.slice(0, start), mark, line.slice(end));
    const position = selected ? "Visual mode. Selected “" + mark.textContent + "”."
        : "Normal mode. Cursor on “" + line[cursor] + "” in column " + (cursor + 1) + ".";
    feedback.textContent = message + " " + position;
    for (const key of keys.querySelectorAll("button")) {
        key.disabled = selected && key.textContent !== "Esc";
    }
}

function resetTask() {
    const drill = drills[chooser.value];
    cursor = drill.start;
    selected = false;
    document.querySelector("#instruction").textContent = drill.task;
    render("Ready.");
}

function runCommand(command) {
    let message;
    switch (command) {
        case "w":
            cursor = starts.find(start => start > cursor) ?? line.length - 1;
            message = "Moved toward the next word start.";
            break;
        case "b":
            cursor = starts.filter(start => start < cursor).pop() ?? 0;
            message = "Moved toward the previous word start.";
            break;
        case "e":
            cursor = ends.find(end => end > cursor) ?? line.length - 1;
            message = "Moved toward a word end.";
            break;
        case "%":
            cursor = cursor <= open ? close : open;
            message = "Jumped to the partner of the parenthesis at or after the cursor.";
            break;
        case "vi(":
            if (cursor < open) {
                message = "Move into the parentheses to try this selection in the practice buffer.";
                break;
            }
            cursor = close - 1;
            selected = true;
            message = "Selected the inner text. Press Esc to resume movement.";
            break;
        case "Esc":
            selected = false;
            message = "Ready for a movement.";
            break;
    }
    const reached = chooser.value === "inside" ? selected : !selected && cursor === drills[chooser.value].target;
    render(message + (reached ? " Task complete." : ""));
}

for (const key of keys.querySelectorAll("button")) {
    key.addEventListener("click", () => runCommand(key.textContent));
}
chooser.addEventListener("change", resetTask);
document.querySelector("#reset-drill").addEventListener("click", resetTask);
resetTask();
document.querySelector("#vim-lab").hidden = false;
