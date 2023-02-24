import axios from "axios";


const Token = localStorage.getItem('Access-token')
console.log(Token)
const instance = axios.create(
    {
        baseURL: "http://localhost:8000/api",
        headers: {
            Authorization: Token,
            'Accept': '*/*',
            'Content-Type': 'application/json; charset=utf-8'
        }
    }
);

instance.interceptors.request.use(
    config => {
        console.log("sending request")
        console.log("Token", Token)

        return config
    },
    error => {
        console.log(error)
        // console.log(error)
        Promise.reject(error)
    }
)
instance.interceptors.response.use(
    function (response) {
        console.log(Token)

        switch (response.data.code) {
            case 200:
                console.log("Data load Sucessfull")
                break;
            case 401:
                console.log("Unaurthorized Access")
                break;
            case 400:
                alert("Bad request to server")

                break;
            case 409:
                console.log("To many request to server")

                break;

            default:
                console.log("Error 404: Page not found")
                break;
        }

        return response;
    }, function (error) {
        return Promise.reject(error);
    }
);
export default instance;