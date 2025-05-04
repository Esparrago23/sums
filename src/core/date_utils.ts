
export const formatDateForDB = (date: Date | null | undefined): string | null => {
    if (!date) return null;

    // Formato YYYY-MM-DD para PostgreSQL
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};