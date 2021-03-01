const path = require('path');
// importuję bibliotekę [path] z [node.js] 
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
entry: './src/app.js',
// definiuję plik wejściowy 
output: {
path: path.resolve(__dirname, 'build'),
 // definiuję ścieżkę wyjściową 
 filename: 'app.min.js',
// definiuję nazwę pliku wyjściowego
},
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ]
// obecnie brak dodatkowych ustawień 
},
plugins: [
    new HtmlWebpackPlugin({
template: './src/index.html', // wskazuję plik źródłowy
filename: 'index.html'
// określam nazwę dla pliku
})




] }
