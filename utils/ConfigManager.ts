import dotenv from 'dotenv';
import path from 'path';

export class ConfigManager {

    static loadEnvironment(): void {

        const env = process.env.ENV || 'dev';

        const envPath = path.resolve(
            process.cwd(),
            `config/env/${env}.env`
        );

        dotenv.config({
            path: envPath
        });

    }

    static get baseURL(): string {
        return process.env.BASE_URL || '';
    }

    static get browser(): string {
        return process.env.BROWSER || 'chromium';
    }

    static get headless(): boolean {
        return process.env.HEADLESS === 'true';
    }
}