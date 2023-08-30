const path = require('path');

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",
  
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: './ts/index.ts',
    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: path.join(__dirname, "dist"),
        // 出力ファイル名
        filename: "index.js"
    },
    module: {
        rules: [
            {
              // 拡張子 .ts もしくは .tsx の場合
              test: /\.tsx?$/,
              // TypeScript をコンパイルする
              use: "ts-loader"
            }
        ]
    },
    // import 文で .ts や .tsx ファイルを解決するため
    resolve: {
        modules: [
            "node_modules",
        ],
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        // ポート番号の指定
        port: 9000,
    },
    // 監視除外ファイルの指定
    watchOptions: {
        ignored: /node_modules/,
        poll: true, //ホットリロードできた。仮想環境限定？
    },
};