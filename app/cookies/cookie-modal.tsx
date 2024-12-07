"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { setConsentCookie } from "./cookie-consent";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function CookieModal({ showModal }: { showModal: boolean }) {
  const [show, setShow] = useState(showModal);

  function handleAccept() {
    setConsentCookie(true);
    setShow(false);
  }

  function handleDecline() {
    setConsentCookie(false);
    setShow(false);
  }

  return (
    <>
      {show && (
        <div>
          <Sheet>
            <SheetTrigger className="container mx-auto">Open</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>We respect your privacy!</SheetTitle>
                <SheetDescription>
                  <div>
                    <p>
                      This website uses cookies to provide you with a better,
                      safer and faster service.
                      <a href="/privacy-policy" className="underline">
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                  <div>
                    <Button onClick={handleAccept}>Accept all cookies </Button>
                  </div>
                  <div>
                    <Button onClick={handleDecline}>
                      Decline non-essential cookies
                    </Button>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      )}
    </>
  );
}
