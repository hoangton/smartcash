.. meta::
   :description: SmartCash NodeClient wallet startup arguments and RPC command reference
   :keywords: smartcash, core, wallet, arguments, commands, RPC

.. _nodeclient-rpc:

======================
Arguments and commands
======================

All command-line options (except for ``-datadir`` and ``-conf``) may be
specified in a configuration file, and all configuration file options
may also be specified on the command line. Command-line options override
values set in the configuration file. The configuration file is a list
of ``setting=value`` pairs, one per line, with optional comments
starting with the ``#`` character.

The configuration file is not automatically created; you can create it
using your favorite plain-text editor. By default, smartcash-qt (or smartcashd) will look for a file named ``smartcash.conf`` in the smartcash data directory, but both the data directory and the configuration file path may be changed using the -datadir and -conf command-line arguments.

+----------+--------------------------------+-----------------------------------------------------------------------------------------------+
| Platform | Path to data folder            | Typical path to configuration file                                                            |
+==========+================================+===============================================================================================+
| Linux    | ~/                             | /home/username/.smartcash/smartcash.conf                                                      |
+----------+--------------------------------+-----------------------------------------------------------------------------------------------+
| macOS    | ~/Library/Application Support/ | /Users/username/Library/Application Support/smartcash/smartcash.conf                          |
+----------+--------------------------------+-----------------------------------------------------------------------------------------------+
| Windows  | %APPDATA%                      | (Vista-10) C:\\Users\\username\\AppData\\Roaming\\SmartCash\\smartcash.conf                   |
|          |                                |                                                                                               |
|          |                                | (2000-XP) C:\\Documents and Settings\\username\\Application Data\\SmartCash\\smartcash.conf   |
+----------+--------------------------------+-----------------------------------------------------------------------------------------------+

Note: if running smartcash in testnet mode, the sub-folder ``testnet3`` will be appended to the data directory automatically.

Command line arguments
======================

These commands are accurate as of SmartCash NodeClient.

- `smartcashd`_
- `smartcash-qt`_
- `smartcash-cli`_



smartcashd
----------

SmartCash NodeClient Daemon same as 


smartcash-qt
------------

SmartCash version v1.2.6 (64-bit)

Usage:
^^^^^
  smartcash-qt [command-line options]                     

Options:
^^^^^^^^


-?
Print this help message and exit 
-version
Print version and exit 
-alertnotify=<cmd>
Execute command when a relevant alert is received or we see a really long fork (%s in cmd is replaced by message) 
-blocknotify=<cmd>
Execute command when the best block changes (%s in cmd is replaced by block hash) 
-checkblocks=<n>
How many blocks to check at startup (default: 6, 0 = all) 
-checklevel=<n>
How thorough the block verification of -checkblocks is (0-4, default: 3) 
-conf=<file>
Specify configuration file (default: smartcash.conf) 
-datadir=<dir>
Specify data directory 
-dbcache=<n>
Set database cache size in megabytes (4 to 16384, default: 300) 
-loadblock=<file>
Imports blocks from external blk000??.dat file on startup 
-maxorphantx=<n>
Keep at most <n> unconnectable transactions in memory (default: 100) 
-maxmempool=<n>
Keep the transaction memory pool below <n> megabytes (default: 300) 
-mempoolexpiry=<n>
Do not keep transactions in the mempool longer than <n> hours (default: 72) 
-par=<n>
Set the number of script verification threads (-4 to 16, 0 = auto, <0 = leave that many cores free, default: 0) 
-prune=<n>
Reduce storage requirements by pruning (deleting) old blocks. This mode is incompatible with -txindex and -rescan. Warning: Reverting this setting requires re-downloading the entire blockchain. (default: 0 = disable pruning blocks, >1414 = target size in MiB to use for block files) 
-reindex-chainstate
Rebuild chain state from the currently indexed blocks 
-reindex
Rebuild chain state and block index from the blk*.dat files on disk 


Connection options:
^^^^^^^^^^^^^^^^^^^

