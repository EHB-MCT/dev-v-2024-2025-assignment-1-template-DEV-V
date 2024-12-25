# Contributing Guidelines

## Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)
- Git

### Setting Up Development Environment

1. **Fork the Repository**
   - Click the 'Fork' button on GitHub
   - Clone your fork locally

2. **Clone and Install**
```bash
git clone <your-fork-url>
cd <project-directory>
npm install
```

3. **Create a Branch**
```bash
git checkout -b feat/your-feature-name
```

## Development Workflow

### 1. Making Changes

- Follow the [project conventions](./CONVENTIONS.md)
- Write meaningful commit messages
- Keep changes focused and atomic
- Add tests for new features

### 2. Testing

Before submitting:
```bash
npm run test        # Run unit tests
npm run lint        # Check code style
npm run build       # Verify build
```

### 3. Submitting Changes

1. **Update Your Branch**
```bash
git fetch origin
git rebase origin/main
```

2. **Push Changes**
```bash
git push origin feat/your-feature-name
```

3. **Create Pull Request**
- Go to GitHub and create a PR
- Fill in the PR template
- Request review from maintainers

## Pull Request Guidelines

### PR Title Format
```
type(scope): brief description

Examples:
feat(tasks): add task filtering functionality
fix(ui): resolve mobile layout issues
docs(api): update endpoint documentation
```

### PR Description Template
```markdown
## Description
[Describe the changes and their purpose]

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactor
- [ ] Other (please specify)

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing performed

## Screenshots
[If applicable, add screenshots]

## Related Issues
Closes #[issue-number]
```

## Code Review Process

### Reviewer Guidelines
- Check code against project conventions
- Verify test coverage
- Review documentation updates
- Ensure performance considerations
- Validate security implications

### Author Responsibilities
- Respond to review comments promptly
- Make requested changes
- Update PR as needed
- Resolve conflicts with main branch

## Development Standards

### Code Quality
- Follow ESLint configuration
- Maintain consistent code style
- Write self-documenting code
- Add comments for complex logic

### Testing Requirements
- Unit tests for new features
- Integration tests for workflows
- Update existing tests as needed
- Maintain test coverage standards

### Documentation
- Update relevant documentation
- Add JSDoc comments for functions
- Include inline comments where needed
- Update README if required

## Community Guidelines

### Communication
- Be respectful and professional
- Use clear and concise language
- Provide context for questions
- Help others when possible

### Issue Reporting
- Check existing issues first
- Use issue templates
- Provide clear reproduction steps
- Include relevant information:
  - Browser/environment details
  - Error messages
  - Screenshots

## Recognition

Contributors will be:
- Added to CONTRIBUTORS.md
- Mentioned in release notes
- Credited in documentation

## Questions?

- Create an issue for clarification
- Join our community discussions
- Contact maintainers directly

Thank you for contributing to our project! 