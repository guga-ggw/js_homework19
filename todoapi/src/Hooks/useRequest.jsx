import React from "react";

const useRequest = ({ link, method }) => {
    const [loading, setloading] = React.useState(false);

    const sendrequest = async (body, custom) => {
        setloading(true);
        const res = await fetch(link || custom, {
            method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer vfTE3FXnskohoODqvF6xVACtWUaQ1J5JtlU8Y3Qgt2c7MolSgQ"
            },
            body: !!body && method !== 'GET' ? JSON.stringify(body) : undefined
        });

        const data = await res.json();
        setloading(false);
        return data;
    }

    return { loading, sendrequest };
}

export default useRequest;