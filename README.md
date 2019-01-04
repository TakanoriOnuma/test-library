# nodeモジュールのテスト
nodeモジュールの自作をお試しで作ってみる。  

ローカルインストールして実行するサンプルリポジトリ
+ https://github.com/TakanoriOnuma/test-use-library

このリポジトリを使って説明しているQiita記事
+ [githubからモジュールをインストールする方法](https://qiita.com/wintyo/items/9ce2110f08b9776fe87f)
+ [自作CLIを作る方法](https://qiita.com/wintyo/items/97b03a9757bbffda3a64)

## インストール
```
$ yarn add TakanoriOnuma/test-library
```

## 使用方法
### nodeモジュール
`mylib`という名前でinstallされるため、以下のようなコードが使える。

```js
const mylib = require('mylib');
const url = mylib.testJoin('a', 'b');
console.log(url);

console.log(mylib.fillArray(10, 5));
```

### CLI
`mylib-cli`という名前をエントリーポイントとしているため、以下のように実行できる。

```
$ mylib-cli --param test
receive param: test
```

