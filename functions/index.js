const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51JhaQSSBq0hUTnMum0gY3DCb5dXdOnMCg4FoDt2yNQuzOTKdgiKrOry5ooVvkyYbekcWRRNgY1vEHOtYgRXJeC5200HWpVMJWU"
);

//API

//app config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command
exports.api = functions.https.onRequest(app);
//http://localhost:5001/clone-70df0/us-central1/api
