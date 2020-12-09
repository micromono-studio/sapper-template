const sveltePreprocess = require('svelte-preprocess')

function createPreprocessor(sourceMap = false) {
    return sveltePreprocess({
        sourceMap,
        defaults: {
            style: 'scss',
        },
        postcss: {
            plugins: [require('autoprefixer')()],
        },
        scss: {
            prependData: `@import 'src/styles/utils.scss';`,
        },
    })
}
module.exports = {
    createPreprocessor,
    preprocess: createPreprocessor(),
}
