

import CookieModal from "./cookie-modal";
import { getConsentCookies } from "./cookie-consent";
import React from "react";

export default async function CookieConsent() {
    const cookieConsent = await getConsentCookies();

    return 
    <CookieModal showModal = {cookieConsent === undefined}></CookieModal>
}