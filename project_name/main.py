# This is the main script for the application.
# Run this file to start the project.

from config import settings
from modules import module1

def main():
    print("Starting the application...")
    print("Loaded settings:", settings)
    module1.sample_function()

if __name__ == "__main__":
    main()

    