"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { forwardRef, useImperativeHandle, useRef } from "react";

export type TurnstileRef = {
  reset: () => void;
  getResponse: () => string | null;
};

type TurnstileComponentProps = {
  onSuccess?: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
  className?: string;
};

export const TurnstileComponent = forwardRef<TurnstileRef, TurnstileComponentProps>(
  ({ onSuccess, onError, onExpire, className }, ref) => {
    const turnstileRef = useRef<TurnstileInstance | null>(null);

    useImperativeHandle(ref, () => ({
      reset: () => {
        turnstileRef.current?.reset();
      },
      getResponse: () => {
        return turnstileRef.current?.getResponse() || null;
      },
    }));

    return (
      <Turnstile
        ref={turnstileRef}
        siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY!}
        onSuccess={onSuccess}
        onError={onError}
        onExpire={onExpire}
        className={className}
        options={{
          theme: "light",
          size: "normal",
        }}
      />
    );
  }
);
// zobrazení pro dev tools a lepší debug
TurnstileComponent.displayName = "TurnstileComponent";
