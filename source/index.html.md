---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - php
  - ruby
  - python
  - javascript

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/lord/slate'>Documentation Powered by Slate</a>

includes:
  - errors

search: true
---

# Getting started

# Documentation
Welcome to Affirm! Get familiar with the Affirm products and explore their features:

* Affirm core
* Affirm cards
* Telesales
* On-site messaging


<aside class="notice">
Follow our development quickstart to start building your integration.
</aside>

# Try now

# Affirm payment
Affirm enabled an additional payment method to pay over time. We collect your customer’s information easily and securely on the web or mobile and create charges on the server-side. Affirm is available in the U.S. and all U.S. territories, with two exceptions.

<aside class="warning">
Those exceptions are Iowa and West Virginia. It’s possible to create an Affirm account if you live in either state. But you won’t be able to prequalify or get approved for a loan due to the state laws there.
</aside>

In this getting started guide, we’ll show you how to add Affirm as a payment option to your checkout process in your application. We will also point you to additional resources to help you create your own flow.

# Not a developer
Although a custom Affirm integration requires you to either be, or hire, a developer, you have many alternatives. Use apps and tools to get started with Affirm, and do more with your Affirm account—no code required.

* Platform partners: Starting an online store, setting up a point-of-sale system, running a fundraiser, or selling tickets? Get started by using one of these platforms.
* Plug-in partners: Using an open-source or self-hosted platform like WordPress, Magento, or PrestaShop to run your business? Install these plug-ins to add more features to your platform.

