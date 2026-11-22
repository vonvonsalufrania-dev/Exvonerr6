// VON PUBLISH SERVICE

function connectRoblox() {
    const status = document.getElementById("connectionStatus");

    status.textContent =
        "VON Demo: Secure Roblox authorization required.";
}

function startCreate() {
    const placeId =
        document.getElementById("placeId").value.trim();

    const amount =
        Number(document.getElementById("amount").value);

    const result =
        document.getElementById("result");

    const created =
        document.getElementById("created");

    const failed =
        document.getElementById("failed");

    if (placeId === "") {
        result.textContent = "Enter Template Place ID.";
        return;
    }

    if (!Number.isInteger(amount) || amount < 1 || amount > 100) {
        result.textContent = "Amount must be between 1 and 100.";
        return;
    }

    created.textContent = "0";
    failed.textContent = "0";
    result.textContent = "VON Demo Starting...";

    let count = 0;

    const timer = setInterval(() => {
        count++;

        created.textContent = count;

        result.textContent =
            "VON Demo Progress: " + count + "/" + amount;

        if (count >= amount) {
            clearInterval(timer);

            result.textContent =
                "VON Demo Complete! No Roblox places were created.";
        }
    }, 500);
}
