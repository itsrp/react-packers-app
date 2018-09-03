export const updateText = (entityType, fieldName, updatedText) => {
    return {
        type: 'ON_TEXT_CHANGE',
        data: {
            entityType,
            fieldName,
            updatedText
        }
    }
};