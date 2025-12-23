project:
  name: Wallet Connect Demo App
  type: frontend-demo
  icon: wallet
  purpose: >
    Lightweight web application to demonstrate wallet connectivity
    and account onboarding flows in a single interface.

overview:
  icon: overview
  description: >
    This project showcases a unified wallet connection experience.
    All logic runs client-side and no sensitive information is sent
    to any backend service.
  scope: demo-only

features:
  icon: features
  list:
    - name: Wallet connection flow
      icon: link
      description: live connection status updates
    - name: Browser wallet support
      icon: browser
      description: supports wallet extensions when available
    - name: Key-based access
      icon: key
      description: secure validation and deterministic account derivation
    - name: Encrypted wallet import
      icon: file-lock
      description: integrity checks on imported wallet files
    - name: Responsive UI
      icon: layout
      description: utility-first responsive layout

technology:
  icon: stack
  framework:
    name: Next.js
    icon: react
  language:
    name: JavaScript
    icon: code
  styling:
    name: Utility-first CSS
    icon: paint
  networking:
    icon: network
    providers:
      - WalletConnect-compatible provider
      - Configurable RPC endpoint

development:
  icon: terminal
  requirements:
    - Node.js
    - npm
  commands:
    install:
      icon: download
      value: npm install
    run:
      icon: play
      value: npm run dev
  local_url:
    icon: globe
    value: http://localhost:3000

configuration:
  icon: settings
  walletconnect:
    icon: link-settings
    description: >
      A WalletConnect-compatible project ID is required for wallet pairing.
      A default value may be used for local testing.
    environment_variables:
      NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID:
        icon: id
        value: your_project_id_here
      NEXT_PUBLIC_RPC_URL:
        icon: server
        value: https://your-rpc-endpoint
      NEXT_PUBLIC_WALLET_SNAP_VERSION:
        icon: tag
        value: latest
  production_notes:
    icon: warning
    list:
      - deployed domain must be whitelisted in WalletConnect Cloud
      - unapproved origins will cause connection failures
      - HTTPS is required for Web Crypto API support

browser_support:
  icon: browser-check
  description: >
    Some features require modern browsers with support for wallet
    extensions and experimental APIs.
  fallback_behavior:
    icon: fallback
    description: >
      If required components are unavailable, the app guides the user
      through installation or uses safe fallbacks.

deployment:
  icon: deploy
  supported_platforms:
    - cloud hosting providers
    - container-based infrastructure
  requirements:
    - HTTPS enabled
    - correct environment variables
    - wallet project configuration matches deployed domain

notes:
  icon: info
  disclaimer: >
    This application is intended as a functional demonstration only.
    It is not a production-ready wallet solution.
  design_philosophy:
    icon: compass
    principles:
      - minimal scope
      - fast validation
      - clarity over polish
