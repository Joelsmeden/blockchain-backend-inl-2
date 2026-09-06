1 Hashing & Mining (mineBlock)

🔴 [Röd commit] - [https://github.com/Joelsmeden/blockchain-backend-inl-2/commit/b773ee09f329d4a044a3012d71ed3d5f1c5ba80e] – Skrev enhetstest för deterministisk serialisering och SHA-256-hashning för att säkerställa att ordningen på nycklar inte påverkar hashen.
🟢 [Grön commit] - [https://github.com/Joelsmeden/blockchain-backend-inl-2/commit/d81768c527a98d4e680e4f4228ab978c9372280b] – Implementerade canonicalize() och calculateHash() i serializer.js för att få testerna att passera.

2 Block.js

🔴 [Röd commit] - [https://github.com/Joelsmeden/blockchain-backend-inl-2/commit/ce526aeab0349bd1cd095b702eeff0e488e9f55c] – Skrev enhetstest för Block-klassen för att verifiera att Proof-of-Work-mining (mineBlock) genererar en hash med rätt antal ledande nollor.
🟢 [Grön commit] - [https://github.com/Joelsmeden/blockchain-backend-inl-2/commit/f6f8f8839e633ebb38a10b96f7a07cb85b882678] – Implementerade Block-klassen med computeHash() och mineBlock()-loop i Block.js.

3 Blockchain.js

🔴 [Röd commit] - [https://github.com/Joelsmeden/blockchain-backend-inl-2/commit/f0052f6464a54a00f8a5a3e961222f21cf97fc66] – Skrev enhetstester för Blockchain-affärslogiken för att verifiera registrering, ägarbyten och att ogiltiga transaktioner (state validation) avvisas.
🟢 [Grön commit] - [https://github.com/Joelsmeden/blockchain-backend-inl-2/commit/cb6e123e43d33b28e4140f85ae669fc20280b0e1] – Implementerade Blockchain-klassen med state validation, addTransaction() och minePendingTransactions().

4 errorHandler.js

🔴 [Röd commit] - [https://github.com/Joelsmeden/blockchain-backend-inl-2/commit/bfca6fe4d32a3ca7c5bb95f4b362f37facfea07f] – Skrev enhetstester för error handling middleware för att säkerställa att anpassade fel och HTTP-statuskoder (400, 404, 422, 500) returneras korrekt.
🟢 [Grön commit] - [https://github.com/Joelsmeden/blockchain-backend-inl-2/commit/30c747ddb0c127bcd2df46b8a3f3538ec0c23232] – Implementerade custom errorHandler middleware med dynamisk statuskodshantering.

5 app.js

🔴 [Röd commit] - [https://github.com/Joelsmeden/blockchain-backend-inl-2/commit/e7246e533949793a72755031bf3efcc823c857d7] – Skrev integrationstester med Supertest för REST API-endpoints (/chain, /transactions, /mine, /items/:itemId) och felhantering via Express.
🟢 [Grön commit] - [https://github.com/Joelsmeden/blockchain-backend-inl-2/commit/0fd66329b7ffa490f87a676f5c0d0786ff5b7c4b] – Kopplade samman Express-applikationen, routes och controllers samt verifierade att hela testsviten passerar.
