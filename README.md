# PWA Demo - QR Code Reader

## Installation

-   Setup
    -   Make sure you have all the [https://developer.adobe.com/commerce/pwa-studio/](pre-requisits installed)
    -   Tested with Node 14
-   Clone or Download this repo to a folder
-   In terminal run `yarn install`
-   Create the .env file from sample `cp .env.sample .env`
-   Edit the `.env` file; it is currently setup to point to the public [https://venia.magento.com/](https://venia.magento.com/)
-   Create custom origin `yarn buildpack create-custom-origin ./`
    -   This gives you HTTPS and a custom URL, you might need to type in your computer password
    -   This is required **camera access is only available through HTTPS**
-   Finally, run `yarn watch`

## Demo Steps

-   Homepage
-   QR Scanner Trigger appears
    -   Top left mobile screens
    -   Top right Right on tablet and larger screens
-   Tapping the icon shows the devices camera (it may ask for permission)
-   Show the camera a QR code (see examples)
-   The PWA will redirect to the data in the QR code

### Screenshots

![Homepage Screenshot](docs/images/Homepage-Screenshot.png?raw=true 'Homepage')
![QR Scanner](docs/images/Homepage-Screenshot.png?raw=true 'QR Scanner')
![Product Page Redirect](docs/images/Homepage-Screenshot.png?raw=true 'Product Page Redirect')

### QR Examples

The QR scanner has no validation, so make sure you know what you're doing when you scan.

The QR code should just have the relative path to the page that you want to load.

You can download the ones below to your phone, or create your own using a link that already exists. **Remember just the path, not the full URL**.

#### Customer Service

/customer-service

<img src="docs/examples/Customer-Service.png?raw=true" width="100" height="100" />

#### Fauna Pants

/fauna-palazzo-pants.html

<img src="docs/examples/Fauna-Pants.png?raw=true" width="100" height="100" />

#### Juno Sweater

/juno-sweater.html

<img src="docs/examples/Juno-Sweater.png?raw=true" width="100" height="100" />

## Built Using

### PWA Studio

Documentation for Magento PWA Studio packages is located at [https://pwastudio.io](https://pwastudio.io).

### React QR

[https://www.npmjs.com/package/react-qr-reader](https://www.npmjs.com/package/react-qr-reader)
