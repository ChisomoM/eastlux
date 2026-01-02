(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Using CryptoJS for encryption/decryption
__turbopack_context__.s([
    "Storage",
    ()=>Storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$crypto$2d$js$40$4$2e$2$2e$0$2f$node_modules$2f$crypto$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/crypto-js@4.2.0/node_modules/crypto-js/index.js [app-client] (ecmascript)");
;
const Storage = {
    // Encryption secret key - in production, this should be stored securely
    ___: "ff7daf99552e8f884ae28079ba098ef62101bab59d68b160e15e3dde8a56ae9963b8f5618cbf42dce3d4e2b4c999a5c980b46c340be0cc28376e6a6d2462369a",
    // Helper method to encrypt data
    encrypt (data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$crypto$2d$js$40$4$2e$2$2e$0$2f$node_modules$2f$crypto$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].AES.encrypt(data, this.___).toString();
    // return data;
    },
    // Helper method to decrypt data
    decrypt (encryptedData) {
        const bytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$crypto$2d$js$40$4$2e$2$2e$0$2f$node_modules$2f$crypto$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].AES.decrypt(encryptedData, this.___);
        return bytes.toString(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$crypto$2d$js$40$4$2e$2$2e$0$2f$node_modules$2f$crypto$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enc.Utf8);
    // return encryptedData;
    },
    // Store encrypted string data
    setItem (key, value) {
        try {
            const stringValue = String(value);
            const encryptedValue = this.encrypt(stringValue);
            sessionStorage.setItem(key, encryptedValue);
        } catch (e) {
            throw new Error("Failed to store encrypted data");
        }
    },
    // Store encrypted JSON data
    setJSON (key, value) {
        try {
            const jsonString = JSON.stringify(value);
            const encryptedValue = this.encrypt(jsonString);
            sessionStorage.setItem(key, encryptedValue);
        } catch (e) {
            throw new Error("Failed to store encrypted JSON data");
        }
    },
    // Retrieve and decrypt string data
    getItem (key) {
        try {
            const encryptedValue = sessionStorage.getItem(key);
            if (!encryptedValue) return null;
            return this.decrypt(encryptedValue);
        } catch (e) {
            throw new Error("Failed to retrieve encrypted data");
        }
    },
    // Retrieve and decrypt JSON data
    getJSON (key) {
        try {
            const encryptedValue = sessionStorage.getItem(key);
            if (!encryptedValue) return null;
            const decryptedValue = this.decrypt(encryptedValue);
            return JSON.parse(decryptedValue);
        } catch (e) {
            throw new Error("Failed to retrieve encrypted JSON data");
        }
    },
    // Remove item using encrypted key
    removeItem (key) {
        try {
            const encryptedKey = this.encrypt(key);
            sessionStorage.removeItem(encryptedKey);
        } catch (e) {
            throw new Error("Failed to remove item");
        }
    },
    // Clear all storage
    clear () {
        sessionStorage.clear();
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api/end_points.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API",
    ()=>API,
    "getRoute",
    ()=>getRoute,
    "pipe",
    ()=>pipe
]);
const API = {
    // Auth endpoints
    LOGIN: "auth/login",
    ADMIN_LOGIN: "auth/login",
    REGISTER: "auth/register",
    REFRESH_TOKEN: "auth/refresh",
    // Admin endpoints
    ADMIN_STATS: "admin/stats",
    ADMIN_CONTACTS: "admin/contacts",
    ADMIN_CONTACTS_DETAIL: "admin/contacts/:id",
    ADMIN_APPLICATIONS: "admin/applications",
    ADMIN_APPLICATIONS_DETAIL: "admin/applications/:id",
    // Public endpoints
    CONTACT: "contact",
    RECRUITMENT: "recruitment",
    // Health check
    HEALTH: "health"
};
const getRoute = (val)=>{
    const uri = API[val];
    if (uri === null || uri === undefined) {
        throw new Error("key doesn't exist");
    }
    return uri;
};
const pipe = (pattern, map)=>{
    return pattern.replace(/:([^/]+)/g, (_, key)=>{
        if (key in map) {
            return String(map[key]);
        }
        throw new Error('Key "'.concat(key, '" not found in the map'));
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api/crud.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import { resetLogoutPromptTimer } from "../context/admin";
__turbopack_context__.s([
    "fetchData",
    ()=>fetchData,
    "file",
    ()=>file,
    "list",
    ()=>list,
    "post",
    ()=>post,
    "refreshToken",
    ()=>refreshToken,
    "remove",
    ()=>remove,
    "retrieve",
    ()=>retrieve,
    "toggleProductAvailability",
    ()=>toggleProductAvailability,
    "update",
    ()=>update
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_@babel+core@7.2_89c643592e42d398bf8fd5aacbeada83/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$end_points$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/end_points.tsx [app-client] (ecmascript)");
;
;
// import { getAuthHeader } from "./auth";
const ROUTING_URL = ("TURBOPACK compile-time value", "/api/") || '/api/';
// Storage key for auth tokens (matches AuthContext)
const AUTH_TOKENS_KEY = 'auth_tokens';
// Get access token from localStorage (used by AuthContext)
const getAccessTokenFromStorage = ()=>{
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const tokensJson = localStorage.getItem(AUTH_TOKENS_KEY);
        if (!tokensJson) return null;
        const tokens = JSON.parse(tokensJson);
        return tokens.token || tokens.access_token || null;
    } catch (err) {
        console.error('Failed to get access token from storage:', err);
        return null;
    }
};
// First, let's create a function to refresh the token
const refreshAccessToken = async ()=>{
    try {
        // Get refresh token from cookies
        const refreshToken = document.cookie.replace(/(?:(?:^|.*;\s*)refreshToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
        if (!refreshToken) {
            throw new Error("No refresh token available in cookies");
        }
        // Try to refresh the token
        const baseUrl = ROUTING_URL.endsWith('/') ? ROUTING_URL : "".concat(ROUTING_URL, "/");
        const endpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$end_points$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoute"])("REFRESH_TOKEN");
        const cleanEndpoint = endpoint.startsWith('/') ? endpoint.substring(1) : endpoint;
        const response = await fetch("".concat(baseUrl).concat(cleanEndpoint), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                refresh_token: refreshToken
            })
        });
        if (!response.ok) {
            throw new Error("Failed to refresh token");
        }
        const data = await response.json();
        if ((data === null || data === void 0 ? void 0 : data.access_token) || (data === null || data === void 0 ? void 0 : data.token)) {
            const newToken = data.access_token || data.token;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Storage"].setItem("accessToken", newToken);
            // Also update AuthContext storage if available
            if ("TURBOPACK compile-time truthy", 1) {
                const tokensJson = localStorage.getItem(AUTH_TOKENS_KEY);
                if (tokensJson) {
                    const tokens = JSON.parse(tokensJson);
                    tokens.token = newToken;
                    localStorage.setItem(AUTH_TOKENS_KEY, JSON.stringify(tokens));
                }
            }
            return newToken;
        }
        if (data === null || data === void 0 ? void 0 : data.error) {
            throw new Error(data.error);
        }
        throw new Error("Failed to refresh token");
    } catch (error) {
        console.error("Token refresh error:", error);
        sessionStorage.removeItem("accessToken");
        document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // Only throw, don't redirect here. Let fetchData handle logout.
        throw error;
    }
};
const fetchData = async function(key, method) {
    let params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, body = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, query = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {}, headers = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
    const h = new Headers();
    h.append("Content-Type", "application/json");
    // Read tokens from localStorage (AuthContext storage)
    // Skip for login/register endpoints
    if ("object" !== "undefined" && ![
        "LOGIN",
        "ADMIN_LOGIN",
        "REGISTER"
    ].includes(key)) {
        const accessToken = getAccessTokenFromStorage();
        if (accessToken) {
            h.append("Authorization", "Bearer ".concat(accessToken));
        }
    }
    Object.entries(headers).forEach((param)=>{
        let [key, value] = param;
        h.append(key, String(value));
    });
    const q = new URLSearchParams(query).toString();
    const baseUrl = ROUTING_URL.endsWith('/') ? ROUTING_URL : "".concat(ROUTING_URL, "/");
    const endpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$end_points$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$end_points$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoute"])(key), params);
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.substring(1) : endpoint;
    const url = "".concat(baseUrl).concat(cleanEndpoint).concat(q ? "?".concat(q) : "");
    const options = {
        method,
        headers: h,
        credentials: "include"
    };
    if (body) {
        options.body = JSON.stringify(body);
    }
    let res = await fetch(url, options);
    if (res.ok) {
        if (res.status === 204) {
            return;
        }
        const result = await res.json();
        if (result.status === 0) {
            return result.data;
        } else if (result.success !== undefined) {
            if (result.success) {
                return result.data || result;
            } else {
                throw new Error(result.message || "Operation failed");
            }
        } else if (result.status !== undefined && result.status !== 0) {
            throw new Error(result.message || "Operation failed");
        } else {
            return result.data || result;
        }
    }
    // If the response is 401, try to refresh the token and retry the request once
    // Skip token refresh for login endpoints - let them fail naturally
    if (res.status === 401 && ![
        "LOGIN",
        "ADMIN_LOGIN",
        "REGISTER"
    ].includes(key)) {
        try {
            const newAccessToken = await refreshAccessToken();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Storage"].setItem("accessToken", newAccessToken);
            // Also update AuthContext storage if available
            if ("TURBOPACK compile-time truthy", 1) {
                const tokensJson = localStorage.getItem(AUTH_TOKENS_KEY);
                if (tokensJson) {
                    const tokens = JSON.parse(tokensJson);
                    tokens.token = newAccessToken;
                    localStorage.setItem(AUTH_TOKENS_KEY, JSON.stringify(tokens));
                }
            }
            h.set("Authorization", "Bearer ".concat(newAccessToken));
            res = await fetch(url, options);
            if (res.ok) {
                if (res.status === 204) {
                    return;
                }
                const retryResult = await res.json();
                if (retryResult.status !== 0) {
                    throw new Error(retryResult.message);
                }
                return retryResult.data;
            }
        } catch (refreshError) {
            console.error('Token refresh failed:', refreshError);
            sessionStorage.removeItem("accessToken");
            document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            // UI should catch this and show a toast
            throw new Error("SESSION_EXPIRED");
        }
    }
    if (res.status === 429) {
        throw new Error("Too many requests. Try again later");
    }
    // Extract error message from API response
    try {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const errorData = await res.json();
            // Support multiple error response formats
            const errorMessage = (errorData === null || errorData === void 0 ? void 0 : errorData.message) || (errorData === null || errorData === void 0 ? void 0 : errorData.error) || "Error: ".concat(res.status, " ").concat(res.statusText);
            throw new Error(errorMessage);
        } else {
            // If not JSON, it might be an HTML error page
            const text = await res.text();
            console.error('Non-JSON error response:', text.substring(0, 200));
            throw new Error("Server error: ".concat(res.status, " ").concat(res.statusText));
        }
    } catch (err) {
        // If it's already an error we threw, rethrow it
        if (err instanceof Error && (err.message.startsWith('Error:') || err.message.startsWith('Server error:'))) {
            throw err;
        }
        // Otherwise, wrap it
        throw new Error("Error: ".concat(res.status, " ").concat(res.statusText));
    }
};
const refreshToken = refreshAccessToken;
const post = function(key, data) {
    let params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return fetchData(key, "POST", params, data);
};
const list = function(key) {
    let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, query = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return fetchData(key, "GET", params, null, query);
};
const retrieve = function(key) {
    let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return fetchData(key, "GET", params);
};
const update = function(key, data) {
    let params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return fetchData(key, "PUT", params, data);
};
const remove = function(key) {
    let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return fetchData(key, "DELETE", params);
};
const toggleProductAvailability = (productId, isAvailable, deactivatedByAuthority)=>{
    return update("TOGGLE_PRODUCT_AVAILABILITY", {
        isAvailable,
        deactivatedByAuthority
    }, {
        id: productId
    });
};
const file = async function(key) {
    let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, query = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, headers = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    const h = new Headers();
    h.append("Content-Type", "application/json");
    if ("object" != "undefined" && ![
        "ADMIN_LOGIN"
    ].includes(key)) {
        const accessToken = getAccessTokenFromStorage();
        if (accessToken) {
            // console.log("access token:", accessToken);
            h.append("Authorization", "Bearer ".concat(accessToken));
        // resetLogoutPromptTimer();
        }
    }
    if (headers) {
        Object.entries(headers).forEach((param)=>{
            let [key, value] = param;
            h.append(key, String(value));
        });
    }
    // h.append("X-From-Admin", location.host);
    const q = new URLSearchParams(query).toString();
    const baseUrl = ROUTING_URL.endsWith('/') ? ROUTING_URL : "".concat(ROUTING_URL, "/");
    const endpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$end_points$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$end_points$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoute"])(key), params);
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.substring(1) : endpoint;
    const url = "".concat(baseUrl).concat(cleanEndpoint).concat(q ? "?".concat(q) : "");
    const options = {
        method: "GET",
        headers: h,
        credentials: "include"
    };
    const res = await fetch(url, options);
    if (res.ok) {
        const disposition = res.headers.get("Content-Disposition");
        const filenameMatch = disposition === null || disposition === void 0 ? void 0 : disposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        const filename = filenameMatch ? filenameMatch[1].replace(/['"]/g, "") : "file";
        const blob = await res.blob();
        const urlBlob = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = urlBlob;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(urlBlob);
        return; // No need to return anything else
    }
    const errorMessage = await res.json().then((res)=>res.message);
    throw new Error(errorMessage);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/types/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Auth Types - Adapted to the new login response shape used by the API.
 * New login response example:
 * {
 *   "data": { "user": { ... }, "token": "..." },
 *   "message": "Login successful",
 *   "status": "success"
 * }
 */ // Keep AccountType for backward compatibility in parts of the app that still need it
__turbopack_context__.s([
    "STORAGE_KEYS",
    ()=>STORAGE_KEYS
]);
const STORAGE_KEYS = {
    TOKENS: 'auth_tokens',
    USER: 'auth_user'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/context/AuthContext.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * AuthContext - React Context for authentication
 * Separated into own file for Vite Fast Refresh compatibility
 */ __turbopack_context__.s([
    "AuthContext",
    ()=>AuthContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_@babel+core@7.2_89c643592e42d398bf8fd5aacbeada83/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/context/auth.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_@babel+core@7.2_89c643592e42d398bf8fd5aacbeada83/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_@babel+core@7.2_89c643592e42d398bf8fd5aacbeada83/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_@babel+core@7.2_89c643592e42d398bf8fd5aacbeada83/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/sonner@1.7.4_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$crud$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/crud.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$context$2f$AuthContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/context/AuthContext.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function AuthProvider(param) {
    let { children } = param;
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tokens, setTokens] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const clearStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[clearStorage]": ()=>{
            try {
                localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].TOKENS);
                localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].USER);
            } catch (err) {
                console.error('Failed to clear storage:', err);
            }
        }
    }["AuthProvider.useCallback[clearStorage]"], []);
    const restoreSessionFromStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[restoreSessionFromStorage]": ()=>{
            try {
                const storedTokens = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].TOKENS);
                const storedUser = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].USER);
                if (storedTokens && storedUser) {
                    const parsedTokens = JSON.parse(storedTokens);
                    const parsedUser = JSON.parse(storedUser);
                    setTokens(parsedTokens);
                    setUser(parsedUser);
                }
            } catch (err) {
                console.error('Failed to restore session from storage:', err);
                clearStorage();
            } finally{
                setIsLoading(false);
            }
        }
    }["AuthProvider.useCallback[restoreSessionFromStorage]"], [
        clearStorage
    ]);
    /**
   * Persist auth state to localStorage
   * Called after login to save tokens and user data
   */ const saveToStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[saveToStorage]": (authUser, authTokens)=>{
            try {
                localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].USER, JSON.stringify(authUser));
                localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].TOKENS, JSON.stringify(authTokens));
            } catch (err) {
                console.error('Failed to save auth state to storage:', err);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to save authentication state');
            }
        }
    }["AuthProvider.useCallback[saveToStorage]"], []);
    // New API only: response.data.user + response.data.token
    const deriveUserFromResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[deriveUserFromResponse]": (user)=>{
            var _user_id, _user_email, _user_blocked, _user_first_name, _user_last_name;
            const baseUser = {
                id: String((_user_id = user.id) !== null && _user_id !== void 0 ? _user_id : ''),
                email: (_user_email = user.email) !== null && _user_email !== void 0 ? _user_email : '',
                accountType: 'admin',
                isActive: !((_user_blocked = user.blocked) !== null && _user_blocked !== void 0 ? _user_blocked : false),
                isVerified: true,
                firstName: (_user_first_name = user.first_name) !== null && _user_first_name !== void 0 ? _user_first_name : undefined,
                lastName: (_user_last_name = user.last_name) !== null && _user_last_name !== void 0 ? _user_last_name : undefined
            };
            // If user is a super user, role is already set via accountType
            if (user.is_superUser) baseUser.role = 'admin';
            return baseUser;
        }
    }["AuthProvider.useCallback[deriveUserFromResponse]"], []);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[login]": async (email, password)=>{
            try {
                setIsLoading(true);
                setError(null);
                // POST to login endpoint (single endpoint, account type detected from response)
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$crud$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["post"])('LOGIN', {
                    email,
                    password
                });
                var _response_data;
                // Expect new API shape: response.data.user and response.data.token
                const payload = (_response_data = response === null || response === void 0 ? void 0 : response.data) !== null && _response_data !== void 0 ? _response_data : response;
                const userPayload = payload === null || payload === void 0 ? void 0 : payload.user;
                const token = payload === null || payload === void 0 ? void 0 : payload.token;
                if (!userPayload || !token) {
                    throw new Error('Invalid login response from server');
                }
                const authUser = deriveUserFromResponse(userPayload);
                const authTokens = {
                    token
                };
                // Save to storage and update context
                saveToStorage(authUser, authTokens);
                setTokens(authTokens);
                setUser(authUser);
                // Show success message
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Login successful!');
                // Auto-redirect based on detected account type
                // const redirectPath = authUser.accountType === 'system_admin' ? '/admin/dashboard' : '/merchant/dashboard';
                const redirectPath = '/admin/dashboard';
                router.push(redirectPath);
            } catch (err) {
                const errorMsg = err instanceof Error ? err.message : 'Login failed';
                setError(errorMsg);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMsg);
                throw err;
            } finally{
                setIsLoading(false);
            }
        }
    }["AuthProvider.useCallback[login]"], [
        saveToStorage,
        router,
        deriveUserFromResponse
    ]);
    /**
    LOGOUT - Clear all auth state and redirect to login
   */ const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[logout]": async ()=>{
            try {
                // Clear storage and state
                clearStorage();
                setTokens(null);
                setUser(null);
                setError(null);
                // Redirect to login
                router.push('/login');
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Logged out successfully');
            } catch (err) {
                console.error('Logout error:', err);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$1$2e$7$2e$4_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Logout failed');
            }
        }
    }["AuthProvider.useCallback[logout]"], [
        clearStorage,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            restoreSessionFromStorage();
        }
    }["AuthProvider.useEffect"], [
        restoreSessionFromStorage
    ]);
    const value = {
        // State
        user,
        tokens,
        isLoading,
        isAuthenticated: !!user && !!tokens,
        error,
        // Methods
        login,
        logout,
        setUser,
        setTokens,
        clearError: ()=>setError(null)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$context$2f$AuthContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthContext"].Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/context/auth.tsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "obsAAwz8qF4EYPCnt4enupBA0K0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthProvider;
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/theme-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_@babel+core@7.2_89c643592e42d398bf8fd5aacbeada83/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom_e1ec481706e606e7e4324a4b413dee80$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-themes@0.4.6_react-dom_e1ec481706e606e7e4324a4b413dee80/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
'use client';
;
;
function ThemeProvider(param) {
    let { children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$2_89c643592e42d398bf8fd5aacbeada83$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom_e1ec481706e606e7e4324a4b413dee80$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/theme-provider.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_14968358._.js.map