/**
 * Converts a color from hex to rgba format
 *
 * @param hex
 * @param opacity
 */
export const hexToRgba = (hex: string, opacity: number) => {
    hex = hex.replace('#', '');
    return `rgba(${parseInt(hex.substring(0, 2), 16)}, ${parseInt(hex.substring(2, 4), 16)}, ${parseInt(
        hex.substring(4, 6),
        16
    )}, ${opacity})`;
};
