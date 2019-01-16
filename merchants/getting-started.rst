.. meta::
   :description: Guide for merchants getting started with SmartCash. Online and offline payment processors
   :keywords: smartcash, pos, merchants, payment processor, store, wordpress, woocommerce, coinpayments, point of sale

.. _merchants:

.. include:: <isopub.txt>

===============
Getting Started
===============

SmartCash welcomes new merchants and supports integration through a
standardised onboarding process. It's easy to begin accepting payments
in SmartCash and enjoy the following benefits:

- Settlement within seconds and clearance within minutes
- Ability to accept payments from any market around the world
- Irreversible transactions to prevent fraud
- Advanced privacy for both customers and merchants
- Lowest fees in the industry

A three-part course on why SmartCash is a popular choice for payments and how
integration takes place is available in English on
`Find SmartCash <https://find.smartcash.cc/for-merchants/>`_. 

Many major merchants accept SmartCash - check out `Taco
<https://www.taco.com.br/>`__ or `boralatour
<https://boralatour.com.br/>`__ for examples of what merchant integration
can look like. Once you are up and running accepting SmartCash, consider
adding your business to the directory maintained at `Find SmartCash
<https://find.smartcash.cc>`_ for increased visibility.

Payment Processors
==================

This section lists known payment processors supporting SmartCash and the
business platforms they support. Please conduct thorough research before
choosing a payment provider to ensure your needs will be met. 

For more advanced payment processing needs, such as for high risk
merchant accounts in industries challenged with high levels of
chargebacks, it is recommended to contact SmartCash partner `Coinpayments
<https://www.coinpayments.net/>`__.


Online Stores
-------------

Due to the wide range of platforms for online stores, the following
table is intended to help you select an appropriate payment processor
for your existing store.

`CoinPayments <https://www.coinpayments.net>`_ 


Point of Sale
-------------

A range of Point of Sale systems are available. Many function as an app
or simple website serving a checkout interface and QR code generator,
while others support custom features such as NFC or a rewards scheme. SmartPay and SmartCard are
particularly widespread.

https://card.smartcash.cc/
https://business.smartcash.cc/

Installation Examples
=====================

This section contains worked examples of how to install, configure and
process your first payment using the payment processors listed in this
documentation.

https://find.smartcash.cc/a-guide-to-accepting-smartcash-payments-for-your-online-store/

WooCommerce and CoinPayments.net
--------------------------------

If your online store is built on WooCommerce, you can simply install
CoinPayments as an additional payment gateway and immediately begin
accepting SmartCash. This guide assumes you have already `installed Wordpress
<https://codex.wordpress.org/Installing_WordPress>`_, `installed
WooCommerce <https://docs.woocommerce.com/document/installing-
uninstalling-woocommerce/>`_ and `created at least one product
<https://docs.woocommerce.com/document/managing-products>`_ in your
store. A `video <https://www.youtube.com/watch?v=Xa2o_8s3RNY>`_ of the
process to install the CoinPayments payment processor is also available.

In your WordPress administration backend, select **Plugins -> Add New**
and type "coinpayments.net" into the search box. A plugin named
**CoinPayments.net Payment Gateway for WooCommerce** should appear.
Click **Install Now** to install the plugin. Alternatively, you can
`download the plugin <https://wordpress.org/plugins/coinpayments-
payment-gateway-for-woocommerce>`_ from the WordPress website as a zip
file and upload it using the **Upload Plugin** button. Once the plugin
is installed, click **Activate** to begin configuration.

.. figure:: img/coinpayments-plugin.png
   :width: 400px

   Installing the CoinPayments.net WooCommerce plugin

Next, go to CoinPayments.net and `sign up
<https://www.coinpayments.net/register>`_ to create an account. Once you
are logged in, go to **Account -> Coin Acceptance Settings** and enable
SmartCash, as well as optionally entering a withdrawal address. Next, go to
**Account -> Account Settings** and copy **Your Merchant ID** from the
**Basic Settings** area into a text file. Then navigate to the
**Merchant Settings** section and enter a long, random series of
characters for the **IPN Secret**. Copy this code to your temporary file
as well.

Back in the WordPress plugins section, click the **Settings** button for
the WooCommerce plugin and navigate to **Checkout -> CoinPayments.net**
section. Ensure the CoinPayments plugin is enabled here, then enter the
**Merchant ID**, **IPN Secret** and **Description** in the appropriate
fields as shown below. Click **Save Changes** when you are ready.

.. figure:: img/coinpayments-settings.png
   :width: 550px

   Configuring the CoinPayments.net WooCommerce plugin

Your customers will now see an option to pay with SmartCash when completing
the checkout process for an order. The payment will be processed by
CoinPayments.net, and you will receive emails detailing each purchase
procedure. You can choose how often you want to withdraw your payments,
to which SmartCash address and various other options in the CoinPayments
administration section. See the `CoinPayments Documentation
<https://www.coinpayments.net/help>`_ or `Merchant Tools
<https://www.coinpayments.net/merchant-tools>`_ for more information.

.. image:: img/coinpayments-order.png
   :width: 150px
.. image:: img/coinpayments-confirm.png
   :width: 400px
.. image:: img/coinpayments-scan.png
   :width: 250px

.. figure:: img/coinpayments-paid.png
   :width: 250px

   Completing payment through the CoinPayments.net payment processor
