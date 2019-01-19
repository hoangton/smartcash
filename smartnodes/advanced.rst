.. meta::
   :description: Installing Dash using a package manager
   :keywords: smartcash, cryptocurrency, fedora, ubuntu, rpm, apt, git, smartnode, install, binary

.. _smartnode_advanced:

===============
Advanced Topics
===============


Installing SmartCash on Windows VPS
===================================

Install wallet as normal. 
We need to create a configuration file smartcash.conf this file locale `Data folder <https://smartcash.freshdesk.com/support/solutions/articles/35000027195-where-is-the-data-folder-for-my-desktop-smartcash-wallet-stored->`_
specifying several variables. Copy and paste the following text to get
started, then replace the variables specific to your configuration as
follows::

  #----
  rpcuser=XXXXXXXXXXXXX
  rpcpassword=XXXXXXXXXXXXXXXXXXXXXXXXXXXX
  rpcallowip=127.0.0.1
  port=9678
  #----
  listen=1
  server=1
  daemon=1
  maxconnections=64
  #----
  smartnode=1
  smartnodeprivkey=XXXXXXXXXXXXXXXXXXXXXXX
  externalip=XXX.XXX.XXX.XXX
  #----

Replace the fields marked with ``XXXXXXX`` as follows:

- ``rpcuser``: enter any string of numbers or letters, no special
  characters allowed
- ``rpcpassword``: enter any string of numbers or letters, no special
  characters allowed
- ``smartnodeprivkey``: this is the legacy smartnode private key you
  generated in the previous step
- ``externalip``: this is the IP address of your VPS

The result should look something like this:

.. figure:: img/setup-manual-conf.png
   :width: 400px

   Entering smartnode genkey data in smartcash.conf


