# Wallet Connect Demo App

Lightweight **Next.js** web app that demonstrates **wallet connectivity** and **account onboarding flows** in a single, unified interface.

> **Demo-only:** All logic runs client-side. No sensitive information is sent to any backend service.

---

## Overview

This project showcases a unified wallet connection experience with:

- Live wallet connection status updates
- Browser wallet / extension support (when available)
- Key-based access with deterministic account derivation
- Encrypted wallet import with integrity checks
- Responsive, utility-first UI

---

## Features

### 🔗 Wallet connection flow
- Live connection status updates
- WalletConnect-compatible pairing flow

### 🌐 Browser wallet support
- Uses wallet extensions when available
- Guides users to install required components if missing

### 🔑 Key-based access
- Secure validation
- Deterministic account derivation (consistent account results from the same inputs)

### 🔒 Encrypted wallet import
- Integrity checks on imported wallet files
- Safe client-side handling (no server upload)

### 📱 Responsive UI
- Utility-first responsive layout for desktop and mobile

---

## Tech Stack

- **Framework:** Next.js
- **Language:** JavaScript
- **Styling:** Utility-first CSS
- **Networking:**
  - WalletConnect-compatible provider
  - Configurable RPC endpoint

---

## Getting Started

### Prerequisites
- Node.js
- npm

### Install
```bash
npm install
