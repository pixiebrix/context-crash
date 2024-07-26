`chrome.runtime.getContexts` crash
---

Consistent crash on Version 127.0.6533.73 (Official Build) (arm64) when calling
`chrome.runtime.getContexts` for an extension with a `devtools_page`.

## Steps to reproduce:
- Load the extension (`dist` folder)
- Open the extension's Options Page
- Open the Dev Tools
- Click the "Get Contexts in Extension Page" button
