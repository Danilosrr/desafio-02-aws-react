import axios from "axios";

const config = {
  baseURL: "http://gateway.marvel.com",
  params: {
    apikey: "01e97ff8c99fed1b6901f5a4faac2538",
    ts: 1,
    hash: "7e4cc8da7d877a04bd3e1ef707b20f55",
  },
};

const api = axios.create(config);

export async function request(url: string) {
  try {
    const { data } = await api.get(url);
    return data;
  } catch (error) {
    console.log(error)
    throw new Error("api request failed!");
  }
}