# Need help
## Support
### API status
You can monitor and subscribe to [Affirm's system status](https://status.affirm.com/).
### Questions
Whether you’re a startup, small business, or global enterprise, our team is here to support you. 
### FAQ
If you are curious about Affirm, please visit our [FAQ](https://www.affirm.com/help/) page.
## Community
### Slack channel
TBD
### Google forum
TBD
### StackOverflow
TBD
## Videos
### Comparisons guide
Tradeoffs and considerations in evaluating ways to integrate with Affirm’s product.
<span class="video-image-width"><a href="http://www.youtube.com/watch?feature=player_embedded&v=_zFX28TFfdE
" target="_blank"><img src="http://img.youtube.com/vi/_zFX28TFfdE/0.jpg" 
alt="Integration Comparisons guide"/></a></span>
### Core checkout
An overview of how to initiate an Affirm application process into your system via our core product.
<span class="video-image-width"><a href="http://www.youtube.com/watch?feature=player_embedded&v=LM6wpHzoaA0
" target="_blank"><img src="http://img.youtube.com/vi/LM6wpHzoaA0/0.jpg" 
alt="Integration Comparisons guide"/></a></span>
### Core authorization
A conceptual view on authorization via checkout token.
<span class="video-image-width"><a href="http://www.youtube.com/watch?feature=player_embedded&v=aWFv2ecwE60
" target="_blank"><img src="http://img.youtube.com/vi/aWFv2ecwE60/0.jpg" 
alt="Integration Comparisons guide"/></a></span>
### Core Charge
An introduction to charge states with the Affirm products and how to integrate those to your order system.
<span class="video-image-width"><a href="http://www.youtube.com/watch?feature=player_embedded&v=BF5CW6NFHpw
" target="_blank"><img src="http://img.youtube.com/vi/BF5CW6NFHpw/0.jpg" 
alt="Integration Comparisons guide"/></a></span>
### VCN checkout
An overview of how to initiate an Affirm application process into your system via our VCN product.
<span class="video-image-width"><a href="http://www.youtube.com/watch?feature=player_embedded&v=LBG2IK4T1U8
" target="_blank"><img src="http://img.youtube.com/vi/LBG2IK4T1U8/0.jpg" 
alt="Integration Comparisons guide"></a></span>
### VCN callback
Implementing callback functions on loan applications.
<span class="video-image-width"><a href="http://www.youtube.com/watch?feature=player_embedded&v=hpupR70BsNg
" target="_blank"><img src="http://img.youtube.com/vi/hpupR70BsNg/0.jpg" 
alt="Integration Comparisons guide"/></a></span>
### VCN Charge
A conceptual view of charge actions via your payment gateway and how it’s tied back to Affirm.
<span class="video-image-width"><a href="http://www.youtube.com/watch?feature=player_embedded&v=QjWSso8Mmwg
" target="_blank"><img src="http://img.youtube.com/vi/QjWSso8Mmwg/0.jpg" 
alt="Integration Comparisons guide"/></a></span>
### Telesales
A conceptual overview of how to integrate Affirm into your phone sales system.
<span class="video-image-width"><a href="http://www.youtube.com/watch?feature=player_embedded&v=SN3dvqHvvZM
" target="_blank"><img src="http://img.youtube.com/vi/SN3dvqHvvZM/0.jpg" 
alt="Integration Comparisons guide"/></a></span>
### Telesales demo
Demo of the agent and customer experience with the Affirm telesales product. 
<span class="video-image-width"><a href="http://www.youtube.com/watch?feature=player_embedded&v=7XK9igC3Cok
" target="_blank"><img src="http://img.youtube.com/vi/7XK9igC3Cok/0.jpg" 
alt="Integration Comparisons guide"/></a></span>
### Promotional integration
An overview of how you can promote Affirm on your website.
<span class="video-image-width"><a href="http://www.youtube.com/watch?feature=player_embedded&v=LNqwo8jcfSM
" target="_blank"><img src="http://img.youtube.com/vi/LNqwo8jcfSM/0.jpg" 
alt="Integration Comparisons guide"/></a></span>
### Settlement and reconciliation
An introduction to the Affirm’s settlement process.
<span class="video-image-width"><a href="http://www.youtube.com/watch?feature=player_embedded&v=t-4KUKwgfoY
" target="_blank"><img src="http://img.youtube.com/vi/t-4KUKwgfoY/0.jpg" 
alt="Integration Comparisons guide"/></a></span>
## Examples

# Affirm core

# Quickstart
## Overview
## Collecting information
## Create a charge
#Collecting information
## Affirm.js
### Overview
### Getting started
#### Installing Affirm
#### Configuration
#### Adding Affirm
#### Creating a charge
### Examples
### Reference
## Android
### Overview
### Getting started
#### Installing Affirm
#### Configuration
#### Adding Affirm
#### Adding promos
#### Creating a charge
### Examples
## iOS
### Overview
### Getting started
#### Installing Affirm
#### Configuration
#### Adding Affirm
#### Adding promos
#### Creating a charge
### Examples
# Testing
## Overview
## Test tokens
## Simulating errors
## Rate limits
## Webhooks

# Affirm cards

# Quickstart
# PCI requirements
# Best practices
# Testing
## Overview
## Test tokens
## Simulating errors

# Telesales

# Quickstart
# Testing

# On-site messaging

# Quickstart
# Placement
# Branding assets

# Dashboard

# Overview

# Reporting

# Development

# Introduction
# Authentification
# Security
# Generic error codes
Affirm uses standard HTTP status codes to communicate errors. In general, a `2xx` status code indicates success while `4xx` indicates an error, in which case, the response body includes a JSON error object, with a text code and description containing more details. A `5xx` status code indicates that something went wrong on our end.

Code | Status | Description
---- | ------ | -----------
**bad_request** | **400** | Something in your header or request body was malformed.
**invalid_auth** | **401** | Submitted credentials are either missing or malformed.
**unauthorized** | **401** | Insufficient credentials for access to the requested resource.
**not_found** | **404** | The object you’re requesting doesn’t exist.
**rate_limit** | **429** | The API call has been denied as it has exceeded the permissible call rate limit.
**affirm_server** |**5xx**| Something went wrong on our end.

# Webhooks
# Affirm assets
We recommend using Affirm-hosted assets whenever possible to take advantage of our CDN's performance, and to make sure that the images you use are always up-to-date and consistent with our brand.

Please also keep the following in mind when using our assets and brand.

* Do not appropriate Affirm content or imagery, such as in advertisements or promotion, without consent.
* Do not mask or alter Affirm’s brand by ‘white-labeling’ our service as an in-house financing program or by changing Affirm materials with different content, color, and design.
* Do not alter these logos or combine them with other custom content without consent.

## Logos
Name | Example | Image URL
------------- | ------- | -----------
Black-blue logo | <img src="https://cdn-assets.affirm.com/images/black_logo-transparent_bg.png"> | <a target="_blank" title="https://cdn-assets.affirm.com/images/black_logo-white_bg.jpg" href="https://cdn-assets.affirm.com/images/black_logo-white_bg.jpg" rel="external nofollow" class="link-https">JPG</a> / <a target="_blank" title="https://cdn-assets.affirm.com/images/black_logo-transparent_bg.png" href="https://cdn-assets.affirm.com/images/black_logo-transparent_bg.png" rel="external nofollow" class="link-https">PNG</a>&nbsp;/ <a target="_blank" title="https://cdn-assets.affirm.com/images/black_logo-white_bg.svg" href="https://cdn-assets.affirm.com/images/black_logo-white_bg.svg" rel="external nofollow" class="link-https">SVG</a> / <a target="_blank" title="https://cdn-assets.affirm.com/images/black_logo-white_bg.eps" href="https://cdn-assets.affirm.com/images/black_logo-white_bg.eps" rel="external nofollow" class="link-https">EPS</a> / <a target="_blank" title="https://cdn-assets.affirm.com/images/black_logo-white_bg.pdf" href="https://cdn-assets.affirm.com/images/black_logo-white_bg.pdf" rel="external nofollow" class="link-https">PDF</a>

## Buttons
Name | Example | Image URL
--------- | ------- | -----------

## Banners
Name | Example | Image URL
--------- | ------- | -----------


# API
## Keys
Manage your API keys to authenticate requests with Affirm.

Affirm authenticates your API requests using your account’s API keys. If you do not include your key when making an API request, or use one that is incorrect or outdated, Affirm returns an error.

Every account is provided with separate keys for testing and for running live transactions. All API requests or Objects exist in either test or live mode and they cannot be manipulated from one to another.

There are also two types of API keys: public and private.

Public API keys are meant solely to identify your account with Affirm, they aren’t private. In other words, they can safely be published in places like your Affirm.js JavaScript code, or in an Android or iPhone app. Public keys only have the power to create tokens.
Private API keys should be kept confidential and only stored on your own servers. Your account’s private API key can perform any API request to Affirm without restriction.
Each account has a total of four keys: a public and private key pair for test mode and live mode.

### Obtaining your API keys
Your API keys are available in the Dashboard.

<aside class="warning">
<b>Use only your test API keys for testing and development</b>. This ensures that you don't accidentally modify your live customers or charges.
</aside>

If you cannot see your API keys in the Dashboard, this means you do not have access to them. Contact your Affirm account’s owner and ask to be added to their team as a developer.

### Test and live modes

The test and live modes function almost identically, with a few necessary differences:

* In test environment, loans are not processed or sent to the banking network, but through a simulator that mimic the production environment.
* The test environment gives you the flexibility and support to verify all the operation types that you require.
* Review all common errors as well as errors that may occur for each operation, and ensure your application can handle them.
* TODO:Webhooks that were not successfully acknowledged are retried *** times over a few hours (as opposed to ** hours for live mode).

#### Test endpoint
`https://www.sandbox.affirm.com`

#### Prod endpoint
`https://www.api.affirm.com`

<aside class="notice">
<b>Use only your test API keys for testing and development.</b>
</aside>

### Keeping your keys safe
Your private API key can be used to make any API call on behalf of your account, such as creating charges or performing refunds. You should only grant access to your API keys to those that need them. Ensure they are kept out of any version control system that you may be using.

## Libraries
Affirm provides official API libraries for Javascript, Ruby, Python and Java. These helpful libraries wrap calls to the API and can make interfacing with Affirm easier.

### Community libraries
TODO: See if we have any open-source library.
### Plugins for third party services
Want to make an existing tool better with Affirm? Here are some plug-ins to help you get started without any programming needed.
#### Developed by Affirm
#### Developed by community
## Postman
In addition to api libraries, Affirm also has a Postman collection that can be used for development or testing purposes. See the guide for information on how to install and use the collection in your Postman client.
## Examples
### Code samples
### By Affirm
### Tutorials
### Recipes
### Affirm in the Wild
# Checklist

# Partners

# Basics
# Requirements
# Best practices

# Legal

# Compliance
# Brand guidelines
# Data-sharing
# Terms and conditions

# API Reference

# Charges

To charge a loan with Affirm, you create a Charge object. You can retrieve, void and refund individual charges as well as list all charges. Charges are identified by a unique, random id.

## The charge object
> The JSON is structured like this:

```json
{
    "currency": "USD",
    "id": "9AEG-QOFL",
    "under_dispute": false,
    "user_id": "9999-9999-XXXX",
    "platform": "Affirm Android SDK",
    "details": {
        "merchant": {
            "public_api_key": "D61DY07EIUOBE2I8",
            "user_cancel_url": "https://webhook.site/42438270-8228-4345-81f7-50fb33b2935e",
            "user_confirmation_url": "https://webhook.site/42438270-8228-4345-81f7-50fb33b2935e",
            "name": "[TEST] MERCHANT",
            "user_confirmation_url_action": "POST"
        },
        "financing_program_name": "standard_3_6_12",
        "loan_type": "classic",
        "billing": {
            "phone_number": "+1-415-555-5555",
            "email": "test.user@gmail.com",
            "name": {
                "full": "John Doe",
                "last": "Doe",
                "first": "John"
            },
            "address": {
                "city": "San Francisco",
                "country": "USA",
                "zipcode": "94104",
                "line1": "650 California Street.'",
                "line2": "Floor 12",
                "state": "CA"
            }
        },
        "checkout_type": "merchant",
        "items": {
            "49384174": {
                "sku": "49384174",
                "item_url": "https://shinta-affirm.staging.k8s.thredtest.com/product/49384174",
                "display_name": "Vismaya Scarf",
                "unit_price": 99,
                "qty": 1,
                "item_type": "physical",
                "item_image_url": "https://cf-assets-thredup.thredup.com/assets/144612397/large.jpg"
            }
        },
        "shipping": {
            "phone_number": "+1-415-555-5555",
            "email": "test.user@gmail.com",
            "name": {
                "full": "John Doe",
                "last": "Doe",
                "first": "John"
            },
            "address": {
                "city": "San Francisco",
                "country": "USA",
                "zipcode": "94104",
                "line1": "650 California Street.'",
                "line2": "Floor 12",
                "state": "CA"
            }
        },
        "currency": "USD",
        "meta": {
            "release": "false",
            "user_timezone": "America/Los_Angeles",
            "__affirm_tracking_uuid": "645dcb4d-5dfc-4400-a00c-eefbc46be0ac"
        },
        "shipping_amount": 599,
        "tax_amount": 86,
        "checkout_flow_type": "multi_use_prequal",
        "total": 1584,
        "config": {
            "user_confirmation_url_action": "POST"
        },
        "api_version": "v2",
        "metadata": {
            "platform_type": "Affirm Android SDK",
            "checkout_channel_type": "online",
            "platform_affirm": "1.0.12.1"
        }
    },
    "refundable": false,
    "charge_event_count": 0,
    "events": [
        {
            "created": "2019-04-04T20:21:40Z",
            "currency": "USD",
            "amount": 1584,
            "type": "auth",
            "id": "Q2YF874BJ8K1UR0Y",
            "transaction_id": "N1ydnoAVPz8Q1erD"
        }
    ],
    "pending": true,
    "merchant_external_reference": "ORDER_1554409300",
    "status": "authorized",
    "order_id": "ORDER_1554409300",
    "void": false,
    "expires": "2019-05-04T20:21:41Z",
    "payable": 0,
    "merchant_id": "5DRYHVLQ5F132I2D",
    "auth_hold": 1584,
    "refunded_amount": 0,
    "created": "2019-04-04T20:19:54Z",
    "is_instore": false,
    "amount": 1584,
    "is_marqeta_charge": false,
    "balance": 1584,
    "financing_program": "standard_3_6_12"
}
```
Attributes | Datatype | Description
--------- | ------- | -----------
currency | string | Three-letter ISO currency code, in uppercase. Must be a supported currency.
id | string | Unique identifier for the object.
under_dispute | boolean | If the charge is under dispute.
user_id | string | User linked to charge. TODO: test vs prod?
platform | string | The platform used to generate the checkout. TODO: Hardcoded values?
details | hash | Object containing details associated with the charge.
refundable | boolean | TODO: How is this triggered?
charge_event_count | positive integer or zero | TODO: How is this counted? It should be one...
events | hash | Object containing events associated with the charge.
pending | boolean | TODO: What is pending? What is true or false?
merchant_external_reference | string | TODO: Verify that this is only provided back with passed on the request.
status | string | TODO: Get all possible status from engineering team.
order_id | string | Unique identifier for the order. TODO: Same as merchant_external_reference?
void | boolean | Has the value true if the charge was voided or the value false if it was not.
expires | timestamp | Time at which the charge will be expired. Measured in seconds since the Unix epoch. TODO: Get more info on this.
payable | positive integer or zero | TODO: No idea what it is.
merchant_id | string | TODO: Is it the internal merchant ARI?
auth_hold | positive integer or zero | TODO: No idea what it is.
refunded_amount | positive integer or zero | TODO: No idea what it is.
created | timestamp | Time at which the charge was created. Measured in seconds since the Unix epoch.
is_instore | boolean | TODO: Need more info on this.
amount | positive integer or zero | A positive integer in the smallest unit (e.g., 100 cents to charge $1.00) representing how much to charge.
is_marqeta_charge | boolean | TODO: Need more info on this.
balance | positive integer or zero | TODO: Need more info on this.
financing_program | string | TODO: Unique identifier for the financing program.

## Create a charge
To charge a loan, you create a Charge object. If your API key and endpoint is in test mode, the supplied token won’t actually be charged, although everything else will occur as if in live mode.

### HTTPs Request
`POST /api/v2/charges`

### Json Arguments

Arguments | Datatype | Default | Description
--------- | ------- | ----------- | -----------
<strong>checkout_token</strong><span class="req">required</span> | string | None | A unique token used to authorize a charge.
<strong>order_id</strong><span class="opt">optional</span>  | string | None | A unique identifier to link back to the charge from your ordering system.

## Retrieve a charge

### HTTPs Request
`GET /api/v2/charges/{chargeId}`

## Update a charge

### HTTPs Request
`POST /api/v2/charges/{{chargeId}}/update`

## Void a charge

### HTTPs Request
`POST /api/v2/charges/{{chargeId}}/void`

### Json Arguments
Arguments | Datatype | Default | Description
--------- | ------- | ----------- | -----------
<strong>checkout_token</strong><span class="req">required</span> | string | None | A unique token used to authorize a charge.
<strong>order_id</strong><span class="opt">optional</span>  | string | None | A unique identifier to link back to the charge from your ordering system.

## Capture a charge

### HTTPs Request
`POST /api/v2/charges/{{chargeId}}/capture`

### Json Arguments
Arguments | Datatype | Default | Description
--------- | ------- | ----------- | -----------
<strong>order_id</strong><span class="opt">optional</span> | string | Empty | The merchant internal order id for reference. TODO: Better wording.
<strong>merchant_transaction_id</strong><span class="opt">optional</span>  | string | Empty | TODO: Complete description.
<strong>shipping_carrier</strong><span class="opt">optional</span>  | string | Empty | The shipping carrier used to ship the items. TODO: Find carrier enums.
<strong>shipping_confirmation</strong><span class="opt">optional</span>  | string | Empty | The unique tracking number for the shipment.

## List all charges

If no {chargeId} is specified, a list of the latest charges will be returned, and you can define how the results are paginated using the query string parameters below:

### HTTPs Request
`GET /api/v2/charges/{{chargeId}}?`

### Query String
Arguments | Datatype | Default | Description
--------- | ------- | ----------- | -----------
<strong>limit</strong><span class="opt">optional</span> | positive integer or zero | 0 | Number of charges to be included in the response (max.20).
<strong>before</strong><span class="opt">optional</span>  | string | Empty | Returns a list of charges that were created before the given charge ID. TODO: Revisit this with engineering, why no dates?
<strong>after</strong><span class="opt">optional</span>  | string | Empty | Returns a list of charges that were created after the given charge ID. TODO: Revisit this with engineering, why no dates?

# Checkout
## The checkout object
> The JSON is structured like this:

```json
{
    "merchant": {
        "public_api_key": "D61DY07EIUOBE2I8",
        "user_cancel_url": "https://webhook.site/42438270-8228-4345-81f7-50fb33b2935e",
        "user_confirmation_url": "https://webhook.site/42438270-8228-4345-81f7-50fb33b2935e",
        "name": "[TEST] MERCHANT",
        "user_confirmation_url_action": "POST"
    },
    "product": "checkout",
    "billing": {
        "phone_number": "+1-415-555-5555",
        "email": "test.user@gmail.com",
        "name": {
            "full": "John Doe",
            "last": "Doe",
            "first": "John"
        },
        "address": {
            "city": "San Francisco",
            "country": "USA",
            "zipcode": "94104",
            "line1": "650 California Street.'",
            "line2": "Floor 12",
            "state": "CA"
        }
    },
    "checkout_flow_type": "multi_use_prequal",
    "checkout_type": "merchant",
    "checkout_status": "confirmed",
    "items": {
        "49384174": {
            "sku": "49384174",
            "item_url": "https://shinta-affirm.staging.k8s.thredtest.com/product/49384174",
            "display_name": "Vismaya Scarf",
            "unit_price": 99,
            "qty": 1,
            "item_type": "physical",
            "item_image_url": "https://cf-assets-thredup.thredup.com/assets/144612397/large.jpg"
        }
    },
    "financing_program_name": "standard_3_6_12",
    "shipping": {
        "phone_number": "+1-415-555-5555",
        "email": "test.user@gmail.com",
        "name": {
            "full": "John Doe",
            "last": "Doe",
            "first": "John"
        },
        "address": {
            "city": "San Francisco",
            "country": "USA",
            "zipcode": "94104",
            "line1": "650 California Street.'",
            "line2": "Floor 12",
            "state": "CA"
        }
    },
    "currency": "USD",
    "meta": {
        "release": "false",
        "user_timezone": "America/Los_Angeles",
        "__affirm_tracking_uuid": "645dcb4d-5dfc-4400-a00c-eefbc46be0ac"
    },
    "shipping_amount": 599,
    "tax_amount": 86,
    "loan_type": "classic",
    "total": 1584,
    "config": {
        "user_confirmation_url_action": "POST"
    },
    "api_version": "v2",
    "metadata": {
        "platform_type": "Affirm Android SDK",
        "checkout_channel_type": "online",
        "platform_affirm": "1.0.12.1"
    }
}
```
Attributes | Datatype | Description
--------- | ------- | -----------
merchant | hash | TODO: Link to object.
checkout_flow_type | string | TODO: What are the possible values? looks like an ENUM.
product | string | TODO: What are the possible values? looks like an ENUM.
billing | hash | TODO: Link to object.
loan_type | hash | TODO: What are the possible values? looks like an ENUM.
checkout_type | string | TODO: What are the possible values? looks like an ENUM.
checkout_status | string | TODO: What are the possible values? looks like an ENUM.
currency | string | Three-letter ISO currency code, in uppercase. Must be a supported currency.
order_id | string | TODO: Order id.
items | hash | TODO: Link to object.
financing_program_name | string | This is the financing program tied to your checkout.
shipping | hash | TODO: Link to object.
discounts | hash | TODO: Link to object.
metadata | hash | TODO: Link to object.
meta | hash | TODO: Link to object.
shipping_amount | positive integer or zero | TODO: Add information.
tax_amount | positive integer or zero | TODO: Add information.
total | positive integer or zero | A positive integer in the smallest unit (e.g., 100 cents to charge $1.00) representing how much to charge.
config | hash | TODO: Link to object.
api_version | hash | TODO: Current API version?
merchant_external_reference | string | TODO: Same as order id.


## Create a token
## Resend a token
## Retrieve a token
# Cards
## The card object
Attributes | Datatype | Description
--------- | ------- | -----------
billing_address | hash | TODO: Link to object.
callback_id | string | TODO: What is this?
checkout_token | string | TODO: token.
created | timestamp | Time at which the charge was created. Measured in seconds since the Unix epoch.
cvv | string | 3-digit number for the card security code.
enablePostMessageSniffing | boolean | TODO: What is this?
expiration | string | Four-digit number representing the card's month and year expiration.
id | string | TODO: Same as token.
number | string | The virtual card number, as a string without any separators.

## Cancel a token
# Events
## The event object
Attributes | Datatype | Description
--------- | ------- | -----------
created | timestamp | Time at which the charge was created. Measured in seconds since the Unix epoch.
currency | string | Three-letter ISO currency code, in uppercase. Must be a supported currency.
amount | positive integer or zero | TODO: Why we pass an amount in an event?
id | string | Unique identifier for the object. TODO: What is the difference between transaction and id?
transaction_id | string | Unique identifier for the object.

> To authorize, use this code:

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
```

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
```

> Make sure to replace `meowmeowmeow` with your API key.

Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our [developer portal](http://example.com/developers).

Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: meowmeowmeow`

<aside class="notice">
You must replace <code>meowmeowmeow</code> with your personal API key.
</aside>

# Kittens

## Get All Kittens

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get()
```

```shell
curl "http://example.com/api/kittens"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let kittens = api.kittens.get();
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Max",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/api/kittens`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>

## Get a Specific Kitten

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get(2)
```

```shell
curl "http://example.com/api/kittens/2"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let max = api.kittens.get(2);
```

> The above command returns JSON structured like this:

```json
{
    "currency": "USD",
    "id": "9AEG-QOFL",
    "under_dispute": false,
    "user_id": "8919-8880-QOWR",
    "platform": "Affirm Android SDK",
    "details": {
        "merchant": {
            "public_api_key": "D61DY07EIUOBE2I8",
            "user_cancel_url": "https://webhook.site/42438270-8228-4345-81f7-50fb33b2935e",
            "user_confirmation_url": "https://webhook.site/42438270-8228-4345-81f7-50fb33b2935e",
            "name": "[TEST] NERON",
            "user_confirmation_url_action": "POST"
        },
        "financing_program_name": "standard_3_6_12",
        "loan_type": "classic",
        "billing": {
            "phone_number": "+1-415-555-5555",
            "email": "francois.n3ron@gmail.com",
            "name": {
                "full": "John Doe",
                "last": "Doe",
                "first": "John"
            },
            "address": {
                "city": "San Francisco",
                "country": "USA",
                "zipcode": "94104",
                "line1": "225 Bush Street.'",
                "line2": "Floor 16",
                "state": "CA"
            }
        },
        "checkout_type": "merchant",
        "items": {
            "49384174": {
                "sku": "49384174",
                "item_url": "https://shinta-affirm.staging.k8s.thredtest.com/product/49384174",
                "display_name": "Vismaya Scarf",
                "unit_price": 99,
                "qty": 1,
                "item_type": "physical",
                "item_image_url": "https://cf-assets-thredup.thredup.com/assets/144612397/large.jpg"
            }
        },
        "shipping": {
            "phone_number": "+1-415-555-5555",
            "email": "francois.n3ron@gmail.com",
            "name": {
                "full": "John Doe",
                "last": "Doe",
                "first": "John"
            },
            "address": {
                "city": "San Francisco",
                "country": "USA",
                "zipcode": "94104",
                "line1": "225 Bush Street.'",
                "line2": "Floor 16",
                "state": "CA"
            }
        },
        "currency": "USD",
        "meta": {
            "release": "false",
            "user_timezone": "America/Los_Angeles",
            "__affirm_tracking_uuid": "645dcb4d-5dfc-4400-a00c-eefbc46be0ac"
        },
        "shipping_amount": 599,
        "tax_amount": 86,
        "checkout_flow_type": "multi_use_prequal",
        "total": 1584,
        "config": {
            "user_confirmation_url_action": "POST"
        },
        "api_version": "v2",
        "metadata": {
            "platform_type": "Affirm Android SDK",
            "checkout_channel_type": "online",
            "platform_affirm": "1.0.12.1"
        }
    },
    "refundable": false,
    "charge_event_count": 0,
    "events": [
        {
            "created": "2019-04-04T20:21:40Z",
            "currency": "USD",
            "amount": 1584,
            "type": "auth",
            "id": "Q2YF874BJ8K1UR0Y",
            "transaction_id": "N1ydnoAVPz8Q1erD"
        }
    ],
    "pending": true,
    "merchant_external_reference": "ORDER_1554409300",
    "status": "authorized",
    "order_id": "ORDER_1554409300",
    "void": false,
    "expires": "2019-05-04T20:21:41Z",
    "payable": 0,
    "merchant_id": "5DRYHVLQ5F132I2D",
    "auth_hold": 1584,
    "refunded_amount": 0,
    "created": "2019-04-04T20:19:54Z",
    "is_instore": false,
    "amount": 1584,
    "is_marqeta_charge": false,
    "balance": 1584,
    "financing_program": "standard_3_6_12"
}
```


This endpoint retrieves a specific kitten.

<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to retrieve

## Delete a Specific Kitten

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.delete(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.delete(2)
```

```shell
curl "http://example.com/api/kittens/2"
  -X DELETE
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let max = api.kittens.delete(2);
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "deleted" : ":("
}
```

This endpoint deletes a specific kitten.

### HTTP Request

`DELETE http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to delete