-addnode=<ip>
Add a node to connect to and attempt to keep the connection open 
-banscore=<n>
Threshold for disconnecting misbehaving peers (default: 100) 
-bantime=<n>
Number of seconds to keep misbehaving peers from reconnecting (default: 86400) 
-bind=<addr>
Bind to given address and always listen on it. Use [host]:port notation for IPv6 
-connect=<ip>
Connect only to the specified node(s) 
-discover
Discover own IP addresses (default: 1 when listening and no -externalip or -proxy) 
-dns
Allow DNS lookups for -addnode, -seednode and -connect (default: 1) 
-dnsseed
Query for peer addresses via DNS lookup, if low on addresses (default: 1 unless -connect) 
-externalip=<ip>
Specify your own public address 
-forcednsseed
Always query for peer addresses via DNS lookup (default: 0) 
-listen
Accept connections from outside (default: 1 if no -proxy or -connect) 
-listenonion
Automatically create Tor hidden service (default: 0) 
-maxconnections=<n>
Maintain at most <n> connections to peers (default: 125) 
-maxreceivebuffer=<n>
Maximum per-connection receive buffer, <n>*1000 bytes (default: 5000) 
-maxsendbuffer=<n>
Maximum per-connection send buffer, <n>*1000 bytes (default: 1000) 
-maxtimeadjustment
Maximum allowed median peer time offset adjustment. Local perspective of time may be influenced by peers forward or backward by this amount. (default: 4200 seconds) 
-onion=<ip:port>
Use separate SOCKS5 proxy to reach peers via Tor hidden services (default: -proxy) 
-onlynet=<net>
Only connect to nodes in network <net> (ipv4, ipv6 or onion) 
-permitbaremultisig
Relay non-P2SH multisig (default: 0) 
-peerbloomfilters
Support filtering of blocks and transaction with bloom filters (default: 1) 
-port=<port>
Listen for connections on <port> (default: 9678 or testnet: 19678) 
-proxy=<ip:port>
Connect through SOCKS5 proxy 
-proxyrandomize
Randomize credentials for every proxy connection. This enables Tor stream isolation (default: 1) 
-rpcserialversion
Sets the serialization of raw transaction or block hex returned in non-verbose mode, non-segwit(0) or segwit(1) (default: 1) 
-seednode=<ip>
Connect to a node to retrieve peer addresses, and disconnect 
-timeout=<n>
Specify connection timeout in milliseconds (minimum: 1, default: 5000) 
-torcontrol=<ip>:<port>
Tor control port to use if onion listening enabled (default: 127.0.0.1:9051) 
-torpassword=<pass>
Tor control port password (default: empty) 
-upnp
Use UPnP to map the listening port (default: 0) 
-whitebind=<addr>
Bind to given address and whitelist peers connecting to it. Use [host]:port notation for IPv6 
-whitelist=<IP address or network>
Whitelist peers connecting from the given IP address (e.g. 1.2.3.4) or CIDR notated network (e.g. 1.2.3.0/24). Can be specified multiple times. Whitelisted peers cannot be DoS banned and their transactions are always relayed, even if they are already in the mempool, useful e.g. for a gateway 
-whitelistrelay
Accept relayed transactions received from whitelisted peers even when not relaying transactions (default: 1) 
-whitelistforcerelay
Force relay of transactions from whitelisted peers even if they violate local relay policy (default: 1) 
-maxuploadtarget=<n>
Tries to keep outbound traffic under the given target (in MiB per 24h), 0 = no limit (default: 0) 


Wallet options:
^^^^^^^^^^^^^^^

-disablewallet
Do not load the wallet and disable wallet RPC calls 
-keypool=<n>
Set key pool size to <n> (default: 100) 
-fallbackfee=<amt>
A fee rate (in SMART/kB) that will be used when fee estimation has insufficient data (default: 0.0002) 
-mintxfee=<amt>
Fees (in SMART/kB) smaller than this are considered zero fee for transaction creation (default: 0.00001) 
-paytxfee=<amt>
Fee (in SMART/kB) to add to transactions you send (default: 0.00) 
-rescan
Rescan the block chain for missing wallet transactions on startup 
-salvagewallet
Attempt to recover private keys from a corrupt wallet on startup 
-spendzeroconfchange
Spend unconfirmed change when sending transactions (default: 1) 
-txconfirmtarget=<n>
If paytxfee is not set, include enough fee so transactions begin confirmation on average within n blocks (default: 2) 
-usehd
Use hierarchical deterministic key generation (HD) after BIP32. Only has effect during wallet creation/first start (default: 1) 
-upgradewallet
Upgrade wallet to latest format on startup 
-wallet=<file>
Specify wallet file (within data directory) (default: wallet.dat) 
-walletbroadcast
Make the wallet broadcast transactions (default: 1) 
-walletnotify=<cmd>
Execute command when a wallet transaction changes (%s in cmd is replaced by TxID) 
-zapwallettxes=<mode>
Delete all wallet transactions and only recover those parts of the blockchain through -rescan on startup (1 = keep tx meta data e.g. account owner and payment request information, 2 = drop tx meta data) 


