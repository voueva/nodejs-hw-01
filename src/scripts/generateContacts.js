import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (number) => { 
    try {
        const contacts = await readContacts();
        const newContacts = Array.from({ length: number }, () => createFakeContact());
        const updatedContacts = [...contacts, ...newContacts];
        await writeContacts(updatedContacts);
        console.log(`✅ Додано ${number} контакт(ів). Всього тепер: ${updatedContacts.length}`);
        }
    catch (error) {
        console.error(error.message);
  }
};      

generateContacts(5);
