export const countContacts = async () => {
    try {
        const contacts = await contacts();
        return contacts.length;
      } catch (error) {
        console.error(error.message);
        return 0;
      }
    };

console.log(await countContacts());
