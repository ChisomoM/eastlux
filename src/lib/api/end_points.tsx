export const API: Record<string, string> = {
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
  HEALTH: "health",
};

export const getRoute = (val: string): string => {
  const uri: string | undefined | null = API[val];
  if (uri === null || uri === undefined) {
    throw new Error("key doesn't exist");
  }
  return uri;
};

export const pipe = (pattern: string, map: Record<string, string | number>) => {
  return pattern.replace(/:([^/]+)/g, (_, key: string): string => {
    if (key in map) {
      return String(map[key]);
    }
    throw new Error(`Key "${key}" not found in the map`);
  });
};
