import * as vscode from 'vscode';
import * as path from 'path';
export function activate(context: vscode.ExtensionContext) {
    // Create status bar item
    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 500);
    statusBarItem.text = "$(cloud-upload) Submit Code";
    statusBarItem.tooltip = "Submit the current file to the local server";
    statusBarItem.command = "extension.submitCode"; // Command to execute when clicked
    statusBarItem.show(); // Show the button in the status bar
    
    let disposable = vscode.commands.registerCommand('extension.submitCode', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found!');
            return;
        }
        
        const apiAddress = vscode.workspace.getConfiguration().get<string>("codeSubmit.apiAddress", "http://localhost:3000/api/submit");


        const code = editor.document.getText();
        const filename = path.basename(editor.document.fileName);
        
        try {
            const fetch = (await import('node-fetch')).default;
            const response = await fetch(apiAddress, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ filename, code })
            });
            
            const result = await response.json() as { message: string };
            vscode.window.showInformationMessage(`Server Response: ${result.message}`);
        } catch (error) {
            vscode.window.showErrorMessage(`Error submitting code: ${error}`);
        }
    });
    
    

    context.subscriptions.push(disposable, statusBarItem);
    
}