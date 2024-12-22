export const POST = async (URL_BACKEND, params) => {
    try {
        const response = await fetch(URL_BACKEND, {
            method: 'POST',
            ...params
        })
        return response.json();
    }
    catch (error) {
    throw error
    }
}


const getUnAuthenticatedHeaders = () => {
const unauthenticatedHeaders = new Headers();
unauthenticatedHeaders.set('Content-Type', 'application/json');
unauthenticatedHeaders.set("x-api-key","cacda5fe-c409-441a-bbbf-1788e204ddc9");
return unauthenticatedHeaders
}


const getAuthenticatedHeaders = () => {
const authenticatedHeaders = new Headers();
authenticatedHeaders.set('Content-Type', 'application/json');
authenticatedHeaders.set("x-api-key","cacda5fe-c409-441a-bbbf-1788e204ddc9");
authenticatedHeaders.set("Authorization", ` ${sessionStorage.getItem("access_token")}`);

return authenticatedHeaders
}

export {getUnAuthenticatedHeaders, getAuthenticatedHeaders }