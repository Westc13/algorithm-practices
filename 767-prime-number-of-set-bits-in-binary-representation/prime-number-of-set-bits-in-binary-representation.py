class Solution:
    def is_prime(self, n: int) -> bool:
        if n <= 1:
            return False
        if n == 2:
            return True
        if n % 2 == 0:
            return False
        for i in range(3, int(sqrt(n)) + 1, 2):
            if n % i == 0:
                return False
        return True

    def count_set_bits(self, n: int) -> int:
        count = 0
        while n:
            count += n & 1
            n >>= 1
        return count

    def countPrimeSetBits(self, left: int, right: int) -> int:
        count = 0
        for num in range(left, right + 1):
            set_bits_count = self.count_set_bits(num)
            if self.is_prime(set_bits_count):
                count += 1
        return count
        