module.exports = {
    //...other configs
    webpack: (config, {}) => {
        config.module.rules.push({
                test: [/\.svg$/, /\.woff$/],
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:8].[ext]',
                    publicPath: `/_next/static/images/`, //specify the base path
                    outputPath: 'static/images', //and output path
                }
        })
        return config
    }
}