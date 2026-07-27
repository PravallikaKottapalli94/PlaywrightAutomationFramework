import { Endpoints } from '../../api/EndPoints';
import {ApiAssertions} from '../../api/ApiAssertions' 
import { test, expect } from '../../fixtures/baseFixtures';

test('Get Products', async ({ api  }) => {
    const response = await api.get(Endpoints.PRODUCTS);
    const body = await ApiAssertions.verifySuccess(response)
    console.log(body)
    expect(body.products.length).toBeGreaterThan(1);
    expect(body.products[0]).toHaveProperty('id');
    expect(body.products[0]).toHaveProperty('name');
    expect(body.products[0]).toHaveProperty('price');
    expect(body.products[0]).toHaveProperty('brand');
});