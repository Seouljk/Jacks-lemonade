import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/data';

const VARIANT_CLASS = {
  primary: 'cta-primary',
  nav: 'nav-cta',
  seasonal: 'seasonal-cta',
} as const;

// Link attributes for the Grab store; opens in a new tab once a real URL is set in SITE_CONFIG.
export function grabLinkProps() {
  const href = SITE_CONFIG.orderLinks.grab;
  return /^https?:\/\//.test(href)
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { href };
}

// Grab's green wordmark on a white chip, so the logo keeps its own colors on any button.
// The hidden word keeps the link's accessible name "Order on Grab", with the space intact.
export function GrabLogo() {
  return (
    <span className="grab-logo-chip">
      <span className="sr-only">{' Grab'}</span>
      <Image
        src="/images/grab-logo.svg"
        alt=""
        width={1000}
        height={355}
        unoptimized
        className="grab-logo"
      />
    </span>
  );
}

export default function GrabOrderButton({
  label = 'Order on',
  variant = 'primary',
}: {
  label?: string;
  variant?: keyof typeof VARIANT_CLASS;
}) {
  return (
    <a {...grabLinkProps()} className={`grab-cta ${VARIANT_CLASS[variant]}`}>
      {label}
      <GrabLogo />
    </a>
  );
}
