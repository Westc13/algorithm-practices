class MyHashMap:

    def __init__(self):
        self.size = 1000
        self.map = [[] for _ in range(self.size)]

    def put(self, key: int, value: int) -> None:
        index = key % self.size
        for pair in self.map[index]:
            if pair[0] == key:
                pair[1] = value
                return
        self.map[index].append([key, value])

    def get(self, key: int) -> int:
        index = key % self.size
        for pair in self.map[index]:
            if pair[0] == key:
                return pair[1]
        return -1

    def remove(self, key: int) -> None:
        index = key % self.size
        for pair in self.map[index]:
            if pair[0] == key:
                self.map[index].remove(pair)
        return
# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)