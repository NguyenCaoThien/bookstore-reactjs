import axios, { AxiosResponse } from "axios";

const responseBody = (data: AxiosResponse) => data.data;
const serviceRequest = {
	get: (url: string, params?: URLSearchParams) => axios.get(url, { params }).then(responseBody),
	post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
	delete: (url: string) => axios.delete(url).then(responseBody)
}

export default serviceRequest;