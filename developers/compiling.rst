.. meta::
   :description: Compile SmartCash NodeClient for Linux, macOS, Windows and deterministic builds
   :keywords: smartcash, build, compile, linux, Jenkins, macOS, windows, binary, gitian, developers

.. _compiling-smartcash:

===================
Compiling SmartCash NodeClient 
===================

While SmartCash offers stable binary builds on the `website
<https://smartcash.cc/wallet>`_ and on `GitHub
<https://github.com/SmartCash/Core-Smart/releases/>`_,
many users will also be interested in building SmartCash binaries for
themselves. This process has been greatly simplified with the release of
SmartCash NodeClient 1.2.6 available on GitHub to compile or cross-compile SmartCash for any platform.

The instructions to build SmartCash NodeClient 1.2.6 or older are available `here
<https://github.com/SmartCash/Core-Smart/tree/master/doc>`__ on a
previous version of this page.

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

Instructions on how to build SmartCash NodeClient 1.2.6 will appear here once the
Docker build system for Gitian is available. Instructions to create
deterministic builds of SmartCash NodeClient 1.2.6 or older are available `here
<https://github.com/SmartCash/Core-Smart/blob/master/doc/gitian-building.md>`__ 
on a previous version of this page.
