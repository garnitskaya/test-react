const serviceData = () => {
    const apiBase =
        "https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e";

    const getResource = async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
        const res = await fetch(url, { method, body, headers });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status:${res.status}`);
        }
        return await res.json();
    };

    const getAllData = async () => {
        const res = await getResource(apiBase);
        return await res;
    };

    const postData = async (data) => {
        const res = await getResource("http://localhost:3001/data", 'POST', JSON.stringify(data));
        return await res;
    };

    return { getAllData, postData };
};

export default serviceData;
