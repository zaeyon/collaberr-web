export const getCookie = (key: string) => {
    let result = null;
    if(typeof window === 'undefined') return null;
    else {
        let cookie = document?.cookie.split(';');
        cookie.some(function(item) {
            item = item.replace(' ', '');
    
            const pair = item.split('=');
    
            if(pair[0] === key) {
                result = pair[1];
                return true; 
            }
        })
        return result;
    }
}

export const deleteCookie = (key: string) => {
    if(typeof window === 'undefined') return null;
    else {
        document.cookie = key + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
    }
}