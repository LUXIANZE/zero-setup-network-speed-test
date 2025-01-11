# Single HTML speedtest

- This project uses cloudflare for speed test
- Library used: https://github.com/cloudflare/speedtest

## Objective

- A rolling averages of network speed performance over time
- Generate userfriendly visual report and store data collected over time as evidence

## Technical Details and Requirements

- Save performance records (timestamped) on local file, could be csv
- Able to specified a tag to group the metrics (based on connection type or location)
- Able to detect network changes and prompt user to update tags