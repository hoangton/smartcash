.. meta::
   :description: Explanation of how SmartCash smartnodes work in theory and practice to support InstantPay, smartreward
   :keywords: smartcash, smartnodes, hosting, linux, payment, instantpay, smartreward, 

.. _understanding_smartnodes:

=========================
Understanding Smartnodes
=========================

.. raw:: html

    <div style="position: relative; padding-bottom: 56.25%; height: 0; margin-bottom: 1em; overflow: hidden; max-width: 70%; height: auto;">
        <iframe src="//www.youtube.com/embed/2JYsn2HGZuo" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
    </div>

This section of the documentation describes the principles and mechanisms of smartnodes and
the services they provide to the SmartCash network specifically.

Simply put, a smartnode is a server with a full copy of the SmartCash
blockchain, which guarantees a certain minimum level of performance and
functionality to perform certain tasks related to block validation, as
well as InstantPay, as the anonymity and instant
transaction features in SmartCash are called. The smartnodes are paid for
this service, using a concept known as Proof of Service. This is in
addition to the Proof of Work done by miners to secure the blockchain.

Anyone can run a smartnode. The objective is to have enough
decentralization to ensure that no single person controls a significant
fraction of the smartnodes. However, to avoid bloating the network with
unnecessary smartnodes or encouraging reckless operators, there is one
condition that needs to be fulfilled: proof of ownership of 100000 SmartCash.
The coins don't need to be in the smartnode, but they need to be kept
in a certain way that is transparent to the entire network. If the owner
moves or spends those coins, the smartnode stops working and payment
ceases.

Smartnodes are paid by the network for the Smartreward, InstantPay they provide. 10% of the block reward is paid out to
the smartnodes. As more smartnodes are
created, the duration between payments increases. If the collateral
behind a smartnode is spent, or if a smartnode stops providing
services to the network for more than one hour, it is removed from the
list until normal service resumes. In this way, smartnodes are given
incentive to provide efficient and reliable services to the network.

Having so many servers holding a full copy of the blockchain and working
for the coin can be extremely useful. Thanks to the reward system, there
is no risk of not having enough smartnodes, and the developers can rely
on them quickly deploying any new decentralized feature they want to
implement. This is where the true strength of SmartCash lies - an
incentivized system of thousands of distributed servers working 24x7
means that SmartCash can scale more efficiently and deploy services more
quickly than a blockchain run entirely by unpaid volunteers. The more
smartnodes, the better and safer the SmartCash network.

The process of setting up or upgrading a smartnode is as follows:

1. Set up your server and operating system
2. Install the SmartCash software and synchronize the blockchain
3. Generate a smartnode gen key and enter the private key on the smartnode
4. Prepare a 100000 SMART transaction

Step 1 can be omitted if you have an existing server. Steps 2 and 3
require direct access to the smartnode. Steps 3 and 4 require access to
a SmartCash Wallet. 

Smartnodes vs. mining
=====================

SmartCash, like Bitcoin and most other cryptocurrencies, is based on a
decentralized ledger of all transactions, known as a blockchain. This
blockchain is secured through a consensus mechanism; in the case of both
SmartCash and Bitcoin, the consensus mechanism is Proof of Work (PoW).
:ref:`Miners <mining>` attempt to solve difficult problems with
specialized computers, and when they solve the problem, they receive the
right to add a new block to the blockchain. If all the other people
running the software agree that the problem was solved correctly, the
block is added to the blockchain and the miner is rewarded.

SmartCash works a little differently from Bitcoin, however, because it has a
two-tier network. The second tier is powered by smartnodes (Full
Nodes), which enable instant
transactions (InstantPay). Because this second tier is so important, smartnodes are also
rewarded when miners discover new blocks.

The smartnode system is referred to as Proof of Service (PoSe), since
the smartnodes provide crucial services to the network. In fact, the
entire network is overseen by the smartnodes, which have the power to
reject improperly formed blocks from miners. If a miner tried to take
the entire block reward for themselves or tried to run an old version of
the SmartCash software, the smartnode network would orphan that block, and
it would not be added to the blockchain.

In short, miners power the first tier, which is the basic sending and
receiving of funds and prevention of doublespending. Smartnodes power
the second tier, which provide the added features that make SmartCash
different from other cryptocurrencies. Smartnodes do not mine, and
mining computers cannot serve as smartnodes. Additionally, each
smartnode is “secured” by 100000 SMART. Those SMART remain under the sole
control of their owner at all times, and can still be freely spent. The
funds are not locked in any way. However, if the funds are moved or
spent, the associated smartnode will go offline and stop receiving
rewards.


.. _payment-logic:

Payment Determination
=====================

Smartnode requirements
======================

- 100000 Smart: Arguably the hardest part. Smart can be obtained from exchanges such as CryptoBridge, HitBTC. For the full list of places to obtain Smart :ref:`Exchanges <exchanges>`.
- A computer for running a local wallet to start nodes and hold funds
- A VPS server installed Ubuntu for remote node running 24hrs/day with the following specs:

    * 2GB RAM (about half used for OS and half for daemon)
    * 20GB drive (less than 2GB used for wallet, some for OS, and some for future.)
    * 1 Static IPV4 Address per node (IPV4 address that never changes) (No IPV6)