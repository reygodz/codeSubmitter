**Code Submit Extension**

🚀 Code Submit is a Visual Studio Code extension that allows users to submit their code to a local or remote server directly from the editor. It provides an easy-to-use status bar button and a command to send the currently open file's content to a configured API endpoint.

**🛠 Features**

🌐 Submit Code: Sends the content of the currently active file to a server.

🔘 Status Bar Button: Click the Submit Code button in the VS Code status bar for quick access.

⚙️ Configurable API Endpoint: Users can change the API address in VS Code settings.

🎡 Supports Any Server: Works with any API that accepts file submissions.

**📌 How to Install**

***Note: Make sure you install node fetch (npm install node-fetch)***

**Method 1:** 

- Install from VSIX (Local Installation)
- Download the .vsix package (submit-code-extension-1.0.0.vsix).
- Open VS Code.
- Go to Extensions (``).
- Click "..." (More Actions) → Install from VSIX...".
- Select the .vsix file.
- Done! 🎉

**Method 2:** 

- Install via CLI
- code --install-extension code-submit-extension-1.0.0.vsix

**🚀 How to Use**

**Option 1:** 

- Using the Status Bar Button
- Open a file in VS Code.
- Click the "Submit Code" button in the status bar (bottom right).
- The file content is sent to the configured server.

**Option 2:** 

- Using the Command Palette
- Press Ctrl+Shift+P to open the Command Palette.
- Search for "Submit Code" and select it or press CTRL+ALT+S
- The active file content will be sent to the server.

**⚙️ Configuring the API Endpoint**

By default, the extension sends requests to: **http://localhost:3000/api/submit**

If your server has a different address, you can update it in VS Code settings:

- Open File → Preferences → Settings (Ctrl + ,).
- Search for "Code Submit API Address".
- Update it with your server's API address.
- Alternatively, edit settings.json manually:

  {

  "codeSubmit.apiAddress": "http://your-server-ip:5000/api/submit"

  }

**🖥️ API Requirements**

Your server should accept a POST request at the configured API address with the following JSON payload:

{

`  `"fileName": "example.py",

`  `"code": "print('Hello, World!')"

}

It should return a JSON response:

{

`  `"message": "Code received successfully!"

}

**🔧 Troubleshooting**

- No active editor found! → Open a file before running the command.
- Error submitting code → Check if your server is running and the API address is correct.
- Status bar button is missing → Try restarting VS Code.

**🐝 License**

This extension is open-source and free to use.