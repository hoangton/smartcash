.. meta::
   :description: The open-source SmartCash Insight REST API provides you with a convenient, powerful and simple way to read data from the SmartCash network and build your own services with it.
   :keywords: smartcash, insight, API, REST, blockchain, explorer, JSON, HTTP, blocks, index, transactions

.. _insight-api:

========================
Insight API Installation
========================

The open-source SmartCash Insight REST API provides you with a convenient,
powerful and simple way to read data from the SmartCash network and build
your own services with it. Simple HTTP endpoints exist for all common
operations on the SmartCash blockchain familiar from the Bitcore Insight API,
as well as SmartCash-specific features such as InstantSend transactions,
budget proposals, sporks and the masternode list. This documentation
describes how to set up the 
`SmartCash Insight API <https://github.com/SmartCash/insight-ui>`__ server and
(optionally) the 
`SmartCash Insight UI <https://github.com/SmartCash/insight-ui>`__ block 
explorer.

A standard installation of Ubuntu Linux 18.04 LTS will be used as an
environment for the server. We assume you are running as a user with
sudo permissions. First update all packages and install some tools and
dependencies::

  sudo apt update
  sudo apt upgrade
  sudo apt install npm build-essential libzmq3-dev

Download and extract the latest version of SmartCash NodeClient::

  cd ~
  wget https://github.com/SmartCash/Core-Smart/releases/download/v1.2.8/smartcash-1.2.8-x86_64-linux-gnu.tar.gz
  tar -xvzf smartcash-1.2.8-x86_64-linux-gnu.tar.gz
  rm smartcash-1.2.8-x86_64-linux-gnu.tar.gz


Your Insight API node will start up and begin to sync. Progress will be
displayed on stdout. Once sync is complete, the `API endpoints listed in
the documentation <https://github.com/SmartCash/insight-ui#api-http-endpoints>`_ 
will be available at::

  https://<ip-address>:3001/insight-api/<endpoint>/

The Insight UI block explorer will be available at::

  http://<ip-address:3001/insight/
