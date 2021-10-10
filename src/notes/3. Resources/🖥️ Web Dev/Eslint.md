Tags:  #🕸️/🟦 #🏷️ #📜️ 
Refererences:  [[🖥️ Web Dev]]
	
# Eslint Cheatsheet

Finds Problems
-   analyzes code to find issues
-   can run as part of CI pipeline

Fix Automatically
-   can auto fix many issues
-   fixes are syntax aware

Custom
-   preprocess code
-   custom parser
-   write custom rules to work with built in Eslint rules

Configure (.eslintrc)
-   config file is JSON structure
-   [](https://eslint.org/docs/rules/)[https://eslint.org/docs/rules/](https://eslint.org/docs/rules/) for rules that can be used
-   `off` `warn` `error` are the 3 values possible for rules

```json
{
	"rules": {
		"semi": ["warn", "always"],
		"quotes": ["error", "always"],
	}
}
```