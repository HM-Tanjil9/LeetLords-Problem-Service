const marked = require('marked');
const sanitize = require('sanitize-html');
const TurndownService = require('turndown')


function sanitizeMarkdownContent(markdownContent) {
    const turndownService = new TurndownService();

    // 1. Convert markdown to html
    const convertedHtml = marked.parse(markdownContent);
    // 2. Sanitize html content
    const sanitizedHtml = sanitize(convertedHtml, {
        allowedTags: sanitize.defaults.allowedTags.concat(['img'])
    });
    // 3. Convert the sanitized html back to markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;