import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { ContentType } from "../utils/content-type";
import { StatusCode } from "../utils/http-status-code"; // Certifique-se de importar seus status code se necessário

const DEFAULT_HEADERS = { "Content-Type": ContentType.JSON };

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> => {
  try {
    const content: PodcastTransferModel = await serviceListEpisodes();

    res.writeHead(content.statusCode, DEFAULT_HEADERS);
    res.end(JSON.stringify(content.body));
  } catch (error) {
    // Bloco de segurança caso o service falhe inesperadamente
    res.writeHead(500, DEFAULT_HEADERS);
    res.end(JSON.stringify({ error: "Erro interno no servidor ao listar episódios." }));
  }
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> => {
  try {
    // Garante que req.url não seja undefined
    const url = req.url || "";
    const content: PodcastTransferModel = await serviceFilterEpisodes(url);

    res.writeHead(content.statusCode, DEFAULT_HEADERS);
    res.end(JSON.stringify(content.body));
  } catch (error) {
    // Bloco de segurança caso o filtro quebre
    res.writeHead(500, DEFAULT_HEADERS);
    res.end(JSON.stringify({ error: "Erro interno no servidor ao filtrar episódios." }));
  }
};