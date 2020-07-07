module.exports = function(eleventyConfig) {
    // Layout aliases make templates more portable.
    eleventyConfig.addLayoutAlias("default", "layouts/default.njk");

    // Copy all images directly to dist.
    eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

    return {
        dir: {
            input: "src/site",
            includes: "_includes",
            output: "_site",
        },
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        passthroughFileCopy: true,
    };
}
