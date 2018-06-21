# js-download-file
 [![Version](https://img.shields.io/npm/v/js-download-file.svg)](https://www.npmjs.com/package/js-download-file)
 [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/danielrfranco/js-download-file/blob/master/LICENSE)

Javascript function that forces download of almost every file.

## Installation
`npm install js-download-file`


## Usage
`downloadFile(url, [filename])`

#### Parameters

|  Parameter            |  Type            | Description                          |
| --------------------- | :--------------: | -----------------------------------: |
| `url`                 | `string`         | The url to your file                 |
| `filename` (optional) | `string`         | The new name for the downloaded file |


#### Example

```
import downloadFile from 'js-download-file';

const url = 'path/to/your/file';
const fileName = 'textFile.jpg';

downloadFile(url, fileName);
```

## Donations
Donations are **greatly appreciated!**

**[BUY ME A COFFEE](https://www.paypal.me/DanielRFranco)**