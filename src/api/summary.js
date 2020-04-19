const BASE_URL = 'https://api.covid19api.com';

export const fetchSummary = async () => {
    const res = await fetch(`${BASE_URL}/summary`);
    const data = await res.json();

    if (res.ok) {
        return data;
    } else {
        throw new Error(data);
    }
};
