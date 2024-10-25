# The tests directory is for testing code, it allows you to check your code before modifying already working code.

import unittest
from main import main

class TestMain(unittest.TestCase):
    def test_main_function(self):
        """Test the main function runs without errors."""
        try:
            main()
        except Exception as e:
            self.fail(f"main() raised an exception: {e}")