# Create basic Chrome plugin
1. manifest.json : base config file, add functionality

This will install the extension, but it doesn't do anything because Background scripts must be register which file would add functionality.

2. The background property : Extensions are event based that monitor for browser triggers in the background script to react with specified instructions.
   - install or update.
   - event dispatch.
   - message delivery.
   - Another view calls `runtime.getBackgroundPage`.

Background scripts are registered in the manifest under the `background` field. They are listed in an array after the `scripts` key, and `persistent` should be specified as false.

```
{
  ...
  "background": {
    "scripts": ["background.js"],
    "persistent": false
  },
  ...
}

##
#Multiple background scripts can be registered for modularized code.
##
{
    ...
    "background": {
      "scripts": [
        "backgroundContextMenus.js",
        "backgroundOmniBox.js",
        "backgroundOauth.js"
      ],
      "persistent": false
    },
    ...
  }
```


## 2. Initialize the extension : `runtime.onInstalled`
The `runtime.onInstalled` event initialize an extension on installation. Use this event to set a state or for one-time initialization, such as a context menu.

```
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["selection"]
  });
});
```



## 3. Introduce a user interface
An `action` manifest object set HTML to display UI.

```
"action": {
    "default_popup": "popup.html",
}
```

This HTML could references a CSS and JS file included into the extension's directory.




## 4. Add functionality
Include a script tag targeting js file in root plugin folder. This file could mix js with chrome browser API.


