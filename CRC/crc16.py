def crc16(data):
    crc = 0xFFFF          # initial value
    poly = 0x1021         # CRC-CCITT polynomial

    for ch in data:
        crc ^= ord(ch) << 8

        for _ in range(8):
            if crc & 0x8000:
                crc = (crc << 1) ^ poly
            else:
                crc = crc << 1

            crc &= 0xFFFF  # keep 16 bits

    return crc

data = "HELLO"

crc = crc16(data)

print("Data:", data)
print("CRC:", hex(crc))



received_data = "HELLO"      # assume received correctly
received_crc = crc

if crc16(received_data) == received_crc:
    print("No error detected")
else:
    print("Error detected")
