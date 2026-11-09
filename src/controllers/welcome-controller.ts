import { IncomingMessage, ServerResponse } from "http";
import { ContentType } from "../utils/content-type";

const DEFAULT_HEADERS = { "Content-Type": ContentType.JSON };

// Contrato
interface Welcome {
  statusCode: number;
  body: object;
}

export const welcome = async (
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> => {
  try {
    const content: Welcome = { 
      statusCode: 200, 
      body: { message: "Gerenciador de Podcasts - API NodeJS Com Typescript e HTTP Module" } 
    };

    res.writeHead(content.statusCode, DEFAULT_HEADERS);
    res.end(JSON.stringify(content.body));
  } catch (error) {
    res.writeHead(500, DEFAULT_HEADERS);
    res.end(JSON.stringify({ error: "Erro interno no servidor." }));
  }
};