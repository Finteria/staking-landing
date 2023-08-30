// key names must match SENTRY_ENV possible variants
export const cookieMeta = {
  local: {
    domain: () => null,
    name: "local-Bearer",
  },
  development: {
    domain: () => getUrlParts(window.location.href).domainroot,
    name: "dev-Bearer",
  },
  production: {
    domain: () => getUrlParts(window.location.href).domainroot,
    name: "prod-Bearer",
  },
};

export function getUrlParts(arg: string) {
  const url = new URL(arg);
  const parts = url.hostname.split(".");
  const subdomain = parts.slice(0, -2).join(".");
  const domainroot = parts.slice(-2).join(".");
  const tld = `.${parts[parts.length - 1]}`;
  const segments = url.pathname === "/" ? [] : url.pathname.split("/").slice(1);
  const params = url.searchParams.entries();

  return {
    origin: url.origin,
    protocol: url.protocol.replace(":", ""),
    domain: url.hostname,
    subdomain,
    domainroot,
    domainpath: `${url.hostname}${url.pathname.substr(0, url.pathname.lastIndexOf("/"))}`,
    path: url.pathname.substr(1),
    query: url.search.substr(1),
    port: url.port ? url.port : url.protocol === "http:" ? 80 : 443,
    tld,
    parts,
    segments,
    params: Array.from(params, ([key, val]) => ({ key, val })),
  };
}
