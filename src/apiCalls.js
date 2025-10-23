const ENDPOINT = "localhost:3000";

async function runningSummary() {
    const response = await fetch(ENDPOINT + "/api/todays-runs-summary");
    if (!response.ok) {
        console.log("Error calling endpoint:", response.statusText);
    }
    const data = await response.text();

    console.log(data);
    return data;
}

export { runningSummary };