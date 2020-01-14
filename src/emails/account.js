const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'kingsleywang2013@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const cancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'kingsleywang2013@gmail.com',
    subject: 'Cancelation Email',
    text: `Good by, ${name}. Hope to see you soon.`
  })
}

module.exports = {
  sendWelcomeEmail,
  cancelEmail
}
