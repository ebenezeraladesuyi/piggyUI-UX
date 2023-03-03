import axios from "axios";
import userData from "../AllInterfaces"



const localUrl = "http://localhost:6400";

export const createUser = async () => {
    await axios
        .post(`${localUrl}/api/`)
        .then((res) => res.data)
}