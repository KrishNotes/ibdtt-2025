module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/Styles/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/app.js');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}