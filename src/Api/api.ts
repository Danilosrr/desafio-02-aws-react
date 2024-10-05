import axios from "axios";

const config = {
  baseURL: "http://gateway.marvel.com",
  params: {
    apikey: process.env.REACT_APP_API_KEY,
    ts: 1,
    hash: process.env.REACT_APP_API_HASH,
  },
};

const api = axios.create(config);

export async function request(url: string) {
  try {
    const { data } = await api.get(url);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("api request failed!");
  }
}

