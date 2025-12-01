export const colors = {
    primary: "#6e63e4",
    secondary: "#d3d0f3"
};

export const categoryColors: Record<string, { bg: string; text: string }> = {
    'FRONT END': {
        bg: 'bg-blue-100',
        text: 'text-blue-600'
    },
    'UI/UX DESIGN': {
        bg: 'bg-purple-100',
        text: 'text-purple-600'
    },
    'BRANDING': {
        bg: 'bg-pink-100',
        text: 'text-pink-600'
    },
    'DEFAULT': {
        bg: 'bg-gray-100',
        text: 'text-gray-600'
    }
};

export function getCategoryColor(category: string) {
    return categoryColors[category] || categoryColors['DEFAULT'];
}