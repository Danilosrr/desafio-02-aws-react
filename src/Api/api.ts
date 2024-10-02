import axios from "axios";

const config = {
  baseURL: "http://gateway.marvel.com",
  params: {
    apikey: "01e97ff8c99fed1b6901f5a4faac2538",
    ts: 1,
    hash: "b9f8974baf26501dcac4490827fc5f29",
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
