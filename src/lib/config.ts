// Mollie payment link. Create a reusable payment link in the Mollie dashboard
// (Betaalverzoeken / Payment links): set the amount to €9,99, give it a clear
// description, enable iDEAL, and set the redirect/return URL to
// https://opvangwijs.nl/bedankt so buyers land on the download page after paying.
// Then paste the link's URL here.
export const BUY_URL = 'https://payment-links.mollie.com/payment/DpSHcTiTJ3CwCK7qC4XND';
export const CONTACT_EMAIL = 'hallo@opvangwijs.nl';
export const PRICE_LABEL = '€9,99';

// Download links shown on the /bedankt page after a successful payment.
export const DOWNLOAD_MACOS = 'https://opvangwijs.nl/REPLACE-ME-Opvangwijs.dmg';
export const DOWNLOAD_WINDOWS = 'https://opvangwijs.nl/REPLACE-ME-Opvangwijs-Setup.exe';
