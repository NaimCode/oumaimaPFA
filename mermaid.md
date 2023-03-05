classDiagram
    Personne <-- Client
    Personne <-- Boutiquier
    Boutiquier "1"--"1..*" Boutique
    Boutique  "1..*"--"1..*" Produit
    Localisation "1"--"1" Boutique

graph TD
  APP --> B{CONNECTÉ?}
  B --> |Oui| C{BOUTIQUIER OU CLIENT}
  B --> |Non| Authentification
  Authentification --> F{A UN COMPTE}
  F -->|Oui| Connexion
   F -->|non| NouveauCompte
  C -->|BOUTIQUIER| IB["Interface Boutiquier"]
  C -->|CLIENT| IC["Interface Client"]
  NouveauCompte --> compteBoutiquier
  NouveauCompte --> compteClient
 Connexion --> C
compteBoutiquier --> IB
compteClient --> IC
