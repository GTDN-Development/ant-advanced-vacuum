"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useImperativeHandle, useRef } from "react";

export type TurnstileRef = TurnstileInstance | undefined;

type TurnstileComponentProps = {
  onSuccess?: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
  className?: string;
};

export const TurnstileComponent = ({
  onSuccess,
  onError,
  onExpire,
  className,
  ref,
}: TurnstileComponentProps & { ref?: React.Ref<TurnstileRef> }) => {
  const turnstileRef = useRef<TurnstileRef>(undefined);

  useImperativeHandle(ref, () => turnstileRef.current);

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
};
