const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
    [
        withSass,
        {
            webpack: function (config) {

                config.module.rules.push({
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: './assets/css/header.scss',
                            },
                        },
                    ],
                })

                config.module.rules.push({
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                    ],
                })

                config.module.rules.push({
                    test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                    use: {
                        loader: 'url-loader'
                    }
                })

                return config
            }
        }
    ],
    [
        withTypescript,
        {
            webpack: function (config) {
                config.module.rules.push({
                    test: /\.ts(x?)$/,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }

                })

                config.module.rules.push({
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                })

                config.module.rules.push({
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                    ],
                })

                config.module.rules.push({
                    test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                    use: {
                        loader: 'url-loader'
                    }
                })


                return config
            }
        }
    ]
])