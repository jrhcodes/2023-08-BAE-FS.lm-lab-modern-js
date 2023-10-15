// Instructions can be found in imperative_vs_declarative.md

export const longPasswords = (passwords, minimumLength = 9) => passwords.filter(password=> password.length >= minimumLength);
