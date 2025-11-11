const baseUrl = "https://api.rscibelli.com";

async function runningSummary() {
    const response = await fetch(baseUrl + "/api/todays-runs-summary");
    if (!response.ok) {
        console.log("Error calling endpoint:", response.statusText);
        throw new Error("Failed to fetch running summary with error: " + response.statusText);
    }
    const data = await response.json();
    return data;
}

export { runningSummary };