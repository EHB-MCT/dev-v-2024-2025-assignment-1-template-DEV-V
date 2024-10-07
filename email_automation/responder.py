import email
from email.header import decode_header
import time
import logging
from email_automation.email_utils import connect_to_imap, connect_to_smtp, load_email_template
import config

logging.basicConfig(filename='../logs/auto_responder.log', 
                    level=logging.INFO, 
                    format='%(asctime)s - %(levelname)s - %(message)s')

def check_inbox():
    try:
        imap = connect_to_imap()
        imap.select("inbox")
        
        status, messages = imap.search(None, 'UNSEEN')
        if status != "OK":
            logging.info("No new emails found.")
            return []

        email_ids = messages[0].split()
        emails = []
        for email_id in email_ids:
            _, msg_data = imap.fetch(email_id, '(RFC822)')
            for response_part in msg_data:
                if isinstance(response_part, tuple):
                    msg = email.message_from_bytes(response_part[1])
                    emails.append(msg)

        imap.logout()
        logging.info(f"Found {len(emails)} new email(s).")
        return emails

    except Exception as e:
        logging.error(f"Error while checking inbox: {e}")
        return []

def send_auto_response(sender_email):
    try:
        smtp = connect_to_smtp()

        message_body = load_email_template()

        message = MIMEText(message_body)
        message['From'] = config.SENDER_EMAIL
        message['To'] = sender_email
        message['Subject'] = "Re: We received your email"

        smtp.sendmail(config.SENDER_EMAIL, sender_email, message.as_string())
        smtp.quit()

        logging.info(f"Auto-response sent to {sender_email}")

    except Exception as e:
        logging.error(f"Error sending auto-response to {sender_email}: {e}")

def process_emails():
    try:
        new_emails = check_inbox()
        for msg in new_emails:
            sender_email = msg.get('From')
            if sender_email:
                logging.info(f"New email from {sender_email}, sending auto-response...")
                send_auto_response(sender_email)

    except Exception as e:
        logging.error(f"Error processing emails: {e}")
