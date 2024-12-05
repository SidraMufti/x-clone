import { NextRequest, NextResponse } from "next/server";
import { CONSENT_COOKIE_NAME, CONSENT_OPTIONS} from "./constants";

export function middleware(request: NextRequest) {
    const middleware_cookie = request.cookies.get(CONSENT_COOKIE_NAME);

    const response =  NextResponse.next();  // we need to set the cookie in the response, we can store our response in that variable and then we can add cookies to it.
   
    if (!middleware_cookie) {
        // create the cookie
        response.cookies.set(CONSENT_COOKIE_NAME, JSON.stringify({}), CONSENT_OPTIONS); // cookie name, value needs to be a string, options
    }

    return response;
}