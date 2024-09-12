const path = require("path");

module.exports = {
  entry: "./src/index.js", // Point d'entrée principal en JavaScript
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Traiter les fichiers TypeScript
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.js$/, // Traiter les fichiers JavaScript
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/, // Pour les fichiers CSS
        use: ["style-loader", "css-loader"], // exécuté de droite à gauche, loader pour lire les fichiers CSS et style pour les injecter dans le DOM
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Pour pouvoir importer des fichiers sans spécifier leur extension
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
