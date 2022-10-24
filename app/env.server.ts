import invariant from "tiny-invariant";

export function getEnv() {
  const adminEmail = process.env.ADMIN_EMAIL;

  invariant(adminEmail, "ADMIN_EMAIL should be defined");

  return {
    ADMIN_EMAIL: adminEmail,
  };
}

type ENV = ReturnType<typeof getEnv>;

declare global {
  var ENV: ENV;

  interface Window {
    ENV: ENV;
  }
}
