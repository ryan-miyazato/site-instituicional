export const HEADER_HEIGHT = '56px'

export const ROUTES = {
    HOME: "/",
    REGISTER: profile => (`/cadastro/${profile}`),
    LOGIN: "/login",
    CHOOSE_PROFILE: "/persona",
    FEED: "/explorar",
    DASH_ADMIN: "/dash-admin",
    PREFERENCES: "/preferencias",
    ALBUM: "/album",
    PERFIL: "/perfil-fotografo",
}

export const PROFILE_TYPES = {
    0: "admin",
    1: "cliente",
    2: "fotógrafo",
}