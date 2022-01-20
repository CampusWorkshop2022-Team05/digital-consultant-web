# Digital Consultant

### Présentation

Le site de Digital Consultant a été pensé au goût du jour, nous avons opté pour une mise en forme "All-In-One" pour ce site, c'est-à-dire, tout dans une seule page avec une navigation fluide entre les différentes parties, le design de ce dernier quant à lui est moderne et épuré et s'adapte parfaitement aux critères d'exigences de la majeure partie des entreprises, un design certes simpliste mais innovant.

---

### Fonctionnement

Passons désormais au fonctionnement du site web, le client peut facilement modifier tous les textes du site grâce au fichier ``messages.json`` se trouvant dans le dossier ``config``, une fois cela fait, le site remplacera automatiquement les informations modifiées sur le site web à condition que le fichier soit hébergé à un endroit (le site ne le récupère pas en local mais directement sur github dû au fait que nous ne puissions pas faire de requête en local sans back-end à cause de la restriction des Policy)

Concernant la liste des partenaires et donc de leurs logos, il suffira de mettre les images dans ``images/carousel`` et d'inscrire les différents noms des images dans le champ ``images`` du fichiers ``messages.json``, quant aux avis, ils se composent en différents champs, le champ ``name`` qui lui contient le nom de l'entreprise, le champ ``content`` lui possède l'avis en question et pour terminer le champ ``author`` contient le nom de la personne ayant posté l'avis, ses informations sont néanmoins à inscrire à la main dans le fichier ``messages.json`` à l'intérieur du champ ``avis``

---

### ...