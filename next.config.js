const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
    [
        withSass,
        {
            webpack: function (config) {
                config.module.rules.push({
                    test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                    use: {
                        loader: 'url-loader'
                    }
                })

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
                                // Provide path to the file with resources
                                resources: './assets/css/resources.scss',

                                // Or array of paths
                                resources: ['./path/to/vars.scss', './path/to/mixins.scss']
                            },
                        },
                    ],
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
                return config
            }
        }
    ]
])