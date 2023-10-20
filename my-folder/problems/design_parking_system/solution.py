class ParkingSystem:

    def __init__(self, big: int, medium: int, small: int):
        self.available_slots = [big, medium, small]
        

    def addCar(self, carType: int) -> bool:
        carType -= 1
        if self.available_slots[carType] > 0:
            self.available_slots[carType] -= 1
            return True
        else:
            return False


# Your ParkingSystem object will be instantiated and called as such:
# obj = ParkingSystem(big, medium, small)
# param_1 = obj.addCar(carType)