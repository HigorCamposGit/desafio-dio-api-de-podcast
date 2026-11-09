import * as http from "http";

import {
  getListEpisodes,
  getFilterEpisodes,
} from "./controllers/podcasts-controller";

import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";
import { welcome } from "./controllers/welcome-controller";


export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const baseUrl = request.url?.split("?")[0];

  if (request.method === HttpMethod.GET && baseUrl === Routes.ROOT) {
        await welcome(request, response);
  }

  if (request.method === HttpMethod.GET && baseUrl === Routes.FEED) {
    await getListEpisodes(request, response);
  }

  if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODES_CATALOG) {
    await getFilterEpisodes(request, response);
  }
};