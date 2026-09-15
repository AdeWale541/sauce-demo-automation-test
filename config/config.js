
import dotenv from 'dotenv'
dotenv.config()

let environment= process.env.NODE_ENV


let baseUrl;

switch (environment) {
    case 'development':
        baseUrl='https://saucedemo.com'
        break;
    case 'staging':
        baseUrl='https://saucedemo.com/staging'
        break;
    case 'production':
        baseUrl='https://saucelabs.com/'
        break;
    default:
        throw new Error("Invalid Environment Selected")
        break;
}

const config = {
    ENVIRONMENT: process.env.NODE_ENV,
    BASE_URL: baseUrl,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD ?? ''
}

export default config;