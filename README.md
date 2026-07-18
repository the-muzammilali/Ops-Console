# Orbinx Tier 2 — Repair Demo Repository

A live deployment operations dashboard demonstrating deployment state checking and timestamp formatting for Coolify-style APIs.

This dashboard renders deployment data with human-readable status labels and operation timestamps.

## Setup and Installation

This project uses `pnpm`. Make sure you have Node 20+ installed.

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   pnpm dev
   ```

3. **Verify typechecking:**
   ```bash
   pnpm typecheck
   ```

4. **Run unit tests:**
   ```bash
   pnpm test
   ```

5. **Build for production:**
   ```bash
   pnpm build
   ```

## Development and Diagnostics

This repository is configured to test automatic deployment agent repair capabilities. The primary source-of-truth types can be found in `src/types/deployment.ts`.

All adapter transformations occur inside `src/lib/deployment-status.ts`.

## License

This repository is licensed under the MIT License. See below for details.

---

### MIT License

Copyright (c) 2026 Orbinx Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
