# Accessible-Documentation-Generator

# AccessDocs

AccessDocs is a documentation generator focused on creating highly accessible documentation that works seamlessly with screen readers and other assistive technologies.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/IamAntiHero/Accessible-Documentation-Generator)


## Features

- **WCAG Compliance**: Automatically ensures documentation meets WCAG 2.1 AA/AAA standards
- **Screen Reader Optimized**: Built from the ground up to work flawlessly with popular screen readers
- **Assistive Technology Testing**: Integrated testing for VoiceOver, NVDA, JAWS, and other assistive technologies
- **Semantic Structure**: Automatically generates proper heading hierarchies and document landmarks
- **Rich ARIA Support**: Intelligently adds appropriate ARIA attributes and roles
- **Alternative Formats**: Generates multiple versions optimized for different accessibility needs
- **Cognitive Accessibility**: Tools for simplifying complex content and improving readability
- **Keyboard Navigation**: Enhanced keyboard support with visible focus indicators
- **Accessible Code Blocks**: Makes code examples accessible to screen reader users
- **Multilingual Support**: Handles internationalization with appropriate language attributes

## Deployment Options

### Local Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/accessdocs.git
cd accessdocs
```

2. Install dependencies:

```bash
npm install
```

3. Initialize a new documentation project:

```bash
npx accessdocs init my-project
```

4. Configure your accessibility preferences in `accessdocs.config.js`

5. Add your documentation in Markdown format to the `docs` directory

6. Generate your accessible documentation:

```bash
npx accessdocs build
```

7. Preview and test the accessibility of your documentation:

```bash
npx accessdocs serve
```

### NPM Installation (Global)

1. Install the package globally:

```bash
npm install -g accessdocs
```

2. Initialize a new documentation project:

```bash
accessdocs init my-project
```

3. Continue with steps 4-7 from the Local Installation section.

### Deploy to Heroku

#### Prerequisites:
- A [Heroku account](https://signup.heroku.com/)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed
- Git installed on your machine

#### Option 1: One-Click Deployment

Click the "Deploy to Heroku" button at the top of this README to automatically deploy the application.

#### Option 2: Manual Deployment

1. Clone the repository:

```bash
git clone https://github.com/yourusername/accessdocs.git
cd accessdocs
```

2. Login to Heroku:

```bash
heroku login
```

3. Create a new Heroku app:

```bash
heroku create your-accessdocs-app
```

4. Add a Procfile (if not already present):

```bash
echo "web: npm start" > Procfile
```

5. Configure environment variables (if needed):

```bash
heroku config:set NODE_ENV=production
```

6. Deploy to Heroku:

```bash
git push heroku main
```

7. Open your application:

```bash
heroku open
```

#### Configuration on Heroku

- Your documentation files can be stored in the application's file system or connected to a database/storage service
- For production use, consider connecting to a persistent storage solution like S3 or a database
- Customization options are available through environment variables:
  ```bash
  heroku config:set ACCESSDOCS_THEME=dark
  heroku config:set ACCESSDOCS_WCAG_LEVEL=AAA
  ```

## Accessibility Features

### Screen Reader Optimization

AccessDocs ensures that documentation is perfectly navigable by screen readers by:

- Providing appropriate heading hierarchy for navigation
- Adding descriptive alt text for all images
- Ensuring proper semantic HTML structure
- Using ARIA landmarks and roles appropriately
- Creating skip navigation links
- Ensuring code examples are properly annotated

### Cognitive Accessibility

For users with cognitive disabilities, AccessDocs provides:

- Simplified content views with reduced complexity
- Reading level analysis and suggestions
- Consistent navigation and predictable page structure
- Options to reduce animations and distractions
- Clear, plain language summaries of complex topics

### Motor Disability Support

For users with motor disabilities, AccessDocs ensures:

- Complete keyboard navigability
- Large, easily clickable interaction targets
- Reduced need for precise mouse movements
- Shortcut keys for common operations

### Visual Impairment Support

Beyond screen reader support, AccessDocs provides:

- High contrast themes
- Customizable text sizing
- Support for user font preferences
- Respecting system-level color scheme preferences

## Configuration

AccessDocs can be configured using the `accessdocs.config.js` file. See the [configuration documentation](./docs/configuration.md) for details.

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## License

MIT