Debugging/Testing options:
^^^^^^^^^^^^^^^^^^^^^^^^^^

-uacomment=<cmt>
Append comment to the user agent string 
-debug=<category>
Output debugging information (default: 0, supplying <category> is optional). If <category> is not supplied or if <category> = 1, output all debugging information.<category> can be: addrman, alert, bench, cmpctblock, coindb, db, http, libevent, lock, mempool, mempoolrej, net, proxy, prune, rand, reindex, rpc, selectcoins, tor, zmq, qt. 
-help-debug
Show all debugging options (usage: --help -help-debug) 
-logips
Include IP addresses in debug output (default: 0) 
-logtimestamps
Prepend debug output with timestamp (default: 1) 
-minrelaytxfee=<amt>
Fees (in SMART/kB) smaller than this are considered zero fee for relaying, mining and transaction creation (default: 0.001) 
-maxtxfee=<amt>
Maximum total fees (in SMART) to use in a single wallet transaction or raw transaction; setting this too low may abort large transactions (default: 1.00) 
-printtoconsole
Send trace/debug info to console instead of debug.log file 
-shrinkdebugfile
Shrink debug.log file on client startup (default: 1 when no -debug) 


Chain selection options:
^^^^^^^^^^^^^^^^^^^^^^^^

-testnet
Use the test chain 


Node relay options:
^^^^^^^^^^^^^^^^^^^

-bytespersigop
Equivalent bytes per sigop in transactions for relay and mining (default: 20) 
-datacarrier
Relay and mine data carrier transactions (default: 1) 
-datacarriersize
Maximum size of data in data carrier transactions we relay and mine (default: 223) 
-mempoolreplacement
Enable transaction replacement in the memory pool (default: 1) 


Block creation options:
^^^^^^^^^^^^^^^^^^^^^^^

-blockmaxweight=<n>
Set maximum BIP141 block weight (default: 3000000) 
-blockmaxsize=<n>
Set maximum block size in bytes (default: 500000) 
-blockprioritysize=<n>
Set maximum size of high-priority/low-fee transactions in bytes (default: 50000) 


RPC server options:
^^^^^^^^^^^^^^^^^^^

-server
Accept command line and JSON-RPC commands 
-rest
Accept public REST requests (default: 0) 
-rpcbind=<addr>
Bind to given address to listen for JSON-RPC connections. Use [host]:port notation for IPv6. This option can be specified multiple times (default: bind to all interfaces) 
-rpccookiefile=<loc>
Location of the auth cookie (default: data dir) 
-rpcuser=<user>
Username for JSON-RPC connections 
-rpcpassword=<pw>
Password for JSON-RPC connections 
-rpcauth=<userpw>
Username and hashed password for JSON-RPC connections. The field <userpw> comes in the format: <USERNAME>:<SALT>$<HASH>. A canonical python script is included in share/rpcuser. This option can be specified multiple times 
-rpcport=<port>
Listen for JSON-RPC connections on <port> (default: 9679 or testnet: 19679) 
-rpcallowip=<ip>
Allow JSON-RPC connections from specified source. Valid for <ip> are a single IP (e.g. 1.2.3.4), a network/netmask (e.g. 1.2.3.4/255.255.255.0) or a network/CIDR (e.g. 1.2.3.4/24). This option can be specified multiple times 
-rpcthreads=<n>
Set the number of threads to service RPC calls (default: 4) 


UI Options:
^^^^^^^^^^^

-choosedatadir
Choose data directory on startup (default: 0) 
-lang=<lang>
Set language, for example "de_DE" (default: system locale) 
-min
Start minimized 
-rootcertificates=<file>
Set SSL root certificates for payment request (default: -system-) 
-splash
Show splash screen on startup (default: 1) 
-resetguisettings
Reset all settings changed in the GUI 

smartcash-cli
-------------

== Addressindex ==
getaddressbalance
getaddressdeltas
getaddressmempool
getaddresstxids
getaddressutxos

== Blockchain ==
getbestblockhash
getblock "hash" ( verbose )
getblockchaininfo
getblockcount
getblockhash index
getblockhashes timestamp
getblockheader "hash" ( verbose )
getblockheaders "hash" ( count verbose )
getchaintips
getdifficulty
getmempoolinfo
getrawmempool ( verbose )
getspentinfo
gettxout "txid" n ( includemempool )
gettxoutproof ["txid",...] ( blockhash )
gettxoutsetinfo
verifychain ( checklevel numblocks )
verifytxoutproof "proof"

