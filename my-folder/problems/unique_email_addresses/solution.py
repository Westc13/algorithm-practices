class Solution:
    def numUniqueEmails(self, emails: List[str]) -> int:
        unique_emails = set()

        for email in emails:
            domain = email[email.index("@")+1:]
            local = email[:email.index("@")]

            local_clean = local.replace(".", "").split("+")[0]
            unique_emails.add(local_clean + "@" + domain)

        return len(unique_emails)