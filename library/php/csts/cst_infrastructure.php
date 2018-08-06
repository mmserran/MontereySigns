<?php

interface cst_infrastructure {

    const app_name       = 'monterey-signs'; // APP_NAME
    const constants_name = 'montereysigns';
    const seo_title      = "Monterey's favorite sign shop. Offering quality signs, banners, and vehicle graphics for all of Monterey, San Benito, and Santa Cruz Counties";
    const seo_desc       = "Monterey's favorite sign shop offers quality signs, banners, and vehicle graphics at great prices with fast service. Proudly serving all of Monterey, San Benito, and Santa Cruz Counties";
    //
    const valid_page     = '/[a-z_0-9\/]*\/([a-z_0-9]+)$/i'; // allow underscore and numbers
    const page           = 'page'; // must match apache2 rewrite rule
    //
    const fail           = 'fail';
    const pass           = 'pass';
    const result         = 'result';

}