== Control ==
debug ( 0|1|addrman|alert|bench|coindb|db|lock|rand|rpc|selectcoins|mempool|mempoolrej|net|proxy|prune|http|libevent|tor|zmq|smartcash|privatesend|instantsend|smartnode|spork|keepass|mnpayments|gobject )
getinfo
help ( "command" )
stop

== Generating ==
generate numblocks ( maxtries )
getgenerate
setgenerate generate ( genproclimit )

== Mining ==
getblocktemplate ( SigningAddress )
getmininginfo
getnetworkhashps ( blocks height )
prioritisetransaction <txid> <priority delta> <fee delta>
submitblock "hexdata" ( "jsonparametersobject" )

== Network ==
addnode "node" "add|remove|onetry"
clearbanned
disconnectnode "node" 
getaddednodeinfo dummy ( "node" )
getconnectioncount
getnettotals
getnetworkinfo
getpeerinfo
listbanned
ping
setban "ip(/netmask)" "add|remove" (bantime) (absolute)
setnetworkactive true|false

== Rawtransactions ==
createrawtransaction [{"txid":"id","vout":n},...] {"address":amount,"data":"hex",...} ( locktime )
decoderawtransaction "hexstring"
decodescript "hex"
fundrawtransaction "hexstring" ( options )
getrawtransaction "txid" ( verbose )
sendrawtransaction "hexstring" ( allowhighfees instantsend )
signrawtransaction "hexstring" ( [{"txid":"id","vout":n,"scriptPubKey":"hex","redeemScript":"hex"},...] ["privatekey1",...] sighashtype )

== Smartcash ==
smartmining "command"...
smartnode "command"...
smartnodebroadcast "command"...
smartnodelist ( "mode" "filter" )
smartrewards "command"...
snsync [status|next|reset]
spork <name> [<value>]

== Util ==
createmultisig nrequired ["key",...]
estimatefee nblocks
estimatepriority nblocks
estimatesmartfee nblocks
estimatesmartpriority nblocks
validateaddress "smartcashaddress"
verifymessage "smartcashaddress" "signature" "message"

== Wallet ==
abandontransaction "txid"
addmultisigaddress nrequired ["key",...] ( "account" )
backupwallet "destination"
dumphdinfo
dumpprivkey "smartcashaddress"
dumpwallet "filename"
getaccount "smartcashaddress"
getaccountaddress "account"
getaddressesbyaccount "account"
getbalance ( "account" minconf includeWatchonly )
getnewaddress ( "account" )
getrawchangeaddress
getreceivedbyaccount "account" ( minconf )
getreceivedbyaddress "smartcashaddress" ( minconf )
gettransaction "txid" ( includeWatchonly )
getunconfirmedbalance
getwalletinfo
importaddress "address" ( "label" rescan p2sh )
importelectrumwallet "filename" index
importprivkey "smartcashprivkey" ( "label" rescan )
importpubkey "pubkey" ( "label" rescan )
importwallet "filename"
instantsendtoaddress "smartcashaddress" amount ( "comment" "comment-to" subtractfeefromamount )
keypoolrefill ( newsize )
listaccounts ( minconf includeWatchonly)
listaddressgroupings
listlockunspent
listreceivedbyaccount ( minconf includeempty includeWatchonly)
listreceivedbyaddress ( minconf includeempty includeWatchonly)
listsinceblock ( "blockhash" target-confirmations includeWatchonly)
listtransactions ( "account" count from includeWatchonly)
listunspent ( minconf maxconf  ["address",...] )
lockunspent unlock ([{"txid":"txid","vout":n},...])
move "fromaccount" "toaccount" amount ( minconf "comment" )
sendfrom "fromaccount" "tosmartcashaddress" amount ( minconf "comment" "comment-to" )
sendmany "fromaccount" {"address":amount,...} ( minconf "comment" ["address",...] )
sendtoaddress "smartcashaddress" amount ( "comment" "comment-to" subtractfeefromamount )
setaccount "smartcashaddress" "account"
settxfee amount
signmessage "smartcashaddress" "message"
walletlock
walletpassphrase "passphrase" timeout
walletpassphrasechange "oldpassphrase" "newpassphrase"

