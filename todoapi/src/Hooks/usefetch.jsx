import { useEffect, useState } from "react"

const useFetch = ({link, method}) => {
    const [data, setdata] = useState(null)
    const [loading, setloading] = useState(null)

    useEffect(() => {
        setloading(true);
        fetch(link, {
            method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer vfTE3FXnskohoODqvF6xVACtWUaQ1J5JtlU8Y3Qgt2c7MolSgQ`
            }
        })
            .then(res => {
                if (res.ok === true) return res.json();
            })
            .then((res) => setdata(res))
            .catch(err => console.log(err))
            .finally(() => setloading(false));
    
        return () => {
            setdata(null);
            setloading(null);
        };
    }, [link, method]);

    const resendrequest = () => {

            setloading(true);
            fetch(link, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer vfTE3FXnskohoODqvF6xVACtWUaQ1J5JtlU8Y3Qgt2c7MolSgQ`
                }
            })
                .then(res => {
                    if (res.ok === true) return res.json();
                })
                .then((res) => setdata(res))
                .catch(err => console.log(err))
                .finally(() => setloading(false));
        
            return () => {
                setdata(null);
                setloading(null);
            };
      
    }


    return {loading, data, resendrequest}

}

export default useFetch