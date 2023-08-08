const admin = require('firebase-admin');

// Replace with the path to your service account key
const serviceAccount = require('./olympiads-xyz-firebase-adminsdk-s5ngs-3a81339bca.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function setAdminClaim(userId) {
  try {
    // Set custom user claims on this newly created user.
    await admin.auth().setCustomUserClaims(userId, { isAdmin: true });
    console.log(`Custom claims set for user ${userId}`);
    admin
      .auth()
      .getUser(userId)
      .then(userRecord => {
        // The claims can be accessed on the user record.
        console.log(userRecord.customClaims);
      });
  } catch (error) {
    console.error('Error setting custom claims:', error);
  }
}

const userId = process.argv[2];
if (!userId) {
  console.error('Please provide a user ID as an argument.');
  process.exit(1);
}

setAdminClaim(userId);
