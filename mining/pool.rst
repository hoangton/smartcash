.. meta::
   :description: Guide to setting up a SmartCash Pool node
   :keywords: smartcash, mining, keccak, pool, node, pool, software, ASIC, mining pool

.. _pool:

===========================
SmartCash Mining Pool Setup 
===========================

You need filled this SmartMine Signing Key Request Form 
https://docs.google.com/forms/d/e/1FAIpQLSdvllk5adChGzLBUkCHS0EpAPRtQ85T2-HXkGlerNFr6kf-gw/formResponse

Setting up the host server
==========================

Download a copy of Ubuntu Server LTS from
https://www.ubuntu.com/download/server and install it on your system
according to the steps described `here
<https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-
server>`__. If you are using a VPS such as Vultr or AWS, your provider
will most likely provide an option to install this system during
provisioning. Ensure you enable OpenSSH server during setup so you can
control your server from a remote console. Once you have access to your
server, create a new non-root user if you have not already done so using
the following command, replacing ``<username>`` with a username of your
choice::

  adduser <username>

You will be prompted for a password. Enter and confirm using a new
password (different to your root password) and store it in a safe place.
You will also see prompts for user information, but this can be left
blank. Once the user has been created, we will add them to the sudo
group so they can perform commands as root::

  usermod -aG sudo <username> 

Reboot your server and log in as the new user. At this point it is
recommended to connect remotely using `PuTTY
<https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html>`_ (for
Windows) or ssh (for Linux and macOS) if you have not already done so.

Setting up port forwarding
==========================

If you are on a private network behind a router, you will need to set up
port forwarding for at least port 9678 (UDP/TCP). How this is done depends on your particular
network router and is therefore beyond the scope of this documentation.
Guides to setting up port forwarding can be found `here
<https://www.wikihow.com/Set-Up-Port-Forwarding-on-a-Router>`__ and `here
<http://www.noip.com/support/knowledgebase/general-port-forwarding-
guide/>`__.

Take note of your IP address either from your router management
interface or by visiting https://www.whatismyip.com


Option 1: Automated script setup
================================

Option 2: Manual setup
======================

First update your operating system as follows::

  sudo apt update
  sudo apt upgrade

Setting up smartcashd
---------------------

Pool requires a full SmartCash node to be running to get block and
transaction data. To download and install SmartCash, visit
https://smartcash.cc/wallets/#nodeclient on your computer to find the link to the
latest SmartCash Node Client wallet. Click **Linux**, then right-click on **Download
TGZ** for **SmartCash Node Client Linux 64 Bit** and select **Copy link address**.
Go back to your terminal window and enter the following command, pasting
in the address to the latest version of SmartCash Core by right clicking or
pressing **Ctrl + V**::

    cd ~
    wget https://github.com/SmartCash/Core-Smart/releases/download/v1.3.0/smartcash-1.3.0-x86_64-linux-gnu.tar.gz


Verify the integrity of your download by running the following command
and comparing the output against the value on https://github.com/SmartCash/Core-Smart/releases/

  sha256sum smartcash-1.3.0-x86_64-linux-gnu.tar.gz

Create a working directory for SmartCash, extract the compressed archive,
copy the necessary files to the directory and set them as executable::

  mkdir .nodeclient
  tar xfvz smartcash-1.3.0-x86_64-linux-gnu.tar.gz
  cp smartcash-1.3.0/bin/smartcashd .nodeclient/
  cp smartcash-1.3.0/bin/smartcash-cli .nodeclient/
  chmod 777 .nodeclient/smartcash*

Clean up unneeded files::

  rm smartcash-1.3.0-x86_64-linux-gnu.tar.gz
  rm -r smartcash-1.3.0

Create a configuration file using the following command::

  nano ~/.nodeclient/smartcash.conf

An editor window will appear. We now need to create a configuration file
specifying several variables. Copy and paste the following text to get
started, then replace the variables specific to your configuration as
follows::

  #----
  rpcuser=XXXXXXXXXXXXX
  rpcpassword=XXXXXXXXXXXXXXXXXXXXXXXXXXXX
  rpcallowip=127.0.0.1
  #----
  listen=1
  server=1
  daemon=1
  maxconnections=64
  #----


Replace the fields marked with ``XXXXXXX`` as follows:

- ``rpcuser``: enter any string of numbers or letters, no special
  characters allowed
- ``rpcpassword``: enter any string of numbers or letters, no special
  characters allowed

Press **Ctrl + X** to close the editor and **Y** and **Enter** save the
file. You can now start running SmartCash on the masternode to begin
synchronization with the blockchain::

  ~/.nodeclient/smartcashd

You will see a message reading **SmartCash Node Client server starting**. You can
continue with the following steps and check synchronization periodically
using the following command. Synchronization is complete when the number
of ``blocks`` is equal to the current number of blocks in the SmartCash
blockchain, as can be seen from any synchronized SmartCash wallet or `block
explorer <https://insight.smartcash.cc/>`_::

  ~/.nodeclient/smartcash-cli getblockcount

Setting up Pool
---------------
