# Pyhton Project starter

# Author: Scorobogatskii Stas, Van Bergen Tuur

This project is a Python starter template designed to help developers quickly set up a Python environment with best practices and conventions. It includes sample functions, error handling, and unit tests to streamline new projects.

## Up & running

1. **Clone the repository**:
   ```bash
   git clone https://github.com/EHB-MCT/assignment-1-tuur-stas.git
   cd assignment-1-tuur-stas
   ```
2. **STEP 2 - Install dependencies**:
   pip install -r requirements.txt
3. **STEP 3 - Run the application**
   python3 starter_file.py
4. **STEP 4 - Run the tests**
   python -m unittest discover -s tests

   ```

   ```

## Sources

- (https://docs.python.org/3.14/)
- (https://packaging.python.org/en/latest/tutorials/packaging-projects/) used in the structure of the project.
- (https://github.com/pypa/sampleproject)
- OpenAI ChatGPT: Used for assistance in creating the project structure and descriptions.

## Project Root

README.md: Provides an overview of the project, setup instructions, and details about each file in the project.
requirements.txt: Lists the external dependencies.
setup.py: Contains configuration for packaging the project.

## project_name/

main.py: This script initializes the project settings and runs the main functionality.
config.py: Stores settings like app name, debug mode, and version, making it easy to adjust these values across the project.
**init**.py: Initializes the modules package, allowing easy import of the modules in this folder.

**init**.py: Initializes the modules package, allowing easy import of the modules in this folder.
module1.py: A module file containing reusable functions.

## project_name/utils/

**init**.py: Initializes the modules package, allowing easy import of the modules in this folder.

## tests/

**init**.py: Initializes the modules package, allowing easy import of the modules in this folder.
test_module.py: # The tests directory is for testing code, it allows you to check your code before modifying already working code.

.gitignore: Specifies files and directories for Git to ignore.
