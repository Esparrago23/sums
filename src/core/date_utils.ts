export const formatDateForDB = (date: Date | null | undefined): string | null => {
    if (!date) return null;
    return date.toISOString().split('T')[0]; // Formato YYYY-MM-DD para PostgreSQL
};

export const parseDBDate = (dateString: string | null | undefined): Date | null => {
    if (!dateString) return null;
    return new Date(dateString);
};