import useRequest from "../Hooks/useRequest";
import UserForm from '../Components/Form'
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate()
    const { loading, sendrequest } = useRequest({ link: `/api/v1/todos` , method: "POST" });

    const submit = (task) => {
        sendrequest([task])
        .then(navigate('/'))
        .catch(err => console.log(err));
    };

    return (
        <div>
            <UserForm press={submit} />
        </div>
    );
};

export default Create;