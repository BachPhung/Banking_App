const nodemailer =  require('nodemailer')
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
require('dotenv').config()
const myOAuth2Client = new OAuth2(
    "690927759880-f4q179tk7atplor264cnk538dpi67ncg.apps.googleusercontent.com", "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",
    "https://developers.google.com/oauthplayground"
)
myOAuth2Client.setCredentials({
    refresh_token:"1//04-X8Ais4vn2PCgYIARAAGAQSNwF-L9IrXcdOhHavguDXQPkkDPkPzUh-dpX6QyEAkQEhqle-paUBN6JY3w6mFnSty3Pd0WddQ4Q"
});
const myAccessToken = myOAuth2Client.getAccessToken()
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        type: "OAuth2",
        user: "quangbachstts@gmail.com",
        clientId: "690927759880-f4q179tk7atplor264cnk538dpi67ncg.apps.googleusercontent.com",
        clientSecret: "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",
        refreshToken: "1//04-X8Ais4vn2PCgYIARAAGAQSNwF-L9IrXcdOhHavguDXQPkkDPkPzUh-dpX6QyEAkQEhqle-paUBN6JY3w6mFnSty3Pd0WddQ4Q",
        accessToken: myAccessToken
    },
})

module.exports = transporter