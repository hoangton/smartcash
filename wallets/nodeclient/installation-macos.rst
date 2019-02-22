.. meta::
   :description: How to download, install and encrypt the SmartCash NodeClient wallet in macOS
   :keywords: smartcash, core, wallet, macos, installation

.. _nodeclient-installation-macos:

macOS Installation Guide
========================

This guide describes how to download, install and encrypt the SmartCash NodeClient
wallet for macOS. The guide is written for macOS Sierra, but the steps
should be similar for other versions.

Downloading the SmartCash NodeClient wallet
--------------------------------------------

Visit https://smartcash.cc/wallets/#nodeclient to download the latest SmartCash NodeClient wallet. 
Save the file you downloaded to your Downloads folder.

Verifying SmartCash NodeClient
------------------------------

This step is optional, but recommended to verify the integrity of the
file you downloaded. This is done by checking its SHA256 hash against
the hash published by the SmartCash NodeClient development team. To do this, open **Terminal**, browse to the location where you
saved the file, and run the following command, replacing the version
with the specific version of the file you downloaded::

   shasum -a 256 smartcash-1.2.8-osx.dmg

   Generating an SHA256 hash for the downloaded file

If the hashes match, then you have an authentic copy of SmartCash NodeClient for
macOS.

Installing SmartCash NodeClient
-------------------------------

Open Finder and browse to your Downloads folder. Then double-click on
the .dmg file you downloaded to decompress it. A window appears showing
the contents of the file.

Drag the SmartCash NodeClient application file into your Applications folder to
install SmartCash NodeClient.

Running SmartCash NodeClient for the first time
-------------------------------------------------

To run SmartCash NodeClient for the first time, either open Launchpad or browse to
your **Applications** folder in Finder. Double-click **SmartCash** or
**SmartCash-Qt** to start the application. You may see a warning about
opening an app from an unidentified developer. To resolve this problem,
simply Control-click the app icon and choose **Open** from the shortcut
menu, then click **Open** again in the dialog box. The app is saved as
an exception to your security settings, and you can open it in the
future by double-clicking it just as you can any registered app.
The first time the program is launched, you will be offered a choice of
where you want to store your blockchain and wallet data. Choose a
location with enough free space, as the blockchain can reach 10GB+ in
size. It is recommended to use the default data folder if possible.

SmartCash NodeClient will then start up. This will take a little longer than usual
the first time you run it, since SmartCash NodeClient needs to generate
cryptographic data to secure your wallet.

Synchronizing SmartCash NodeClient to the SmartCash network
--------------------------------------------------------------

Once SmartCash NodeClient is successfully installed and started, you will see the
wallet overview screen. You will notice that the wallet is “out of
sync”, and the status bar at the bottom of the window will show the
synchronization progress.

During this process, SmartCash NodeClient will download a full copy of the SmartCash
blockchain from other nodes to your device. Depending on your internet
connection, this may take a long time. If you see the message “No block
source available”, check your internet connection. When synchronization
is complete, you will see a small blue tick in the lower right corner.

You can now begin to use your wallet to send and receive funds.

Encrypting your SmartCash wallet
--------------------------------

After your wallet has synchronized with the SmartCash network, it is strongly
advised to encrypt the wallet with a password or passphrase to prevent
unauthorized access. You should use a strong, new password that you have
never used somewhere else. Take note of your password and store it
somewhere safe or you will be locked out of your wallet and lose access
to your funds.

To encrypt your wallet, click **Settings** > **Encrypt Wallet**.
When the encryption process is complete, you will see a warning that
past backups of your wallet will no longer be usable, and be asked to
shut down SmartCash NodeClient. When you restart SmartCash NodeClient, you will see a small
blue lock in the lower right corner.

You can now begin to use your wallet to safely send and receive funds.
