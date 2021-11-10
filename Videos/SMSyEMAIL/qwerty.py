"""
Created on Tue Nov  9 17:10:48 2021
@author: lyda_
"""

from flask import Flask
import os
from twilio.rest import Client
from flask import request
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

app = Flask(__name__)

@app.route("/")
def inicio():
    test = os.environ.get("Test")
    return test


@app.route("/sms")
def sms():
    try:
        # Find your Account SID and Auth Token at twilio.com/console
        # and set the environment variables. See http://twil.io/secure
        account_sid = os.environ['TWILIO_ACCOUNT_SID']
        auth_token = os.environ['TWILIO_AUTH_TOKEN']
        client = Client(account_sid, auth_token)

        contenido = request.args.get("mensaje")
        destino = request.args.get("telefono")

        message = client.messages \
                    .create(
                            body=contenido,
                            from_='+13606673556',
                            to='+57' + destino
                        )

        print(message.sid)
        return "Enviado Correctamante"
    except Exception as e:
        print(e.message)
        return "Error al enviar SMS"


@app.route('/correo')
def correo():
    destino = request.args.get("correo_destino")
    asunto = request.args.get("asunto")
    mensaje = request.args.get("contenido")

    message = Mail(
        from_email=os.environ.get('FROM_EMAIL'),
        to_emails=destino,
        subject=asunto,
        html_content=mensaje
    )

    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
        return "Correo Enviado Correctamente"

    except Exception as e:
        print(e.message)
        return "Error al enviar EMail"


if __name__ == '__main__':
    app.run()
