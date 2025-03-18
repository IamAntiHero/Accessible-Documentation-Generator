const fs = require('fs');
const path = require('path');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Get port from Heroku environment
const port = process.env.PORT || 3000;

// Create a simple server that serves static files
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the build directory
// Create a default page if build directory doesn't exist
const buildDir = path.join(__dirname, 'build');

// Create build directory if it doesn't exist
if (!fs.existsSync(buildDir)) {
  console.log('Build directory does not exist, creating it...');
  try {
    fs.mkdirSync(buildDir, { recursive: true });
    console.log('Build directory created successfully');
  } catch (err) {
    console.error('Error creating build directory:', err);
  }
}

// Create index.html file if it doesn't exist
const indexHtmlPath = path.join(buildDir, 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
  console.log('Index file does not exist, creating it...');
  
  // Create a simple index.html file
  const indexHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AccessDocs</title>
    <style>
        body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            line-height: 1.6;
        }
        h1 {
            color: #2563eb;
        }
        .card {
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 1.5rem;
            margin: 2rem 0;
            background-color: #f9fafb;
        }
    </style>
</head>
<body>
    <h1>AccessDocs</h1>
    <p>Welcome to AccessDocs, a documentation generator focused on creating highly accessible documentation that works seamlessly with screen readers and other assistive technologies.</p>
    
    <div class="card">
        <h2>Getting Started</h2>
        <p>This is a demo deployment on Heroku. To use AccessDocs for your own documentation:</p>
        <ol>
            <li>Install the package: <code>npm install -g accessdocs</code></li>
            <li>Initialize a new project: <code>accessdocs init my-project</code></li>
            <li>Add your content in Markdown format</li>
            <li>Build your documentation: <code>accessdocs build</code></li>
            <li>Preview locally: <code>accessdocs serve</code></li>
        </ol>
    </div>
    
    <div class="card">
        <h2>Accessibility Features</h2>
        <ul>
            <li>Screen reader optimized content</li>
            <li>Proper heading hierarchy and document landmarks</li>
            <li>Keyboard navigation support</li>
            <li>High contrast mode</li>
            <li>Font size adjustment</li>
            <li>Simplified view for cognitive accessibility</li>
        </ul>
    </div>
    
    <footer>
        <p>Created with AccessDocs - Accessible Documentation Generator</p>
    </footer>
</body>
</html>
  `;
  
  try {
    fs.writeFileSync(indexHtmlPath, indexHtml);
    console.log('Index file created successfully');
  } catch (err) {
    console.error('Error creating index file:', err);
  }
}

console.log(`Serving static files from: ${buildDir}`);
app.use(express.static(buildDir));

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(buildDir, 'index.html'));
});

// Socket.io for live reload functionality
io.on('connection', (socket) => {
  console.log('Client connected');
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Start server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
