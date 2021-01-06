# Créer un mini-react
- Gestion du routage
- Validation des propriétés passées au composant
- Algorithme => se rapproche de l'algo de l'exercice *HereWeGo!*
- Chaque composant hérite d'un object `Component` ayant une méthode `display(newProps)`
- display appelle la méthode `shouldUpdate()` du composant courant => compare newProps avec les oldProps
- si shouldUpdate
- appelle la fonction `render` du composant
- si `render` invoque d'autres composants, le composant courant appelle la fonction `display (compProps)` des sous-composants
- le résultat de `display` est ajouté au DOM sous le noeud parent

# Créer un mini site de démo (2/3 pages) Utilisation du routing et du mini-react Un minimum de design