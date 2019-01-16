.. meta::
   :description: How to download, install and encrypt the SmartCash Node Client wallet in Windows
   :keywords: smartcash, core, wallet, windows, installation

.. _nodeclient-installation-windows:

Windows Installation Guide
==========================

This guide describes how to download, install and encrypt the SmartCash Node Client
wallet for Windows. The guide is written for Windows 10, but the steps
should be similar for Windows XP, Vista, 7 and 8.

Downloading the SmartCash Node Client wallet
--------------------------------

Visit https://smartcash.cc/wallets/#nodeclient to download the latest SmartCash Node Client
wallet. You will need to manually choose your
operating system and whether you need a 32 or 64 bit version. If you are
unsure whether your version of Windows is 32 or 64 bit, you can check in
Windows 10 under **Start > Settings > System > About**. For details on
how to check this in other versions of Windows, see
`here <https://www.lifewire.com/am-i-running-a-32-bit-or-64-bit-version-of-windows-2624475>`__.

   Under the System section, click About to view the System type. This is
   a 64 bit system.
Save the file you downloaded to your Downloads folder.

Verifying SmartCash Node Client
-------------------

This step is optional, but recommended to verify the integrity of the
file you downloaded. To do this, open **Command Prompt**, browse to the location 
where you saved the file, and run the following command, replacing the 
version with the specific version of the file you downloaded.

::

    certutil -hashfile smartcash-1.2.6-win64-setup.exe SHA256

If the hashes match, then you have an authentic copy of SmartCash Node Client for
Windows.

Running the SmartCash Node Client installer
-------------------------------

Double-click the file to start installing SmartCash Node Client.

At this point, you may see a warning from Windows SmartScreen that the
app is unrecognized. You can safely skip past this warning by clicking
**More info**, then **Run anyway**.
   Bypassing Windows SmartScreen to run the app. This warning is known 
   as a “false positive”.

The installer will then guide you through the installation process.

Click through the following screens. All settings can be left at their
default values unless you have a specific reason to change something.

   Installation is complete

Running SmartCash Node Client for the first time
------------------------------------

Once installation is complete, SmartCash Node Client will start up immediately. If
it does not, click **Start > SmartCash > SmartCash** to start the
application. The first time the program is launched, you will be offered
a choice of where you want to store your blockchain and wallet data.
Choose a location with enough free space, as the blockchain can reach
10GB+ in size. It is recommended to use the default data folder
if possible.

SmartCash Node Client will then start up. This will take a little longer than usual
the first time you run it, since SmartCash Node Client needs to generate
cryptographic data to secure your wallet.
Synchronizing SmartCash Node Client to the SmartCash network
-------------------------------------------

Once SmartCash Node Client is successfully installed and started, you will see the
wallet overview screen. You will notice that the wallet is “out of
sync”, and the status bar at the bottom of the window will show the
synchronization progress.
During this process, SmartCash Node Client will download a full copy of the SmartCash
blockchain from other nodes to your device. Depending on your internet
connection, this may take a long time. If you see the message “No block
source available”, check your internet connection. When synchronization
is complete, you will see a small blue tick in the lower right
corner.

You can now begin to use your wallet to send and receive funds.

Encrypting your SmartCash wallet
---------------------------

After your wallet has synchronized with the SmartCash network, it is strongly
advised to encrypt the wallet with a password or passphrase to prevent
unauthorized access. You should use a strong, new password that you have
never used somewhere else. Take note of your password and store it
somewhere safe or you will be locked out of your wallet and lose access
to your funds.

To encrypt your wallet, click **Settings > Encrypt Wallet**.
When the encryption process is complete, you will see a warning that
past backups of your wallet will no longer be usable, and be asked to
shut down SmartCash Node Client. When you restart SmartCash Node Client, you will see a small
blue lock in the lower right corner.

You can now begin to use your wallet to safely send and receive funds.
