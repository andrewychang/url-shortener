def g(n):
    if n < 7:
        return 0
    digits = 0
    
    #Calculate digits - 1 in n 
    i = n
    while i > 0:
        i //= 10
        digits += 1
    digits -= 1
    
    b = 0
    for i in range(0, digits):
        b = b * 9 + 10**i
    
    powerOfTen = 10**(digits)
    leftMostDigit = n // powerOfTen
        
    if leftMostDigit < 7:
        return b * leftMostDigit + g(n % powerOfTen)
    if leftMostDigit == 7:
        return b * leftMostDigit + (n % powerOfTen) + 1
    else:
        return b * (leftMostDigit - 1) + powerOfTen + g(n % powerOfTen)

def test():
    a = (g(4) == 0)
    b = (g(8) == 1)
    c = (g(68) == 7)
    d = (g(90) == 1 * 8 + 10)
    e = (g(77) == 1 * 7 + 8)
    f = (g(820) == 19 * 7 + 100 + 2)
    h = (g(779) == 19 * 7 + 80)
    if (a and b and c and d and e and f and h):
        return True
    return False