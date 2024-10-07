import imaplib
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import ssl
import config

def connect_to_imap():
    context = ssl.create_default_context()
    imap = imaplib.IMAP4_SSL(config.IMAP_SERVER, config.IMAP_PORT, ssl_context=context)
    imap.login(config.SENDER_EMAIL, config.SENDER_PASSWORD)
    return imap

def connect_to_smtp():
    context = ssl.create_default_context()
    smtp = smtplib.SMTP_SSL(config.SMTP_SERVER, config.SMTP_PORT, context=context)
    smtp.login(config.SENDER_EMAIL, config.SENDER_PASSWORD)
    return smtp

def load_email_template():
    template_path = os.path.join(os.path.dirname(__file__), '../templates/email.template.txt')
    with open(template_path, 'r') as file:
        return file.read()
