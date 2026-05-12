#!/bin/bash

# ai.vibecoding - MacOS / Linux Local Start Script

# Print styling
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}==============================================${NC}"
echo -e "${BLUE}   Welcome to ai.vibecoding Local Environment ${NC}"
echo -e "${BLUE}==============================================${NC}\n"

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}Error: Node.js is not installed.${NC}"
    echo "Please install Node.js (>= 20.x) from https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v)
echo -e "${GREEN}✓ Node.js detected: ${NODE_VERSION}${NC}"

# Install dependencies based on lockfile or normal install
echo -e "\n${BLUE}[1/2] Installing / Checking dependencies...${NC}"
npm install

# Start development server
echo -e "\n${BLUE}[2/2] Starting Development Server...${NC}"
echo -e "A new browser tab should open shortly.\n"

# Run Vite dev server with network exposure and auto-open
npm run dev -- --open --host 0.0.0.0
