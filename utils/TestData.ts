import { CreateAccountRequest } from "../models/CreateAccountRequest";
import { SearchProductRequest } from "../models/SearchProductRequest";

export class TestDataFactory {

    static createUser(email?: string): CreateAccountRequest {

        return {
            name: "Pravallika",
            email: email ?? `playwright${Date.now()}@gmail.com`,
            password: "Test@123",
            title: "Mrs",
            birth_date: "17",
            birth_month: "August",
            birth_year: "1994",
            firstname: "Pravallika",
            lastname: "K",
            company: "OpenAI",
            address1: "Hyderabad",
            address2: "India",
            country: "India",
            zipcode: "500081",
            state: "Telangana",
            city: "Hyderabad",
            mobile_number: "9876543210"
        };
    }

    static searchProduct(productName: string): SearchProductRequest {

        return {
            search_product: productName
        };
    }
}