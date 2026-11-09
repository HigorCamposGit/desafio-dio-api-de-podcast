import fs from "fs/promises"; // Usando a versão de promessas nativa do Node
import path from "path";
import { PodcastModel } from "../models/podcast-model";

// Caminho absoluto para o arquivo JSON de podcasts
const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (
  podcastName?: string
): Promise<PodcastModel[]> => {
  try {
    // Lê o arquivo de forma assíncrona e não bloqueante
    const rawData = await fs.readFile(pathData, "utf-8");
    let jsonFile: PodcastModel[] = JSON.parse(rawData);

    // Se um nome de podcast foi passado, filtra a lista
    if (podcastName) {
      jsonFile = jsonFile.filter(
        (podcast) => podcast.podcastName.toLowerCase() === podcastName.toLowerCase()
      );
    }

    return jsonFile;
  } catch (error) {
    // Se o arquivo não existir ou houver erro de leitura/parse, retorna uma lista vazia com segurança
    console.error("Erro ao ler o repositório de podcasts:", error);
    return [];
  }
};