export function parseAllowedFontSize(value: string): string {
    const allowedSizes = ['12px', '13px', '14px', '15px', '16px', '18px', '20px'];
    return allowedSizes.includes(value) ? value : '';
}

export function parseAllowedColor(value: string): string {
    const allowedColors = [
        'rgb(0, 0, 0)',
        'rgb(255, 255, 255)',
        'rgb(255, 0, 0)',
        'rgb(0, 255, 0)',
        'rgb(0, 0, 255)',
    ];
    return allowedColors.includes(value) ? value : '';
}
