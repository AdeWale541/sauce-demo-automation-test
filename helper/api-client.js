export class ApiClient{
    constructor(){

    }



    async getAdminApprovalList() {
        // let response = await fetch("", {

        // })
        
        let response = await fetch("https://simple-books-api.click/books", {
            "body": null,
            "method": "GET"
        });

        let responseJSON= await response.json()

        return responseJSON
    }


}