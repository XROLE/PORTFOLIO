import nodemailer from 'nodemailer';

nodemailer.createTestAccount((err, account) => {
    
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: account.user, // generated ethereal user
            pass: account.pass // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"meetXrole" <foo@example.com>', // sender address
        to: 'xrolediamond@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'This is just a confirmation that your message delivered successfuly. Thanks for your bold move.', // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
    });
});
