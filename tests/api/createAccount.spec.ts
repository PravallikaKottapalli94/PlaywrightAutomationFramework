import { test, expect } from '../../fixtures/baseFixtures';
import { Endpoints } from '../../api/EndPoints';
import {TestDataFactory} from '../../utils/TestData'
import { ApiAssertions } from '../../api/ApiAssertions';
import {CreateAccountRequest} from '../../models/CreateAccountRequest'

test("Create Account Request",async({api})=>{
    const requestBody : CreateAccountRequest = TestDataFactory.createUser();
    const response = await api.post(Endpoints.CREATE_ACCOUNT,requestBody)
    const body = await ApiAssertions.verifySuccess(response)
})