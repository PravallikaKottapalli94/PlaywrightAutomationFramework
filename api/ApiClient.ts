import { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiClient {

    constructor(private request: APIRequestContext) {}

    async get(endpoint: string) {
        return await this.request.get(endpoint);
    }

    async post(endpoint: string, data?: any) {
        return await this.request.post(endpoint, {
            form: data,
        });
    }

    async put(endpoint: string, data?: any) {
        return await this.request.put(endpoint, {
            form: data,
        });
    }

    async delete(endpoint: string, data?: any) {
        return await this.request.delete(endpoint, {
            form: data,
        });
    }
}