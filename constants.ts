import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const CONSENT_COOKIE_NAME = "__consent";

export const CONSENT_OPTIONS: Partial<ResponseCookie> = {  // a common cookie option object that can be used later to ..
    httpOnly: true,  // we cannot access this with js in the client later if we set it to http only (only accessible from the server)
    maxAge: 60 * 60 * 24 * 30, // in sec
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
}