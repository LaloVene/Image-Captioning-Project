#!/bin/bash
code=$(curl -s -o /dev/null -w "%{http_code}" 'https://bemyeyes.duckdns.org')
if [[ $code == 200 ]]; then
    exit 0
else
    exit 1
fi
