.. meta::
   :description: Maintaining a SmartCash smartnode involves staying up to date with the latest version, voting and handling payments
   :keywords: SmartCash, cryptocurrency, smartnode, maintenance, maintain, payments, withdrawal, monitoring, upgrade, deterministic

.. _smartnode-maintenance:

===========
Maintenance
===========

smartnodes require regular maintenance to ensure you do not drop off
the payment queue. This includes promptly installing updates to SmartCash, as
well as maintaining the security and performance of the server.


.. _smartnode-update:

smartnode Software Update
==========================

The SmartCash NodeClient software requires regular updates in order to remain
consistent with the current network consensus. Depending on whether you
installed SmartCash manually or using ppa, you must follow the procedure
appropriate for your smartnode, as described below.


Option 1: Updating from ppa
---------------------------------

To update SmartCash using ppa, log in to your server and enter the
following commands::

    sudo  apt-get update && apt-get upgrade -y && 
    smartcash-cli stop && sleep 20 && 
    smartcashd

Check the status of your smartnode::

      smartcash-cli smartnode status

The SmartCash software on the smartnode is now updated.


Option 2: Manual update
-----------------------

To update SmartCash manually, log in to your server using ssh or PuTTY. If
your crontab contains an entry to automatically restart smartcashd, invoke
``crontab -e`` and comment out the appropriate line by adding the ``#``
character. It should look something like this::

      # * * * * * pidof smartcashd || smartcashd

Then stop SmartCash running::

      smartcash-cli stop

Visit the `GitHub releases page
<https://github.com/SmartCash/Core-Smart/releases/>`_ and copy the link to the
latest x86_64-linux-gnu version. Go back to your terminal window and
enter the following command, pasting in the address to the latest
version of SmartCash Core by right clicking or pressing **Ctrl + V**::

    cd /tmp
    wget https://github.com/SmartCash/Core-Smart/releases/download/v1.2.6/smartcash-1.2.6-x86_64-linux-gnu.tar.gz

Verify the integrity of your download by running the following command
and comparing the output against the value for SHA256 Checksum

    sha256sum smartcash-1.2.6-x86_64-linux-gnu.tar.gz
Extract the compressed archive and run wallet from this directory::

    tar xfv smartcash-1.2.6-x86_64-linux-gnu.tar.gz
    cd smartcash-1.2.6/bin/
    smartcashd

You will see a message reading "SmartCash Wallet starting". 
Finally, uncomment the line to automatically restart SmartCash in your
crontab by invoking ``crontab -e`` again and deleting the ``#``
character.

The SmartCash software on the smartnode is now updated.

Monitoring
==========
Goto http://discord.smartcash.cc
use @SmartNodeMonitor#5083
> You can use this bot to monitor your SmartNodes and subscribe event notifications. Once you added your nodes with add and enabled the desired notifications with the commands below you will receive a message from the bot on each occured event!

> Common commands

> help - Print this help
> info - Print the current status of the SmartNode network
> faq - Print the frequently asked question

> User commands

> status :enabled - Set :enabled to 0 to disable or to 1 to receive a notification when one of your node's status changed.
> reward :enabled - Set :enabled to 0 to disable or to 1 to receive a notification each time one of your nodes received a reward.
> network :enabled - Set :enabled to 0 to disable or to 1 to enable network notifications

> me - List your user info and notification states


> Node configuration

> add ip0;name0 ip1;name1 ... ipN;nameN - Add one or multiple nodes. Use a list of ip;name pairs as arguments.
>   Example: add 23.123.213.11;Node1 22.122.212.12;Node2
> update :ip :newname - Change the name of a node with its IP-Address
> remove :ip - Remove one of your nodes with its IP-Address

> Node review

> lookup ip0 .. ipN - Check the payout requirements of one or multiple nodes
> balance - List the SMART balances of your SmartNodes
> detail - List all details of your SmartNodes
> nodes - List only the status and last payments of your nodes
> top :filter - List only the eligible nodes in the payout zone (Top 10% of the queue) per default. You can use the optional :filter argument to list other ranges (10 - 100). Examples: top 20 For the top 20% of the queue, top 40 For the top 40%.
> history - List information about past payouts of your SmartNodes

smartnode monitoring tools
===========================

Several sites operated by community members are available to monitor key
information and statistics relating to the smartnode network.

Block Explorers
---------------

Since SmartCash is a public blockchain, it is possible to use block explorers
to view the balances of any SmartCash public address, as well as examine the
transactions entered in any given block. Each unique transaction is also
searchable by its txid. A number of block explorers are available for
the SmartCash network.

- `Ccore <https://smart.ccore.online/>`__ offers a `SmartCash blockchain
  explorer <https://smart.ccore.online/>`__ and a `function
  <https://smart.ccore.online/masternodes>`__ to view and map
  SmartCash smartnodes.
- `CoinCheckup <https://coincheckup.com/coins/SmartCash/charts>`__ offers a
  range of statistics and data on most blockchains, including SmartCash.
- `explorer.smartcash.cc <http://eexplorer.smartcash.cc/>`__ and
  `insight.smartcash.cc <http://insight.smartcash.cc/>`__.
  
SmartCash smartstats smartnode
------------------------------

https://smartstats.cc/smartnodes

This site, offers a visual representation of many key statistics of the SmartCash
smartnode network, including graphs of the total smartnode count over
time, price information and network distribution.
