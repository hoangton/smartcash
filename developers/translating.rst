.. meta::
   :description: Translate SmartCash products such as wallets, websites and documentation using Transifex
   :keywords: smartcash, translate, localize, syntax, website, android, ios, wallets, documentation, SmartCash nodeclient

.. _translating-smartcash:

=====================
Translating SmartCash
=====================

Translations of all SmartCash products are managed courtesy of Transifex,
which offers its own detailed documentation of all functions and
features. Within Transifex, SmartCash maintains an organization which
contains multiple projects and one team of translators assigned to all
of the projects. Each project is assigned with one or more target
languages for translation by the project maintainer. When a translator
joins the team, they are able to choose the languages they feel able to
translate. They can then work on any projects specifying this language
as a target language.

- `Transifex <https://www.transifex.com>`_
- `Transifex Documentation <https://docs.transifex.com>`_
- `SmartCash translation projects <https://www.transifex.com/SmartCash>`_
- `SmartCash translators team <https://www.transifex.com/SmartCash/teams>`_

In general, languages with minimal regional variation are to be
translated into the common language (rather than regional) target.
Portuguese, for example, is simply translated into the ``pt`` target
language, rather than two separate target languages ``pt_BR`` and
``pt_PT``, for Portuguese as spoken in Brazil and Portugal,
respectively. As SmartCash grows, these languages may be separated out into
their regional variants by proofreaders, depending on demand. Exceptions
to this rule apply where the same spoken language is written
differently, such as ``zh_CN`` and ``zh_TW`` for Simplified Chinese and
Traditional Chinese.

Keeping translations consistent over time as multiple translators work
on each target language is a very important part of delivering a quality
user experience. For this reason, if you come across any SmartCash-specific
terminology such as `smartnodes`, you should use the **Concordance**
search function to see how the term has been translated in the past.
Transifex will also provide **Suggestions** and **History** if it
recognizes a similar string in the database of past translations. Stay
consistent with past language use, but also ensure your terminology is
up to date with current use!

.. image:: img/suggestions.png
   :width: 300 px
.. image:: img/concordance.png
   :width: 130 px

The following documentation describes the various projects and any
special features specific to the programming language in which the
product is written.

SmartCash Docs
==============

https://www.transifex.com/SmartCash/smart-docs

This project contains all content from the SmartCash Documentation hosted at
https://smartcash.readthedocs.io. Each
``.html`` page in the documentation appears as a file in the resources
section, named according to the navigation steps required to open the
page. The SmartCash Documentation is written in a documentation language
called `reStructuredText <http://docutils.sourceforge.net/rst.html>`_
and built using the open-source `Sphinx Documentation Generator
<http://www.sphinx-doc.org>`_. To simplify layout, most of the text has
no markup or code marks at all, but hyperlinks and certain formatting
must be reproduced in the target language as follows:

Inline literals
  **Source:** Type \`\`./smartcash-qt\`\` to run the file.

  **Target:** Escriba \`\`./smartcash-qt\`\` para correr el archivo.
  
  Note that two backticks `````` before and after a word or phrase will
  cause that text to appear as an ``inline literal``. This is commonly
  used to highlight code or commands to be typed by the user.

Bold and italic  
  **Source:** ``To encrypt your wallet, click **Settings** >
  **Encrypt** wallet.``

  **Target:** ``Para encriptar su billetera, haga click en
  **Settings** > **Encrypt** billetera.``

  A single ``*`` before and after a word or phrase will render it in an
  *italic* font, while a double ``**`` will render it in **bold**.

Internal hyperlinks
  **Source:** ``See :ref:`here <sporks>` for a brief introduction to sporks.``

  **Target:** ``Ver :ref:`aquí <sporks>` para una breve introducción a sporks``

  An internal hyperlink consists of the phrase ``:ref:``, followed by a
  single backtick `````, followed by some text which must be translated,
  followed by angle brackets with the link target ``< >``, followed by
  another backtick `````. Translate the text, but do not translate the
  text inside the angle brackets.

External hyperlinks
  **Source:** ``The `official SmartCash website <https://smartcash.cc>`_ also
  provides a list of major exchanges offering SmartCash.``

  **Target:** ``El `sitio web oficial de SmartCash <https://smartcash.cc>`_
  también proporciona una lista de las principales Casas de cambio o
  Exchanges que ofrecen SmartCash.``

  An external hyperlink consists of a single backtick `````, followed by
  some text which must be translated, followed by angle brackets with
  the link target ``< >``, followed by another backtick and a single or
  double underscore: ```_`` or ```__``. Translate the text, but do not
  translate the hyperlink (unless you want to link to a version of the
  page in the target language).


SmartCash Graphics
==================

https://www.transifex.com/smartcash/graphics

SmartCash visual products such as infographics, flyers and conference
handouts are produced using Adobe InDesign, Adobe Illustrator or
Microsoft Word and are available for use in the :ref:`Marketing section
<marketing>` of the SmartCash Documentation. It is important to view the
finished English layout during translation in order to understand the
context of the text you are translating. For example, many words should
be translated differently depending if they are a heading, a sentence or
an item in a diagram.

Because these proprietary file formats are not easily handled by
Transifex, the language content is exported to a text or Microsoft Excel
file and uploaded to Transifex for processing. If you translate SmartCash
Graphics, please send an email to hoangton@smartcash.cc or @hoangton#6301 on
`Discord <http://discord.smartcash.cc>`_ when you are finished to request layout
in the visual design.

SmartCash Website
=================

https://www.transifex.com/smartcash/website

The SmartCash website at https://smartcash.cc is available for translation in
Transifex. Please have the website open while you translate to correctly
understand the context of the source text. Once your translation is
complete, please send an email to hoangton@smartcash.cc or @hoangton#6301 on
`Discord <http://discord.smartcash.cc>`_ to request a build of your translation
onto the website.

SmartCash Web Wallet
====================

https://www.transifex.com/smartcash/webwallet

The SmartCash Web Wallet at https://wallet.smartcash.cc is available for translation in
Transifex. Please have the website open while you translate to correctly
understand the context of the source text. Once your translation is
complete, please send an email to hoangton@smartcash.cc or @hoangton#6301 on
`Discord <http://discord.smartcash.cc>`_ to request a build of your translation
onto the website.

SmartCard & Business
====================

https://www.transifex.com/smartcash/smartcard-business

The SmartCard & Business at https://card.smartcash.cc and https://business.smartcash.cc/ is available for translation in
Transifex. Please have the website open while you translate to correctly
understand the context of the source text. Once your translation is
complete, please send an email to hoangton@smartcash.cc or @hoangton#6301 on
`Discord <http://discord.smartcash.cc>`_ to request a build of your translation
onto the website.