const { ModuleFederationPlugin } = require("webpack").container;
const { NodeFederationPlugin, StreamingTargetPlugin } = require("@module-federation/node");
const common = require('@kspr-dev/common');

const shared = {
    react: {
        singleton: true,
        requiredVersion: common.dependencies['react']
    }, 
    "react-dom": {
        singleton: true,
        requiredVersion: common.dependencies['react-dom']
    },
    "react-dom/client": {
        singleton: true,
        requiredVersion: common.dependencies['react-dom']
    },
    "react-router": {
        singleton: true, 
        requiredVersion: common.dependencies['react-router']
    },
    "react-router-dom": {
        singleton: true, 
        requiredVersion: common.dependencies['react-router-dom']
    }
}

module.exports =  {
    client: [
        new ModuleFederationPlugin({
            name: 'kspr_dev_articles',
            filename: 'remoteEntry.js',
            exposes: {
                './Articles': './src/Articles',
            },
            shared
        })
    ],
    server: [
        new NodeFederationPlugin({
            name: 'kspr_dev_articles',
            filename: 'remoteEntry.js',
            library: { type: "commonjs-module" },
            exposes: {
                './Articles': './src/Articles/index.server',
            },
            shared
        }),
        new StreamingTargetPlugin({
            name: "kspr_dev_articles",
            library: { type: "commonjs-module" },            
            remotes: {},
        }),
    ]
}