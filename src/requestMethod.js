import axios from "axios";

const BASE_URL = "http://localhost:3000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDA0OWU1MDM2ODc2NmZiYWY4YTczOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjMwNzUyNiwiZXhwIjoxNjgyNTY2NzI2fQ.PazsisnfQpG5Xwj8OkV67ShCqlkaERU6RdFOHiGxNc4"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});

