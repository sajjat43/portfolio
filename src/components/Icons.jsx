const size = 18;

export function IconMail({ className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="m5 7 7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconPhone({ className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.2 3.8c.4-.4 1.1-.5 1.6-.2l2.1 1.2c.5.3.7.9.5 1.4l-.9 2.1c-.1.3 0 .7.2 1l1.7 2.4c.2.3.6.5 1 .4l2.2-.4c.6-.1 1.1.2 1.3.7l1 2.3c.2.6 0 1.2-.5 1.5l-1.9 1.2c-.5.3-1.1.3-1.6 0C10.2 16.5 7 13.4 5.2 8.6c-.3-.6-.2-1.2.2-1.6l1.5-1.6a1.4 1.4 0 0 1 1.3-.6Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconWhatsApp({ className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.97.55 3.8 1.51 5.38L2 22l4.96-1.6a9.86 9.86 0 0 0 5.08 1.4h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.77 13.98c-.24.68-1.4 1.24-1.95 1.32-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.26-4.79-4.2-4.93-4.4-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35h.55c.17 0 .41-.06.64.49.24.57.82 1.99.89 2.13.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.17-.3.37-.42.5-.14.14-.28.29-.12.56.16.28.7 1.16 1.5 1.88 1.04.93 1.91 1.22 2.19 1.36.28.14.44.12.6-.07.17-.19.7-.81.89-1.09.19-.28.38-.23.64-.14.26.1 1.66.78 1.95.93.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}

export function IconGithub({ className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .26.18.59.69.48A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function IconLinkedIn({ className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.75V20h3.19V8.5ZM5.34 7.1a1.85 1.85 0 1 0 0-3.7 1.85 1.85 0 0 0 0 3.7ZM20.25 20h-3.18v-5.95c0-1.42-.03-3.24-1.97-3.24-1.98 0-2.28 1.54-2.28 3.13V20H9.44V8.5h3.05v1.57h.04c.43-.8 1.47-1.65 3.02-1.65 3.23 0 3.82 2.13 3.82 4.9V20Z" />
    </svg>
  );
}

export function IconDownload({ className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4v10m0 0 4-4m-4 4-4-4M5 17.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconWork({ className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M4 9.5A1.5 1.5 0 0 1 5.5 8h13A1.5 1.5 0 0 1 20 9.5v8A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-8Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export function IconMessage({ className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 6.5A1.5 1.5 0 0 1 6.5 5h11A1.5 1.5 0 0 1 19 6.5v8A1.5 1.5 0 0 1 17.5 16H9l-4 3v-12.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const big = 28;

export function IconSaas({ className }) {
  return (
    <svg className={className} width={big} height={big} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8 9.5h8M8 12.5h5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconMobile({ className }) {
  return (
    <svg className={className} width={big} height={big} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="3.5" width="10" height="17" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M10 17.5h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconAutomation({ className }) {
  return (
    <svg className={className} width={big} height={big} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.5 6.5l2.1 2.1M15.4 15.4l2.1 2.1M17.5 6.5l-2.1 2.1M8.6 15.4l-2.1 2.1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function IconAi({ className }) {
  return (
    <svg className={className} width={big} height={big} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 8.5h8v7H8v-7Z" stroke="currentColor" strokeWidth="1.75" />
      <path d="M10 5.5v3M14 5.5v3M10 15.5v3M14 15.5v3M5.5 10h3M5.5 14h3M15.5 10h3M15.5 14h3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
