import { expect, APIResponse } from '@playwright/test';

export class ApiAssertions {

    static async verifySuccess(response: APIResponse) {

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.responseCode).toBeGreaterThanOrEqual(200);

        expect(body.responseCode).toBeLessThan(300);

        return body;
    }
}
