"use server";

import { CONSENT_COOKIE_NAME, CONSENT_OPTIONS } from "@/constants";
import { cookies } from "next/headers";

export async function getConsentCookies(): Promise<boolean | undefined> {
    const cookie = (await cookies()).get(CONSENT_COOKIE_NAME);

    if (cookie === undefined) {
        return undefined;
    }

    return JSON.parse(cookie.value);

}

export async function setConsentCookie(value: boolean) {
    (await cookies()).set(CONSENT_COOKIE_NAME, JSON.stringify({}), CONSENT_OPTIONS)
}

export async function resetCookie() {
    (await cookies()).delete(CONSENT_COOKIE_NAME);
}