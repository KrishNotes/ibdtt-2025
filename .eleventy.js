const { DateTime } = require("luxon")

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/Styles/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/app.js');
    eleventyConfig.addPassthroughCopy('./src/admin');

    eleventyConfig.addFilter('postDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat('MMM d yyyy - h:mm a');
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}