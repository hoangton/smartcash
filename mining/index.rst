.. meta::
   :description: Information and guides on how to mine the SmartCash cryptocurrency
   :keywords: smartcash, mining, keccak, smartnode, GPU, ASIC, software, hardware, pool, mining pools

.. _mining:

======
Mining
======

Mining in the context of cryptocurrency such as smartcash refers to the
process of searching for solutions to cryptographically difficult
problems as a method of securing blocks on the blockchain. The process
of mining creates new currency tokens as a reward to the miner. Mining
is possible on a range of hardware. smartcash implements an algorithm known
as :ref:`keccak <keccak-hash-algorithm>`, which the miner must solve in order
to earn rewards.

The simplest and most general hardware available for mining is the
general purpose CPU present in every computer. A CPU is designed to be
versatile but offers less efficiency than a GPU, which is designed to
rapidly calculate millions of vectors in parallel. While specific CPU
instruction enhancements related to cryptography such as AES or AVX can
provide a decent boost, GPUs offer a significant performance increase
due to their multiple pipelines capable of processing the predictably
repetitive calculations associated with cryptocurrency mining. Finally,
ASICs are relatively inflexible and can only process the specific
function(s) for which they were designed, but at an even faster rate
than the more general purpose GPUs and CPUs. The result is a currency which is more
secure against brute force attacks on the smartcash blockchain.

The profitability of mining is determined by the hashrate of your mining
device, the current network difficulty and the costs of your hardware
and electricity. The following links provide up to date information:

- `Hashrate <https://smartstats.cc/mining>`_
- `Mining difficulty <https://smartstats.cc/mining>`_
- `Profitability calculation tool <https://whattomine.com/coins/197-smart-keccak>`_

smartnodes vs. Mining
======================

smartcash, like Bitcoin and most other cryptocurrencies, is based on a
decentralized ledger of all transactions, known as a blockchain. This
blockchain is secured through a consensus mechanism; in the case of both
smartcash and Bitcoin, the consensus mechanism is Proof of Work (PoW). Miners
attempt to solve difficult problems with specialized computers, and when
they solve the problem, they receive the right to add a new block to the
blockchain. If all the other people running the software agree that the
problem was solved correctly, the block is added to the blockchain and
the miner is rewarded.

smartcash works a little differently from Bitcoin, however, because it has a
two-tier network. The second tier is powered by :ref:`smartnodes
<smartnodes>` (Full Nodes), which enable instant transactions (InstantPay). Because this second tier is so important,
smartnodes are also rewarded when miners discover new blocks.

The smartnode system is referred to as Proof of Service (PoSe), since
the smartnodes provide crucial services to the network. In fact, the
entire network is overseen by the smartnodes, which have the power to
reject improperly formed blocks from miners. If a miner tried to take
the entire block reward for themselves or tried to run an old version of
the smartcash software, the smartnode network would orphan that block, and
it would not be added to the blockchain.

In short, miners power the first tier, which is the basic sending and
receiving of funds and prevention of doublespending. smartnodes power
the second tier, which provide the added features that make smartcash
different from other cryptocurrencies. smartnodes do not mine, and
mining computers cannot serve as smartnodes. Additionally, each
smartnode is “secured” by 10000 smartcash. Those smartcash remain under the sole
control of their owner at all times, and can still be freely spent. The
funds are not locked in any way. However, if the funds are moved or
spent, the associated smartnode will go offline and stop receiving
rewards.

.. _mining-pools:

Mining Pools
============

Mining smartcash in pools is more likely to generate rewards than solo mining directly on the blockchain.

Official Pool 0%Fee
1	eu-mine.smartcash.cc
2	asia-mine.smartcash.cc
3	us-mine.smartcash.cc

Other pools are also available and may be advantageous for different
reasons such as ping latency, uptime, fee, users, etc.:

- https://nlpool.nl/ (keccak)
- https://blake2s.com/ (keccak)
- http://antminepool.com/ (keccak)

DISCLAIMER: This list is provided for informational purposes only.
Services listed here have not been evaluated or endorsed by the smartcash
developers and no guarantees are made as to the accuracy of this
information. Please exercise discretion when using third-party services.
If you’d like to be added to this list please reach out to
hoangton@smartcash.cc

In addition to joining a pool, you will also need to create a smartcash
address to receive your payout. To do this in smartcash NodeClient wallet, see
:ref:`here <nodeclient-send-receive>`.

.. toctree::
   :hidden:
   :includehidden:
   :maxdepth: 1

   pool.rst


CPU Mining
==========

Please note that the prevalence of GPU and ASIC miners mean that unless you have free electricity, this is highly unlikely to be profitable! 

GPU Mining
----------
https://smartcash.freshdesk.com/support/solutions/articles/35000041431-tutorial-how-to-mine-smartcash-in-mining-pool

Tips
----

Reduce the number of threads for added desktop usability and heat
reduction. If the CPU temperature is too high, consider fitting a new
fan and check that the heat sink thermal paste on the CPU is adequate.
Tweak the processor clock speed for added performance using a
motherboard controller like `AI Suite
<https://www.asus.com/support/FAQ/1012780/>`_ for Asus motherboards.
Reduction of CPU core voltage will result in lower temperature but
increased instability.

Try to select a pool that is nearby to reduce network latency. If the
node appears slow, switch to another location. Please distribute the
hashing power globally to different pools to avoid forking.
