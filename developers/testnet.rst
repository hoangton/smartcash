.. meta::
   :description: SmartCash testnet and devnets are used by SmartCash developers for testing
   :keywords: smartcash, smartnodes, testnet, devnet, faucet, smartnodes, testing, pool, explorer, mining pools, block explorer

.. _testnet:

===================
Testnet and devnets
===================

With the release of SmartCash NodeClient 1.2.6, SmartCash added support for a great new
feature — **named devnets**. Devnets are developer networks that combine
some aspects of testnet (the global and public testing network) and some
aspects of regtest (the local-only regression testing mode that provides
controlled block generation). Unlike testnet, multiple independent
devnets can be created and coexist without interference. 

Testnet is a fully functioning SmartCash blockchain with the one key
exception that because the SmartCash on the network can be created freely, it
has no value. This currency, known as tSmartCash, can be requested from a
faucet to help developers test new versions of SmartCash, as well as test
network operations using identical versions of the software before they
are carried out on the mainnet. There are a few other key differences:

- Testnet operates on port 19678 (instead of 9678)
- Launching SmartCash NodeClient in testnet mode shows an blue splash screen

To start SmartCash NodeClient in testnet mode, find your smartcash.conf file and enter
the following line::

  testnet = 1

Tools and links
===============

The links below were collected from various community sources and may
not necessarily be online or functioning at any given time. 

- **Testnet for Bitcoin:** https://en.bitcoin.it/wiki/Testnet

Faucets
-------


Explorers
---------


Pools
-----
