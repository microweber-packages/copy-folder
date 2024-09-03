import fse from "fs-extra"

export const copyFolderSync = (from, to) => {
    fse.removeSync(to);
    fse.copySync(from, to);
}

export const copyFolderSyncVite = (from, to) => {
    return {
        name: 'vite-plugin-copy-folder',
        buildEnd: () => copyFolderSync(from, to)
    }
}