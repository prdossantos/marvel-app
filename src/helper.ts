

export const clearStoreItem = (key: any, store: any = localStorage) => store.removeItem(key);

export const getStorageItem = <T>(key: string = "", defaultValue: any = null, store: any = localStorage): T => {
    try {
        if (store.getItem(key)) {
            const _defaultValue = JSON.parse(atob(store.getItem(key)));
            if (_defaultValue !== null) {
                defaultValue = _defaultValue;
            }
        }
    } catch (e) { 
 console.error(key, 'error', e);
        clearStoreItem(key);
    }
    return defaultValue;
};

export const setStorageItem = (
    key: any,
    payload: any,
    store: any = localStorage
) => store.setItem(key, btoa(JSON.stringify(payload)));

export const clearStorege = (store: any = localStorage) => store.clear();
