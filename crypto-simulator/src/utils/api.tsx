
const CRYPTO_SIMULATOR_URL = process.env.CRYPTO_SIMULATOR_URL

export const _get = async (endpoint: string): Promise<any> => {
    try {
        const response = await fetch(`${CRYPTO_SIMULATOR_URL}${endpoint}`)
        return response.json()
    } catch(e) {
        throw new Error(`Error is occurs: ${e}`)
    }
}

export const _post = async (endpoint: string, requestBody: object): Promise<any> => {
    try {
        const response = await fetch(`${CRYPTO_SIMULATOR_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        })
        return response.json()
    } catch(e) {
        throw new Error(`Error is occurs: ${e}`)
    }
}