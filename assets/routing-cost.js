const inputs = document.querySelector("#routing-inputs");
const result = document.querySelector("#cost-result");
const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const percent = new Intl.NumberFormat("en-US", { style: "percent", maximumFractionDigits: 2 });

function updateEstimate() {
    const valid = inputs.checkValidity();
    result.hidden = !valid;
    document.querySelector("#cost-error").hidden = valid;
    if (!valid) return;

    const { requests, hosted, local, share } = inputs.elements;
    const hostedTotal = requests.valueAsNumber / 1000 * hosted.valueAsNumber;
    const fixedCost = local.valueAsNumber;
    const mixedTotal = fixedCost + hostedTotal * (1 - share.valueAsNumber / 100);
    document.querySelector("#hosted-total").textContent = money.format(hostedTotal);
    document.querySelector("#mixed-total").textContent = money.format(mixedTotal);
    document.querySelector("#local-total").textContent = money.format(fixedCost);

    let explanation;
    if (fixedCost === 0) {
        explanation = hostedTotal === 0
            ? "All three estimates are zero for this workload."
            : "Routing any paid requests locally reduces hosted spend. The entered fixed local cost is zero.";
    } else if (hostedTotal < fixedCost) {
        explanation = "Even handling every request locally would save less in hosted spend than the fixed local cost.";
    } else if (hostedTotal === fixedCost) {
        explanation = "Handling every request locally just covers the fixed cost. Any hosted traffic makes mixed routing more expensive.";
    } else {
        explanation = "Break-even local share: " + percent.format(fixedCost / hostedTotal)
            + ". Above that share, mixed routing costs less than hosted-only inference.";
    }
    document.querySelector("#cost-explanation").textContent = explanation;
}

inputs.addEventListener("submit", event => event.preventDefault());
inputs.addEventListener("input", updateEstimate);
updateEstimate();
