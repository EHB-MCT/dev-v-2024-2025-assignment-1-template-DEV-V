#Author: Scorobogatskii Stas, Van Bergen Tuur 

"""
Bronnen: 
https://docs.python.org/3.14/
https://packaging.python.org/en/latest/tutorials/packaging-projects/

"""

# Import statements - Importeer altijd modules bovenaan de file
import os
import sys

# Globale constante variabelen - Altijd UPPERCASE
GLOBAL_CONSTANT = 42

# Conventie voor variabelen en functies: snake_case

# Functies - altijd met een beschrijvende naam
def greet_user(name: str) -> str:
    """
    Groet de gebruiker met de opgegeven naam.

    Args:
        name (str): De naam van de gebruiker.

    Returns:
        str: Een begroetingsbericht.
    """
    # Variabelen: altijd met een beschrijvende naam
    greeting_message = f"Hello, {name}!"
    return greeting_message

# Functie zonder return-waarde
def print_greeting(name: str) -> None:
    """
    Print een begroetingsbericht voor de gebruiker.

    Args:
        name (str): De naam van de gebruiker.
    """
    print(greet_user(name))

    # Input: Vraag de gebruiker om invoer (gebruik beschrijvende variabelen)
    user_name = input("Please enter your name: ")
    
    # Output: Print een begroetingsbericht
    print_greeting(user_name)


# Klassen - Gebruik PascalCase
class UserProfile:
    """
    Een klasse om een gebruikersprofiel weer te geven.
    """
    def __init__(self, name: str, age: int):
        """
        Initialiseer een UserProfile object.

        Args:
            name (str): Naam van de gebruiker.
            age (int): Leeftijd van de gebruiker.
        """
        self.name = name   # Gebruik self voor instantiervariabelen
        self.age = age

    def display_info(self) -> None:
        """
        Print de informatie van de gebruiker.
        """
        print(f"User: {self.name}, Age: {self.age}")


# Typen annotaties
def calculate_area(width: float, height: float) -> float:
    """
    Bereken de oppervlakte van een rechthoek.

    Args:
        width (float): De breedte van de rechthoek.
        height (float): De hoogte van de rechthoek.

    Returns:
        float: De oppervlakte van de rechthoek.
    """
    return width * height


# Conventies voor lijsten en loops
def print_numbers(numbers: list[int]) -> None:
    """
    Print elk nummer in een lijst.

    Args:
        numbers (list[int]): Een lijst van gehele getallen.
    """
    for number in numbers:
        print(number)


# Error handling
def divide_numbers(num1: float, num2: float) -> float:
    """
    Deel twee getallen en geef de uitkomst.

    Args:
        num1 (float): Teller.
        num2 (float): Noemer.

    Returns:
        float: Het resultaat van de deling.
    """
    try:
        result = num1 / num2
    except ZeroDivisionError:
        print("Error: Kan niet delen door nul.")
        return 0.0
    return result


    project/
├── src/
│   └── main.py
├── tests/
│   └── test_main.py
├── README.md
├── requirements.txt
├── .gitignore
└── LICENSE