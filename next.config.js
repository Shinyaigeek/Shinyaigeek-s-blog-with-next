const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

const withPlugins = require('next-compose-plugins')

const nextConfig = {
    webpack: function (config) {

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
            exclude: /node_modules/,
        })

        // config.module.rules.push({
        //     test: /\.scss$/,
        //     use: [
        //         'style-loader',
        //         'css-loader',
        //         'sass-loader',
        //     ],
        // })

        // config.module.rules.push({
        //     test: /\.css$/,
        //     use: [
        //         'style-loader',
        //         'css-loader',
        //     ],
        // })

        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader'
            }
        })

        config.module.rules.push({
            test:/\.md$/,
            use:[
                {
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader",
                    options: {
                        pedantic: true,
                        breaks:true,
                        gfm:true
                    }
                }
            ]
        })


        return config
    }
}

module.exports = withPlugins([
    [
        withTypescript,
        {}
    ],
    [
        withSass,
        {}
    ]
], nextConfig)