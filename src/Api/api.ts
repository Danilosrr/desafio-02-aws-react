import axios from "axios";

const config = {
  baseURL: "http://gateway.marvel.com",
  params: {
    apikey: "6adca287f0df41054bfaa1443ee73ba4",
    ts: 1,
    hash: "2c5ac3b481ace56037ff031200bc862c",
  },
};

const api = axios.create(config);

export async function request(url: string) {
  try {
    const { data } = await api.get(url);
    return data;
  } catch (error) {
    throw new Error("api request failed!");
  }
}
