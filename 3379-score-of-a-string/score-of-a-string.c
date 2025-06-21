int scoreOfString(const char* s) {
    int score = 0;
    int i;
    for (int i = 0; s[i + 1] != '\0'; i++) {
        score += abs(s[i] - s[i + 1]);
    }
    return score;
}

