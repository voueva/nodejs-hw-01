import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export const addOneContact = async () => {
    try {
        const contacts = await readContacts();
        const newContact = createFakeContact();
        const updatedContacts = [...contacts, newContact];
        await writeContacts(updatedContacts);

        console.log(`${newContact.name}, ${updatedContacts.length}`);
    }

    catch (error) {
        console.error(error.message);
    }
};

addOneContact();
