const { Router } = require('express');
const nodemailer = require ('nodemailer');
const router = Router();

router.post('/send-email', async (req,res) => {
    const {name, email, phone, district, pub, message} = req.body;
//console.log(req.body)
    contentHTML = `
        <h1>Informacion de usuario</h1>
        <ul>
            <li> Nombre de usuario: ${name}</li>
            <li>email : ${email}</li>
            <li>Telefono : ${phone}</li>
            <li> Distrito : ${district}</li>
            <li>Publicación : ${pub}</li>
            <li>Mensaje : ${message}</li>
        </ul>
    `;
   // console.log(contentHTML)
   const transporter = nodemailer.createTransport({
        host : 'mail.habdes.pe',
        port : 587,
        secure : false,
        auth : {
            user : 'francomelgar@habdes.pe',
            pass : 'june1495'
        },
        tls : {
            rejectUnauthorized : false
        }
    })
      const info = await transporter.sendMail({
        from : "'Habdes server' <francomelgar@habdes.pe>",
        to : 'francomelgar4@gmail.com',
        subject : 'Website contact form',
        html : contentHTML
    })
    //res.send('received');
    res.redirect('/contacto.html');
});

module.exports = router;