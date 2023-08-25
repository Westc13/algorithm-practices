class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        key_arr = [*(''.join(key.split(' ')))]
        unique_key = []
        for key in key_arr:
            if key not in unique_key:
                unique_key.append(key)
        alphabet_arr = [chr(v) for v in range(97, 123)]
        decode_map = {unique_key[i]: alphabet_arr[i] for i in range(len(alphabet_arr))}
        
        decoded_message = ''
        for char in message:
            if char == ' ':
                decoded_message += char
            else:
                decoded_message += decode_map[char]
        return decoded_message
        
        