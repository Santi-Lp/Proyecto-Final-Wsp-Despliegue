export const POST = async (URL_API, params) => {
    try {
        const response = await fetch(URL_API, {
            method: 'POST',
            ...params
        })
        return response.json();
    }
    catch (error) {
    throw error
    }
}

const unauthenticatedHeaders = new Headers();
unauthenticatedHeaders.set('Content-Type', 'application/json');
unauthenticatedHeaders.set("x-api-key","cacda5fe-c409-441a-bbbf-1788e204ddc");


const authenticatedHeaders = new Headers();
authenticatedHeaders.set('Content-Type', 'application/json');
authenticatedHeaders.set("x-api-key","cacda5fe-c409-441a-bbbf-1788e204ddc");
authenticatedHeaders.set("Authorization","Bearer",sessionStorage.getItem("access_token"));

export {unauthenticatedHeaders, authenticatedHeaders};