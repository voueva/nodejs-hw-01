export const getAllContacts = async () => {
    try {
        const contacts = await readContacts();
        return contacts;
      } catch (error) {
        console.error(error.message);
        return [];
      }
    }; 

console.log(await getAllContacts());
