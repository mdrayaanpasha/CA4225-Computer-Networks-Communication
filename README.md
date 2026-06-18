# CA4225: Computer Networks & Communication

This repository contains a collection of code snippets and implementations related to the **CA4225 - Computer Networks & Communication** course. 

## Overview

This project is primarily focused on the theoretical aspects of computer networking. As such, the code here serves as a set of basic demonstrations for various concepts discussed in class. 

> **Note:** This is a theoretical class repository. Some algorithms might be missing, and the code may not be fully optimized or complete in all sections (mostly due to a healthy mix of academic focus and occasional laziness).

## Repository Structure

### 1. Cyclic Redundancy Check (CRC)
Located in the `/CRC` directory, this section demonstrates error detection using the CRC-16 algorithm.
- **File:** `crc16.py`
- **Implementation:** Uses the CRC-CCITT polynomial (`0x1021`) to generate and verify checksums for data integrity.

### 2. Socket Programming
Located in the `/SOCKETS` directory, this section provides a basic example of TCP communication using Node.js.
- **Files:** `server.js`, `client.js`
- **Functionality:** Implements a simple Echo server where the client sends a message and the server returns the same data.

## Usage

### Running CRC (Python)
```bash
python CRC/crc16.py
```

### Running Sockets (Node.js)
1. Start the server:
   ```bash
   node SOCKETS/server.js
   ```
2. In a separate terminal, run the client:
   ```bash
   node SOCKETS/client.js
   ```

## Disclaimer
As mentioned, this is a work-in-progress (or perhaps a work-in-stagnation) for a theoretical course. Expect rough edges, missing algorithms, and code that prioritizes simplicity over production-grade robustness.
