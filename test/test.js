import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import fse from 'fs-extra';
import { copyFolderSync } from '../index.js';
 
describe('copyFolderSync', () => {
  it('should copy folder', () => {
    copyFolderSync('./test/example-from', './test/example-to');
    const fileExists = fse.existsSync('./test/example-to/test/test.txt');
    assert.strictEqual(fileExists, true);
    fse.emptyDirSync('./test/example-to');
  });
 
});