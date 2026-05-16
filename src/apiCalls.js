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

async function getTeeTimes(courseName, date) {
    if (!courseName) {
        throw new Error('Missing required parameter: courseName');
    }

    const queryString = new URLSearchParams({ courseName, date }).toString();
    const response = await fetch(`${baseUrl}/api/get-tee-times?${queryString}`);

    if (!response.ok) {
        console.log("Error calling endpoint:", response.statusText);
        throw new Error("Failed to fetch tee times with error: " + response.statusText);
    }

    const data = await response.json();
    return data;
}

export { runningSummary, getTeeTimes };