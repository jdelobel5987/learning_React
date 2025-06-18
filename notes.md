On appelle ***framework front-end*** tout ensemble de classes, fonctions et utilitaires qui nous facilite la création d'applications web. Ces outils sont compatibles avec tous les navigateurs.

Plus généralement, le but est d'éviter de réinventer la roue pour n'importe quel besoin classique d'une application : gestion de l'interface utilisateur, des événements, du DOM, des formulaires, de l’évolution dans le temps des données manipulées par l'interface, etc. En plus, initialiser une base de code avec un framework simplifie non seulement votre prise de marques, mais aussi l’intégration d’une nouvelle personne sur la codebase.

React est un projet open-source, distribué sous la licence MIT et piloté par Facebook. Leurs produits web et mobile tels que Facebook, Messenger, Instagram, reposent en grande partie sur cette technologie. Comme React est open-source, vous pouvez accéder au code source [directement sur GitHub](https://github.com/facebook/react), proposer une feature, ou même notifier d'un problème ( *issue* ).

L'ambition de React est de  **créer des interfaces utilisateurs** , avec un outil **rapide** et  **modulaire** . L'idée principale derrière React est que vous construisiez votre application à partir de composants.  **Un composant regroupe à la fois le HTML, le JS et le CSS** , créés sur mesure pour vos besoins, et que vous pouvez **réutiliser** pour construire des interfaces utilisateurs.

À proprement parler, React… est une bibliothèque. Mais son écosystème est tellement développé maintenant qu'on peut aussi bien le considérer comme un framework à part entière ! 🙃 Ici, j'utiliserai le terme de *bibliothèque* pour parler de React, mais je ne me formalise pas si j'entends quelqu'un utiliser le terme de  *framework* .

React lui-même ne manipule pas directement le DOM du navigateur. À la place, React génère un  **DOM virtuel** , distinct du DOM des navigateurs. Au moment venu, il **réconcilie** ce DOM virtuel avec le DOM du navigateur, en prenant soin de minimiser le nombre d'opérations nécessaires. C’est ce qui nous permet d’avoir de  **super performances** , et d’utiliser React dans  **de nombreux contextes** , et pas seulement au sein du navigateur même, typiquement les applications mobiles natives, etc.

### En résumé

* Un **framework JS** est un **ensemble de classes, fonctions et utilitaires** qui nous facilitent la création d’applications pour les navigateurs ou mobiles.
* L’un des outils les plus populaires,  **React** , qui est une bibliothèque aussi bien qu’un framework, permet de  **créer des interfaces utilisateurs** .
* L’approche technique de React est de créer du  **code modulaire** , à base de  **composants réutilisables** .
* Trois des avantages de React sont sa  **communauté** , sa **documentation** et ses  **opportunités professionnelles** .
* Vous savez maintenant comment **transformer un simple fichier de HTML en React** – et avez créé votre premier composant !

### En résumé

Vous êtes venu à bout de ce chapitre sur les composants en JSX ! Bravo à vous. 😎 Maintenant vous savez que :

* une interface utilisateur (ou  *UI* ) est **constituée de multiples composants React** qui :
  * sont **réutilisables** ; par exemple, un bouton, un élément dans une liste, un titre,
  * **regroupent** la structure, les styles et le comportement d'un élément,
  * sont **traduits par React** en gros objets, qui sont **ensuite greffés au DOM** ;
* le JSX est une syntaxe créée par React permettant d'écrire du JavaScript. Il faut suivre quelques règles :
  * deux composants doivent toujours être wrappés dans  **un seul composant parent** ,
  * les noms des composants  **commencent par une majuscule** ,
  * les balises des composants  **doivent être refermées** .

### En résumé

* Les développeurs utilisent des outils automatisés pour faciliter leur expérience de développement.
* Create React App (CRA) est la boîte à outils créée par Facebook, qui reste encore la référence pour initier un projet React.
* Un projet initialisé avec CRA possède toujours :
  * un fichier `index.html`   qui est le template où vivra notre app React ;
  * un `package.json`   qui liste les dépendances et les scripts ;
  * un fichier `index.js`   dans lequel notre app React est initialisée, et greffée au HTML.
* CRA s'exécute avec l’aide d’un gestionnaire de paquet (dans ce cours, `yarn`).
* Webpack permet d'importer simplement les fichiers entre eux.

### En résumé

* L'attribut **className** permet de **préciser une classe à un élément React** pour lui indiquer du CSS.
* Le fichier CSS correspondant peut être **importé directement** dans un fichier  `.js`.
* L'attribut  `style`   permet d' **intégrer du style directement** , on appelle cela du * inline style* .
* Les **images** sont importées par React grâce à  **Webpack** . Il suffit d'importer l'image souhaitée.
