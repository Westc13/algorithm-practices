class Solution:
    def distanceTraveled(self, mainTank: int, additionalTank: int) -> int:
        distance = 0
        while mainTank > 0:
            fuel_to_use = min(mainTank, 5)
            distance += fuel_to_use * 10
            mainTank -= fuel_to_use

            if fuel_to_use == 5 and additionalTank > 0:
                mainTank += 1
                additionalTank -= 1
        return distance