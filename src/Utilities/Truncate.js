// truncate the wallet address Text
export function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return text; // Return the original text if it's shorter than or equal to maxLength
    } else {
        return text.substring(0, maxLength) + '...'; // Truncate the text and append ellipsis
    }
}