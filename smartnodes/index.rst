.. meta::
   :description: Introduction to documentation on how to set up and operate a smartnode for the SmartCash cryptocurrency.
   :keywords: smartcash, smartnodes, hosting, linux, payment, setup

.. _smartnodes:

===========
SmartNodes
===========

SmartNodes are servers that run a SmartCash wallet and make decisions, such as locking transactions with InstantPay

This documentation focuses on understanding the services smartnodes
provide to the network, but also includes guides on how to run a
smartnode, using either a hosting provider or by setting up and
maintaining your own hosting solution. The primary requirement to run a
smartnode on the SmartCash network is 10000 SMART. This is known as the
collateral, and cannot be spent without interrupting operation of the
smartnode. The second requirement is the actual server running the SmartCash
smartnode software.

**Option 1: Hosted smartnode**

Since operating your own server requires a certain level knowledge of
blockchains and Linux server operating systems, several community
members offer dedicated hosting solutions for a fee. Taking advantage of
these services means the user only needs to provide the smartnode
collateral and pay the hosting fee in order to receive payment from the
block reward. See :ref:`these pages <smartnode-hosting>` for
information on how to set up a hosted smartnode.

**Option 2: Self-operated smartnode**

Users with a deeper understanding (or curiosity) about the inner
workings of the SmartCash network may choose to operate their own smartnode
on their own host server. Several steps are required, and the user must
assume responsibility for setting up, securing and maintaining both the
server and collateral. See these pages for information on how to set up
a self-operated smartnode.

.. toctree::
   :maxdepth: 1

   understanding.rst
   hosting.rst
   setup.rst
   maintenance.rst
   advanced.rst
