import { test, expect } from '../../fixtures/baseFixtures';
import { Endpoints } from '../../api/EndPoints';
import { ApiAssertions } from '../../api/ApiAssertions';
import {SearchProductRequest} from '../../models/SearchProductRequest'

test("Search For Product", async({api})=>{
    const requestBody: SearchProductRequest={search_product:"Blue Top"};
    const response = await api.post(Endpoints.SEARCH_PRODUCT,requestBody);
    const body = await ApiAssertions.verifySuccess(response)
})