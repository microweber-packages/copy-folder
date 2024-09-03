# vite-plugin-copy-folder

vite-plugin-copy-folder is a plugin for copying distfolder.

## Installation



```bash
npm install vite-plugin-copy-folder --save-dev
```

## Usage

```JavaScript
import {copyFolderSyncVite} from "vite-plugin-copy-folder"

export default defineConfig(({ command, mode }) => ({
 

  plugins: [
     copyFolderSyncVite(`./from`, `./to`)
  ],

 
}));
```


## License

[MIT](https://choosealicense.com/licenses/mit/)