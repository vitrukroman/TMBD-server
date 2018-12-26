"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class ServerConfig {
    static _getEnvVariable(name) {
        const envVariable = process.env[name];
        if (!envVariable) {
            throw new Error(`env variable "${name}" not found`);
        }
        return envVariable;
    }
    constructor() {
        this.host = ServerConfig._getEnvVariable("HOST");
        this.port = ServerConfig._getEnvVariable("PORT");
        this.protocol = ServerConfig._getEnvVariable("PROTOCOL");
        this.tmdbAPIUrl = ServerConfig._getEnvVariable("TMDB_API_URL");
        this.tmdbAPIKey = ServerConfig._getEnvVariable("TMDB_API_KEY");
    }
    get url() {
        return `${this.protocol}://${this.host}:${this.port}`;
    }
}
const serverConfig = new ServerConfig();
exports.default = serverConfig;
