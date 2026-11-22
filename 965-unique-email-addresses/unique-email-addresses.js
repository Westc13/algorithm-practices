/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const uniqueEmails = new Set();
    for (let email of emails) {
        const parts = email.split('@');
        const local = parts[0];
        const domain = parts[1];
        const firstPlusIndex = local.indexOf('+');
        let noPlus = '';
        if (firstPlusIndex === -1) {
            noPlus = local;
        } else {
            noPlus = local.slice(0, firstPlusIndex);
        }
        const alteredLocal = noPlus.replaceAll('.', '');
        const alteredEmail = `${alteredLocal}@${domain}`;
        
        uniqueEmails.add(alteredEmail);
    }
    return uniqueEmails.size;
};