.. meta::
   :description: Compile SmartCash NodeClient for Linux, macOS, Windows and deterministic builds
   :keywords: smartcash, build, compile, linux, Jenkins, macOS, windows, binary, gitian, developers

.. _compiling-smartcash:

==============================
Compiling SmartCash NodeClient 
==============================

While SmartCash offers stable binary builds on the `website
<https://smartcash.cc/wallet>`_ and on `GitHub
<https://github.com/SmartCash/Core-Smart/releases/>`_,
many users will also be interested in building SmartCash binaries for
themselves. This process has been greatly simplified with the release of
SmartCash NodeClient available on GitHub to compile or cross-compile SmartCash for any platform.

The instructions to build SmartCash NodeClient 1.2.6 or older are available `here
<https://github.com/SmartCash/Core-Smart/tree/master/doc>`__ on a
previous version of this page.

Step 1. Install dependencies required for the SmartCash Wallet
--------------------------------------------------------------

:

    sudo apt-get install checkinstall subversion git git-core build-essential
    sudo apt-get install libssl-dev libboost-dev libboost-system-dev libboost-filesystem-dev libboost-program-options-dev libboost-thread-dev libcurl4-openssl-dev libminiupnpc-dev

Step 2. Installing BerkeleyDB4.8 from source
--------------------------------------------

(Most Wallets use 4.8 whereas most repositories contain 5.3+)
 
 
:


    cd ~/
    wget http://download.oracle.com/berkeley-db/db-4.8.30.tar.gz
    tar xvf db-4.8.30.tar.gz
    cd ~/db-4.8.30/build_unix
    ../dist/configure --enable-cxx
    make

this might take a while - even on RPi3


:


    sudo make install
    export BDB_INCLUDE_PATH="/usr/local/BerkeleyDB.4.8/include"
    export BDB_LIB_PATH="/usr/local/BerkeleyDB.4.8/lib"
    sudo ln -s /usr/local/BerkeleyDB.4.8/lib/libdb-4.8.so /usr/lib/libdb-4.8.so
    sudo ln -s /usr/local/BerkeleyDB.4.8/lib/libdb_cxx-4.8.so /usr/lib/libdb_cxx-4.8.so

Link libminiupnpc

:


    sudo ln -s /usr/lib/libminiupnpc.so.5 /usr/lib/libminiupnpc.so.10

Step 3. Compile smartcashd from source
--------------------------------------
If this is your first time compiling a binary be aware that the build process can take a while to complete.

:


    $ cd ~
    $ git clone https://github.com/SmartCash/Core-Smart.git # clone SmartCash repository locally
    $ cd smartcash # Go to repository directory
    $ git tag # Retrieve a list of tags and find the most recent stable tag.
    $ git checkout 1.2.6 # Grab correct version
    $ cd src # Go to source directory
    $ sudo dd if=/dev/zero of=/swapfile bs=64M count=16 # extra swap partition for speed
    $ sudo mkswap /swapfile
    $ sudo swapon /swapfile
    $ make -f makefile.unix # Build smartcashd. This can take up hours and will produce a binary : smartcashd
    $ strip smartcashd # Reduce file size by stripping symbols
    $ sudo mv smartcashd /usr/bin/smartcashd && sudo chmod a+x /usr/bin/smartcashd # move smartcashd and make it executable
    $ sudo rm -r ~/smartcash/ # Remove directory with sources (optional)
    $ sudo swapoff /swapfile# clean up the previously initiated swap
    $ sudo rm /swapfile

You're done and should now have the smartcashd daemon installed. To run this binary simply start the daemon with::

    smartcashd -daemon

You can check on your wallet daemon with::

    smartcashd getinfo

.. _gitian-build:

Gitian
======

Gitian is the deterministic build process that is used to build the SmartCash
Core executables. It provides a way to be reasonably sure that the
executables are really built from the source on GitHub. It also makes
sure that the same, tested dependencies are used and statically built
into the executable. Multiple developers build the source code by
following a specific descriptor ("recipe"), cryptographically sign the
result, and upload the resulting signature. These results are compared
and only if they match, the build is accepted and uploaded to SmartCash.org.

Instructions on how to build SmartCash NodeClient 1.2.6 will appear here once the Docker build system for Gitian is available. Instructions to create
deterministic builds of SmartCash NodeClient 1.2.6 or older are available `here
<https://github.com/SmartCash/Core-Smart/blob/master/doc/gitian-building.md>`__ 
on a previous version of this page.
