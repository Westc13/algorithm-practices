class Solution:
    def minNumberOfHours(self, initialEnergy: int, initialExperience: int, energy: List[int], experience: List[int]) -> int:
        total_energy_needed = sum(energy)
        energy_training_hours = max(0, total_energy_needed + 1 - initialEnergy)

        experience_training_hours = 0
        current_experience = initialExperience

        for i in range(len(experience)):
            if current_experience <= experience[i]:
                experience_training_hours += experience[i] + 1 - current_experience
                current_experience = experience[i] + 1
            current_experience += experience[i]
        return energy_training_hours + experience_training_hours