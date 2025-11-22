
const functions = require('firebase-functions');
const admin = require('firebase-admin');
try{ admin.initializeApp() }catch(e){}
// placeholder AI analyzer
exports.aiAnalyzeText = functions.https.onCall(async (data, context) => {
  const text = (data.text||'').toLowerCase();
  const triggers = ['suicide','kill myself','want to die'];
  const matches = triggers.filter(k=>text.includes(k));
  return { severity: matches.length? 'high':'low', matches };
});
