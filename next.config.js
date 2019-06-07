const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css')

const withPlugins = require('next-compose-plugins')


const ExtractTextPlugin = require('extract-text-webpack-plugin');

const internalReactToolboxDeps = /react-toolbox(?!.*node_modules)/
const externalReactToolboxDeps = /node_modules(?!\/react-toolbox(?!.*node_modules))/

const nextConfig = {
    webpack: function (config, {
        dev,
        defaultLoaders
    }) {

        config.module.rules.push({
            test: /\.ts(x?)$/,
            use: {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                },
            },
            exclude: /node_modules/,

        })

        config.module.rules.push({
                test: /\.js(x?)$/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        [
                            "react-css-modules",
                        ]
                    ]
                },
                include: [internalReactToolboxDeps],
                exclude: /node_modules/,
            }),



            config.module.rules.push({
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: {
                    loader: 'url-loader'
                }
            })

        config.module.rules.push({
            test: /\.md$/,
            use: [{
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader",
                    options: {
                        pedantic: true,
                        breaks: true,
                        gfm: true
                    }
                }
            ]
        })

        config.externals = config.externals || [];
        config.externals = config.externals.map(external => {
            if (typeof external !== 'function') return external
            return (ctx, req, cb) => (internalReactToolboxDeps.test(req) ? cb() : external(ctx, req, cb))
        })


        return config

    },
    webpackDevMiddleware: config => {
        const ignored = [config.watchOptions.ignored[0], externalReactToolboxDeps]
        config.watchOptions.ignored = ignored
        return config
    },
}

module.exports = withPlugins([
    [
        withTypescript,
        {}
    ],
    [
        withSass,
        {}
    ],
    [
        withCSS,
        {
            cssModules:true
        }
    ]
], nextConfig)