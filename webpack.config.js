let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',

        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            "@babel/plugin-transform-react-jsx",
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose": true }]
                        ]
                    }
                }
            },
            // {
            //     test: /\.(le|c)ss$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //       {
            //         loader: 'css-loader', // translates CSS into CommonJS
                    
            //       },
            //       {
            //         loader: 'postcss-loader',
            //         options: { sourceMap: true, config: { path: 'src/less/postcss.config.js' } }
            //       },
            //       {
            //         loader: 'less-loader', // compiles Less to CSS
            //       },
            //     ],
                
                
                
                
            // },
              
              
            
            
            // {
            //     test: /\.module\.(le|c)ss$/,
            //     exclude:  /flexboxgrid/,
            //     use: [
            //         {
            //             loader: MiniCssExtractPlugin.loader,
            //             options: {
            //                 hmr: process.env.NODE_ENV === 'development'
            //             }
            //         },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 importLoaders: 1,
            //                 modules: {
            //                     localIdentName: '[local]__[sha1:hash:hex:7]'
            //                 }
            //             }
            //         },
            //           {
            //             loader: 'postcss-loader',
            //             options: { sourceMap: true, config: { path: 'src/less/postcss.config.js' } }
            //           },
            //           {
            //             loader: 'less-loader', // compiles Less to CSS
            //           },
            //     ]
            // },
            {
                test: /^((?!\.module).)*less$/,
                
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        }
                    }, 
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                        
                      },
                      {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: 'src/less/postcss.config.js' } }
                      },
                      {
                        loader: 'less-loader', // compiles Less to CSS
                      },
                    
                ]
            }, 
            {
                test: /^((?!\.module).)*css$/,
                
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        }
                    }, 
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                        
                      },
                      {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: 'src/less/postcss.config.js' } }
                      },
                      
                    
                ]
            }, 
            
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images/',
                    name: '[name].[ext]',
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                  outputPath: "fonts/",
                  name: '[name].[ext]',
                }
              }, 
        ]
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
            '~c': path.resolve(__dirname, 'src/components'),
            '~p': path.resolve(__dirname, 'src/pages'),
            '~s': path.resolve(__dirname, 'src/store'),
            '~d': path.resolve(__dirname, 'dist'),
        }
    },
    devServer: {
        historyApiFallback: true,
        overlay: {
            warnings: true,
            errors: true
          }
    }
};

//  для packege json ,
//   "browserslist": [
//     "> 15%",
//     "last 3 version"
//   ]

module.exports = conf;