import dotenv from "dotenv";

dotenv.config();

class ServerConfig {
  private static _getEnvVariable(name: string) {
    const envVariable = process.env[name];
    if (!envVariable) {
      throw new Error(`env variable "${name}" not found`);
    }

    return envVariable;
  }

  public readonly host: string;
  public readonly port: string;
  public readonly protocol: string;
  public readonly tmdbAPI: string;

  constructor() {
    this.host = ServerConfig._getEnvVariable("HOST");
    this.port = ServerConfig._getEnvVariable("PORT");
    this.protocol = ServerConfig._getEnvVariable("PROTOCOL");
    this.tmdbAPI = ServerConfig._getEnvVariable("TMDB_API");
  }

  get url() {
    return `${this.protocol}://${this.host}:${this.port}`;
  }
}

const serverConfig = new ServerConfig();

export default serverConfig;
