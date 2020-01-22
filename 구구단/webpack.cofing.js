import path from 'path';

module.exports = {
    name : "gugudan_training",
    mode : "development",
    devtool : 'fast' ,
    resolve : {
        extensions : ['.js','.jsx']   
    },

    entry : {
        app : ['',''],

    },

    module : {
        rules : [{
            test:"/\.jsx?/",
            loader : "babel-loader",
            options : {
                presets : ["@babel/preset-env" ,"@babel/preset-react"],
                plugins : ["@babel/plugin-proposal-class-properties"]
            }
        }]
    },

    output : {
        path : path.join(__dirname,'dist'),
        filename : 'app.js'
    }
}