const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css')

const withPlugins = require('next-compose-plugins')


const ExtractTextPlugin = require('extract-text-webpack-plugin');

const internalReactToolboxDeps = /react-toolbox(?!.*node_modules)/
const externalReactToolboxDeps = /node_modules(?!\/react-toolbox(?!.*node_modules))/
const marked = require("marked");

const dirN = require('./scripts/getFileNumber.js')
const getFileContent = require('./scripts/getFileContent.js')
const getFileTag = require('./scripts/getFileTag.js')
const getContent = require('./scripts/getContent.js')

const renderer = new marked.Renderer();
renderer.paragraph = function (text) {
    return '<p>' + text.replace(/\n/g, '<br />') + '</p>';
}


const itemN = dirN('./items').length
const itemList = getFileContent(itemN)

const tags = ["Algo", "Python", "Programing", "C", "JavaScript", "Blog", "Poem", "React"]

const returnPosts = function (itemList, itemN) {
    let posts = {};
    for (i = 1; i <= itemN; i++) {
        let query = {};
        query["postIndex"] = i;
        query['postInfo'] = itemList[i - 1]
        const content = getContent(i)
        query["content"] = content;
        let path = "/p/" + i;
        posts[path] = {
            page: "/post",
            query: query
        }
    }
    return posts
}

const returnHome = function (itemList, itemN, tags) {
    let items = {}
    const page = "/"
    let query = {};
    query["itemN"] = itemN;
    query["itemList"] = itemList;
    query['tag'] = null;
    items["/"] = {
        page: page,
        query: query,
    }
    tags.forEach((tag) => {
        let query = {};
        const itemListTag = getFileTag(tag, itemN);
        const itemNTag = itemListTag.length
        query['itemN'] = itemNTag;
        query['itemList'] = itemListTag;
        query['tag'] = tag;
        const path = "/tag/" + tag;
        items[path] = {
            page: page,
            query: query
        }
    })
    return items
}

const nextConfig = {
    exportPathMap: async function (
        defaultPathMap, {
            dev,
            dir,
            outDir,
            distDir,
            buildId
        }
    ) {
        const posts = returnPosts(itemList, itemN)
        const homes = returnHome(itemList, itemN, tags)
        const others = {
            "privacypolicy": {
                page: "privacypolicy",
                query: null
            }
        }
        let all = {};
        all = Object.assign(others, posts)
        all = Object.assign(all, homes)
        // return {
        //     '/': {
        //         page: '/',
        //         query: HomeProps
        //     },
        //     '/about': {
        //         page: '/about'
        //     },
        // }
        return all
    },
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
                        gfm: true,
                        breaks: true,
                        renderer
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
            cssModules: true
        }
    ]
], nextConfig)