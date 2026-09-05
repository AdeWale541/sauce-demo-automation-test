import {test as baseTest} from "@playwright/test";
import { ApiClient } from "../helper/api-client";


export const test= baseTest.extend({
    apiClient: async ({},use)=>{
        await use(new ApiClient())
    }
})