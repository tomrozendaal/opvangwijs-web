// Mollie payment link. Create a reusable payment link in the Mollie dashboard
// (Betaalverzoeken / Payment links): set the amount to €9,99, give it a clear
// description, enable iDEAL, and set the redirect/return URL to
// https://opvangwijs.nl/bedankt so buyers land on the download page after paying.
// Then paste the link's URL here.
export const BUY_URL = 'https://payment-links.mollie.com/payment/DpSHcTiTJ3CwCK7qC4XND';
export const CONTACT_EMAIL = 'hallo@opvangwijs.nl';
export const PRICE_LABEL = '€9,99';

// Download links shown on the /bedankt page after a successful payment.
// These point at the public opvangwijs-releases repo using GitHub's stable
// "latest release" URLs, so they always serve the newest installer and never
// need updating per version (the release workflow uploads constant filenames).
export const DOWNLOAD_MACOS =
  'https://github.com/tomrozendaal/opvangwijs-releases/releases/latest/download/Opvangwijs-universal.dmg';
export const DOWNLOAD_WINDOWS =
  'https://github.com/tomrozendaal/opvangwijs-releases/releases/latest/download/Opvangwijs-Setup.exe';
