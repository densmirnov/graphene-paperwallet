# Paper Wallet Generate for Graphene/BitShares

This project is used as a starting point for development of
complementary tools for Graphene-based blockchains (e.g. BitShares).

The purpose of this project is to present a public/private key paid as
test and as QR-code.

## Ready To Use Download

You can find a ready to use precompiled page on the releases page of
this github project.

## Build from Source

You can compile from sources by

    git clone
    git submodule update --init

    # Replace `GPH` with Address prefix of your network
    vim plasma2/libraries/@graphene/ecc/config/index.js

    # Compile with webpack
    webpack

    # Open HTML file
    open dist/index.html
