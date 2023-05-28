import { commands, window, Disposable } from "vscode";

export function registerFailableCommand(
	commandName: string,
	commandFn: (...args: any[]) => any
): Disposable {
	return commands.registerCommand(commandName, async (...args: any[]) => {
		try {
			return await commandFn(...args);
		} catch (error) {
			window.showErrorMessage("The command failed: " + error);
			return false;
		}
	});
}
