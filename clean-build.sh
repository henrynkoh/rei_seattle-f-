#!/bin/bash
set -e

echo "Killing any existing Next.js processes..."
pkill -f next || true

echo "Removing old build artifacts..."
rm -rf .next node_modules/.cache

echo "Building the application..."
npm run build

echo "Starting the application..."
npm run start 