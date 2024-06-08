#!/bin/bash

# Check if an initial input message is provided as a command line argument
if [ $# -eq 0 ]; then
    # Default initial input message
    input='{"queue": "countdown", "event": {"args": ["123-456-7890", 5, 1000], "history": []}}'
else
    # Use the provided command line argument as the initial input
    input="$1"
fi

# Loop up to 1000 times
for ((i=1; i<=1000; i++)); do
    # Run the main.js script and capture its output
    output=$(node js/main.js "$input")

    # Check if there was any output
    if [ -z "$output" ]; then
        echo "No output from the script. Exiting loop."
        break
    fi

    # Print the output to stdout for logging purposes
    echo "Output $i: $output"

    # Set the output as the next input
    input="$output"
done

echo "Loop completed. Total iterations: $((i-1))"
