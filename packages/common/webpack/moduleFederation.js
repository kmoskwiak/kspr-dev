const { ModuleFederationPlugin } = require("webpack").container;
const { NodeFederationPlugin, StreamingTargetPlugin } = require("@module-federation/node");
const common = require("../package.json");

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
    },
    "@emotion/react": {
        singleton: true, 
        requiredVersion: common.dependencies['@emotion/react']
    },
}

const buildExposeMap = (exposes, type) => {
    return Object.keys(exposes).reduce((acc, key) => {
        acc[key] = `${exposes[key]}/index.${type}`;
        return acc;
    }, {});
}

/**
 * Module Federation Config
 * @param {string} name - name of the module
 * @param {Object} exposes - micro-frontends to expose
 * @returns configuration
 */
module.exports =  ({
    name,
    exposes,
}) => {
    const clientExposes = buildExposeMap(exposes, 'client');
    const serverExposes = buildExposeMap(exposes, 'server');

    return {
        client: [
            new ModuleFederationPlugin({
                name,
                filename: 'remoteEntry.js',
                exposes: clientExposes,
                shared
            })
        ],
        server: [
            new NodeFederationPlugin({
                name,
                filename: 'remoteEntry.js',
                library: { type: "commonjs-module", name },
                exposes: serverExposes,
                shared
            }),
            new StreamingTargetPlugin({
                name,
                library: { type: "commonjs-module" },            
                remotes: {},
            }),
        ]
    }
};