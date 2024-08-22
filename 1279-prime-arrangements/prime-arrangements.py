class Solution:
    def numPrimeArrangements(self, n: int) -> int:
        MOD = 10**9 + 7
        def is_prime(x):
            if x <= 1:
                return False
            if x <= 3:
                return True
            if x % 2 == 0 or x % 3 == 0:
                return False
            i = 5
            while i * i <= x:
                if x % i == 0 or x % (i + 2) == 0:
                    return False
                i += 6
            return True

        def count_primes(n):
            prime_numbers = 0
            prime_indices = 0
            for i in range(1, n + 1):
                if is_prime(i):
                    prime_indices += 1
                    if i <= n:
                        prime_numbers += 1
            return prime_numbers, prime_indices
            
        def factorial(x):
            result = 1
            for i in range(2, x + 1):
                result = (result * i) % MOD
            return result
        prime_numbers, prime_indices = count_primes(n)
        non_prime_numbers = n - prime_numbers
        non_prime_indices = n - prime_indices

        prime_arrangements = factorial(prime_indices)
        non_prime_arrangements = factorial(non_prime_indices)

        return (prime_arrangements * non_prime_arrangements) % MOD