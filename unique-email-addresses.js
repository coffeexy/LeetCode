/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let set = new Set(emails.reduce((prev, item) => {
        prev.push(getEmail(item))
        return prev;
    }, []))
    
    function getEmail(email) {
        let arrayEmail = email.split('@');
        return [arrayEmail[0].split('+')[0].replace(/\./g, ''), arrayEmail[1]].join('@');
    }
    return set.size;
};

// string.replace(/\+.*?(?=\@)/, '');
