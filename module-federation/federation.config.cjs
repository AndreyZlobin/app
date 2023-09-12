
const {
    withNativeFederation, shareAll,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
    name: "remote",
    exposes: {
            './AuthModal': './src/remote/auth-modal/index.ts',
            './Button': './src/components/Button.tsx',
            './Header': './src/components/Header.tsx',
            './Footer': './src/components/Footer.tsx',
    },
    shared: shareAll(),
    skip: [
        'react-dom/server',
        'react-dom/server.node',
    ],
});