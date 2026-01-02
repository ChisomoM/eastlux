module.exports = [
"[project]/.next-internal/server/app/api/auth/login/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/lib/database.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applicationDb",
    ()=>applicationDb,
    "contactDb",
    ()=>contactDb,
    "createErrorResponse",
    ()=>createErrorResponse,
    "createSuccessResponse",
    ()=>createSuccessResponse,
    "generateId",
    ()=>generateId,
    "statsDb",
    ()=>statsDb,
    "userDb",
    ()=>userDb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lowdb@7.0.1/node_modules/lowdb/lib/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$core$2f$Low$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lowdb@7.0.1/node_modules/lowdb/lib/core/Low.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lowdb@7.0.1/node_modules/lowdb/lib/node.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$JSONFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lowdb@7.0.1/node_modules/lowdb/lib/adapters/node/JSONFile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
// Initialize database
const file = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), 'data', 'db.json');
const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$JSONFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JSONFile"](file);
const db = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$core$2f$Low$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Low"](adapter, {
    users: [],
    contacts: [],
    applications: []
});
// Read database synchronously
db.read();
// Initialize admin user if database is empty
const initializeAdminUser = ()=>{
    if (db.data.users.length === 0) {
        console.log('Initializing database with admin user...');
        // Use bcrypt synchronously for initialization
        const bcrypt = __turbopack_context__.r("[project]/node_modules/.pnpm/bcryptjs@3.0.3/node_modules/bcryptjs/umd/index.js [app-route] (ecmascript)");
        const adminPassword = bcrypt.hashSync('admin123', 10);
        const adminId = generateId();
        db.data.users.push({
            id: adminId,
            email: 'admin@eastlux.com',
            password_hash: adminPassword,
            name: 'Eastlux Admin',
            role: 'admin',
            is_active: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        });
        db.write();
        console.log('Admin user created successfully!');
        console.log('Email: admin@eastlux.com');
        console.log('Password: admin123');
    }
};
// Initialize admin user synchronously
initializeAdminUser();
function generateId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
function createSuccessResponse(data, message = "Success") {
    return new Response(JSON.stringify({
        data,
        message,
        status: 0
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
function createErrorResponse(message, status = 400) {
    return new Response(JSON.stringify({
        data: null,
        message,
        status: 1
    }), {
        status,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
const userDb = {
    create: async (id, email, passwordHash, name, role = 'user')=>{
        const user = {
            id,
            email,
            password_hash: passwordHash,
            name,
            role,
            is_active: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        db.data.users.push(user);
        await db.write();
        return user;
    },
    getByEmail: (email)=>{
        return db.data.users.find((user)=>user.email === email);
    },
    getById: (id)=>{
        return db.data.users.find((user)=>user.id === id);
    },
    update: async (id, name)=>{
        const user = db.data.users.find((u)=>u.id === id);
        if (user) {
            user.name = name;
            user.updated_at = new Date().toISOString();
            await db.write();
        }
        return user;
    }
};
const contactDb = {
    create: async (id, name, email, phone, company, service, message)=>{
        const contact = {
            id,
            name,
            email,
            phone,
            company: company || undefined,
            service,
            message,
            status: 'new',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        db.data.contacts.push(contact);
        await db.write();
        return contact;
    },
    getAll: ()=>{
        return db.data.contacts;
    },
    getById: (id)=>{
        return db.data.contacts.find((contact)=>contact.id === id);
    },
    updateStatus: async (id, status)=>{
        const contact = db.data.contacts.find((c)=>c.id === id);
        if (contact) {
            contact.status = status;
            contact.updated_at = new Date().toISOString();
            await db.write();
        }
        return contact;
    },
    getByStatus: (status)=>{
        return db.data.contacts.filter((contact)=>contact.status === status);
    }
};
const applicationDb = {
    create: async (id, name, email, phone, experience, qualifications, cvUrl)=>{
        const application = {
            id,
            name,
            email,
            phone,
            experience: experience || undefined,
            qualifications: qualifications || undefined,
            cv_url: cvUrl || undefined,
            status: 'pending',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        db.data.applications.push(application);
        await db.write();
        return application;
    },
    getAll: ()=>{
        return db.data.applications;
    },
    getById: (id)=>{
        return db.data.applications.find((app)=>app.id === id);
    },
    updateStatus: async (id, status)=>{
        const application = db.data.applications.find((a)=>a.id === id);
        if (application) {
            application.status = status;
            application.updated_at = new Date().toISOString();
            await db.write();
        }
        return application;
    },
    getByStatus: (status)=>{
        return db.data.applications.filter((app)=>app.status === status);
    }
};
const statsDb = {
    getContactStats: ()=>{
        const contacts = db.data.contacts;
        return {
            total: contacts.length,
            new: contacts.filter((c)=>c.status === 'new').length,
            read: contacts.filter((c)=>c.status === 'read').length,
            responded: contacts.filter((c)=>c.status === 'responded').length
        };
    },
    getApplicationStats: ()=>{
        const applications = db.data.applications;
        return {
            total: applications.length,
            pending: applications.filter((a)=>a.status === 'pending').length,
            reviewed: applications.filter((a)=>a.status === 'reviewed').length,
            accepted: applications.filter((a)=>a.status === 'accepted').length,
            rejected: applications.filter((a)=>a.status === 'rejected').length
        };
    }
};
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/src/lib/auth-backend.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateToken",
    ()=>generateToken,
    "getTokenFromRequest",
    ()=>getTokenFromRequest,
    "getUserFromToken",
    ()=>getUserFromToken,
    "requireAdmin",
    ()=>requireAdmin,
    "requireAuth",
    ()=>requireAuth,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jsonwebtoken$40$9$2e$0$2e$3$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/database.ts [app-route] (ecmascript)");
;
;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
function generateToken(payload) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jsonwebtoken$40$9$2e$0$2e$3$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sign"](payload, JWT_SECRET, {
        expiresIn: '7d'
    });
}
function verifyToken(token) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jsonwebtoken$40$9$2e$0$2e$3$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verify"](token, JWT_SECRET);
    } catch  {
        return null;
    }
}
function getUserFromToken(token) {
    const payload = verifyToken(token);
    if (!payload) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["userDb"].getById(payload.userId);
}
function getTokenFromRequest(request) {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }
    return authHeader.substring(7);
}
function requireAuth(request) {
    const token = getTokenFromRequest(request);
    if (!token) {
        return new Response(JSON.stringify({
            data: null,
            message: 'No token provided',
            status: 1
        }), {
            status: 401,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    const user = getUserFromToken(token);
    if (!user) {
        return new Response(JSON.stringify({
            data: null,
            message: 'Invalid token',
            status: 1
        }), {
            status: 401,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    if (!user.is_active) {
        return new Response(JSON.stringify({
            data: null,
            message: 'Account is deactivated',
            status: 1
        }), {
            status: 403,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    return {
        user
    };
}
function requireAdmin(request) {
    const authResult = requireAuth(request);
    if (authResult instanceof Response) return authResult;
    const { user } = authResult;
    if (user.role !== 'admin') {
        return new Response(JSON.stringify({
            data: null,
            message: 'Admin access required',
            status: 1
        }), {
            status: 403,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    return {
        user
    };
}
}),
"[project]/src/app/api/auth/login/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/bcryptjs@3.0.3/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/database.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$backend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-backend.ts [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    try {
        const { email, password } = await request.json();
        // Validation
        if (!email || !password) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createErrorResponse"])('Email and password are required', 400);
        }
        // Find user
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["userDb"].getByEmail(email);
        if (!user) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createErrorResponse"])('Invalid credentials', 401);
        }
        // Check password
        const isValidPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, user.password_hash);
        if (!isValidPassword) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createErrorResponse"])('Invalid credentials', 401);
        }
        // Check if user is active
        if (!user.is_active) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createErrorResponse"])('Account is deactivated', 403);
        }
        // Generate token
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$backend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateToken"])({
            userId: user.id,
            email: user.email
        });
        // Return user data in the expected format for the frontend
        const userResponse = {
            id: user.id,
            email: user.email,
            first_name: user.name.split(' ')[0] || '',
            last_name: user.name.split(' ').slice(1).join(' ') || '',
            username: user.email,
            blocked: !user.is_active,
            status: user.is_active ? 1 : 0,
            is_superUser: user.role === 'admin',
            mobile: null,
            last_login_date: null,
            failed_attempts: 0,
            role_id: user.role === 'admin' ? 1 : 2
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSuccessResponse"])({
            user: userResponse,
            token
        }, 'Login successful');
    } catch (error) {
        console.error('Login error:', error);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createErrorResponse"])('Internal server error', 500);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__34089d4c._.js.map