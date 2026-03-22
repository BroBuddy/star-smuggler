export const makeUrlsClickable = (content: any) => {
    if (!content) return

    const rulesRegex = /[ER]\d{3}[A-Z]?/g
    const transformedText = content.replace(
    rulesRegex,
    (match: string) => {
        const ruleId = match.replace(/\s+/g, '-');
        return `<a href="/${ruleId}" class="text-red-500 font-mono">${ruleId}</a>`;
    }
);

    return transformedText
}
