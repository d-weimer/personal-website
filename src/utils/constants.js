export const API_BASE_URL =
  import.meta.env.NODE_ENV === "production"
    ? "https://danielweimer.net"
    : "http://localhost:3002";
