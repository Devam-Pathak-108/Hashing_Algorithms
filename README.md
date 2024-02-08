# SHA256 Implementation in TypeScript

This is a self-made implementation of SHA256 in TypeScript. While it may not be suitable for industrial use, it serves as a valuable learning resource for understanding and exploring the SHA256 algorithm.

## Purpose
This project was created solely for learning purposes. Feel free to explore how it works and delve into the implementation details.

## Implementation Details
The implementation of SHA256 was based on following the steps outlined in [this blog post](https://medium.com/bootdotdev/how-sha-2-works-step-by-step-sha-256-90ecd4f09e4d), and coded according to the my understanding.

## Usage
For hashing, use the following endpoint:

http://localhost:5000/SHA256/generate_hash

### Parameters:
- `text`: "Your text which you want to hash"



For comparing hashes, use the following endpoint:

http://localhost:5000/SHA256/compare


### Parameters:
- `text`: "Text to compare"
- `hash`: "Your generated hash value"

## Disclaimer
This project is not intended for production use and should only be used for educational purposes.
