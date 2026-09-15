/**
 * Canonical service-hub destination used by navigation and cross-service links.
 * Paving is consolidated onto the performing Cape Town landing page.
 */
export function getServiceHubHref(serviceSlug: string) {
  return serviceSlug === "paving"
    ? "/services/paving/cape-town"
    : `/services/${serviceSlug}`;
}
